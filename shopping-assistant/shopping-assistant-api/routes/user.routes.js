const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const replaceId = require('./helpers').replaceId;
const error = require('./helpers').sendErrorResponse;
const util = require('util');
const indicative = require('indicative');
const bcrypt = require('bcryptjs');
// const verifyToken = require('./verify-token');
// const verifyRoleOrSelf = require('./verify-role');


// GET users list
router.get('/', function (req, res) {
    const db = req.app.locals.db;
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    db.collection('users').find().toArray(
        function (err, result) {
            if (err) throw err;
            res.json(result.map((user) => {
                user.id = user._id;
                delete user._id;
                delete user.password;
                return user;
            }));
        }
    );
});

// GET users details
router.get('/:name', /* verifyToken, verifyRoleOrSelf(3, true), */function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    const db = req.app.locals.db;
    const params = req.params;
    indicative.validate(params, { name: 'required' })
        .then(() => {
            db.collection('users', function (err, users) {
                if (err) throw err;
                users.findOne({ name: params.name },
                    (err, user) => {
                        if (err) throw err;
                        if (user === null) {
                            console.error(req, res, 404, `User with user name =${params.name} not found.`, err);
                        } else {
                            delete user.password;
                            replaceId(user);
                            res.json(user);
                        }

                    });
            });
        }).catch(errors => {
            console.error(req, res, 400, 'Invalid user ID: ' + util.inspect(errors))
        });
});

// Create new user
router.post('/', /*verifyToken, verifyRoleOrSelf(3, false),*/ function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    console.log('posting');
    const db = req.app.locals.db;
    const user = req.body;
    indicative.validate(user, {
        name: 'required|min:3|max:24|regex:^\\w+$',
        email: 'required|email',
        password: 'required|string|min:6',
    }).then(() => {
        user.password = bcrypt.hashSync(user.password, 8);
        user.isAdmin = true;
        const collection = db.collection('users');
        console.log('Inserting user:', user);
        collection.insertOne(user).then((result) => {
            if (result.result.ok && result.insertedCount === 1) {
                user.id = user._id;
                delete user._id
                delete user.password;
                // replaceId(user);
                const uri = req.baseUrl + '/' + user.id;
                console.log('Created User: ', uri);
                res.location(uri).status(201).json(user);
            } else {
                console.error(req, res, 400, `Error creating new user: ${user}`);
            }
        }).catch((err) => {
            console.error(req, res, 500, `Server error: ${err}`, err);
        });
    }).catch(errors => {
        console.error(req, res, 400, `Invalid user data: ${util.inspect(errors)}`);
    });
});

// // PUT (edit) user by id
router.put('/:name', /*verifyToken, verifyRoleOrSelf(3, true),*/ function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    const db = req.app.locals.db;
    const user = req.body;
    indicative.validate(user, {
        // id: 'regex:^[0-9a-f]{24}$',
        name: 'required',
        email: 'required',
        password: 'required|string',
        // role: 'required|regex:^\\d+$'
    }).then(() => {
        user.password = bcrypt.hashSync(user.password, 8);
        if (user.name !== req.params.name) {
            console.error(req, res, 400, `Invalid user data - id in url doesn't match: ${user}`);
            return;
        }
        const collection = db.collection('users');
        user._id = new mongodb.ObjectID(user.id);
        delete (user.id);
        console.log('Updating user:', user);
        collection.updateOne({ _id: new mongodb.ObjectID(user._id) }, { "$set": user })
            .then(result => {
                user.id = user._id;
                delete user._id
                if (result.result.ok && result.modifiedCount === 1) {
                    res.json(user);
                } else {
                    console.error(req, res, 400, `Data was NOT modified in database: ${JSON.stringify(user)}`);
                }
            }).catch((err) => {
                console.error(req, res, 500, `Server error: ${err}`, err);
            })
    }).catch(errors => {
        console.log(errors)
        console.error(req, res, 400, `Invalid user data: ${util.inspect(errors)}`);
    })
});

// // DELETE users list
router.delete('/:name', /*verifyToken, verifyRoleOrSelf(3, false),*/ function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    const db = req.app.locals.db;
    const params = req.params;
    indicative.validate(params, { name: 'required|regex:^[0-9a-f]{24}$' })
        .then(() => {
            db.collection('users', function (err, users_collection) {
                if (err) throw err;
                users_collection.findOneAndDelete({ name: params.name },
                    (err, result) => {
                        if (err) throw err;
                        if (result.ok) {
                            replaceId(result.value);
                            res.json(result.value);
                        } else {
                            error(req, res, 404, `User with name=${params.name} not found.`, err);
                        }
                    });
            });
        }).catch(errors => {
            error(req, res, 400, 'Invalid user Name: ' + util.inspect(errors))
        });
});


module.exports = router;
