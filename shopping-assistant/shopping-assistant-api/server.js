const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const rootPath = path.normalize(path.join(__dirname, '..'));
const userRoutes = require('./routes/user.routes');
// const productsRoutes = require('./routes/product.routes');
// const shopRoutes = require('./routes/shop.routes');

const app = express();

app.set('app', path.join(rootPath, 'app'));
app.use(logger('dev'));
app.use(bodyParser.json({ limit: '100mb' }));
app.use(cookieParser());

app.use('/api/users', userRoutes);
// app.use('api/shops', shopRoutes);
// app.use('/api/products', productsRoutes);

app.use((req, res, next) => {
    const err = new Еrror('Not Found');
    err.status = 404;
    next(err);
});

if (app.get("env") === "development") {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err.error || err || {}
        });
    });
} else {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: {}
        });
    });
}

const url = 'mongodb://localhost:27017/shopping-assistant';

MongoClient.connect(url, { db: { w: 1 } }).then((db) => {
    console.log('Successfully connected to server at: ' + url);
    app.locals.db = db.db('shopping-assistant');

    app.listen(9000, (err) => {
        if (err) {
            throw err;
        }
        console.log('Shopping assistant service API is listening on port 9000');
    });
}).catch((err) => {
    throw err;
})