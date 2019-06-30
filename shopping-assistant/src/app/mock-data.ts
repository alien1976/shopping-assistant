import { Shop } from './shops-model';
import { Product } from './product-model';
import { User } from './user-model';

export const MOCK_PRODUCTS = [
    new Product('Bread - Dobreja', 'https://i0.wp.com/gatherforbread.com/wp-content/uploads/2015/08/Easiest-Yeast-Bread.jpg?fit=800%2C1157&ssl=1', 0.70, { x: 300, y: 200 }, 'Very hot and fresh bread!'),
    new Product('Bread - Balla', 'https://i0.wp.com/gatherforbread.com/wp-content/uploads/2015/08/Easiest-Yeast-Bread.jpg?fit=800%2C1157&ssl=1', 0.55, { x: 300, y: 215 }, 'Very hot and fresh bread!'),
    new Product('Bread - Fantastichi', 'https://i0.wp.com/gatherforbread.com/wp-content/uploads/2015/08/Easiest-Yeast-Bread.jpg?fit=800%2C1157&ssl=1', 0.65, { x: 300, y: 230 }, 'Very hot and fresh bread!'),
    new Product('Water - Davin', 'https://www.brecorder.com/wp-content/uploads/2018/07/water-3.jpg', 0.50, { x: 260, y: 190 }, 'Refresh yourself!'),
    new Product('Water - Moter', 'https://www.brecorder.com/wp-content/uploads/2018/07/water-3.jpg', 0.55, { x: 260, y: 220 }, 'Refresh yourself!'),
    new Product('Water - Thirsty', 'https://www.brecorder.com/wp-content/uploads/2018/07/water-3.jpg', 0.40, { x: 260, y: 250 }, 'Refresh yourself!'),
    new Product('Salt - Crystal', 'https://cdn1.medicalnewstoday.com/content/images/articles/322/322745/salt-shaker.jpg', 1.25, { x: 210, y: 180 }, 'Crystal salt with perfect quality!'),
    new Product('Salt - CrystalN', 'https://cdn1.medicalnewstoday.com/content/images/articles/322/322745/salt-shaker.jpg', 1.10, { x: 210, y: 190 }, 'Crystal salt with perfect quality!'),
    new Product('Wine - Devora', 'https://images-na.ssl-images-amazon.com/images/I/71W%2B3bONurL._SX425_.jpg', 4.60, { x: 600, y: 135 }, 'Taste the new flavoir of this wine!'),
    new Product('Wine - Portovele', 'https://images-na.ssl-images-amazon.com/images/I/71W%2B3bONurL._SX425_.jpg', 10.60, { x: 600, y: 95 }, 'Taste the new flavoir of this wine!'),
    new Product('Frozen Chicken - Chick Chick', 'https://www.wholesalemeat.co.nz/wp-content/uploads/2016/10/Inghams-Whole-Chicken-Size-20.jpg', 5.60, { x: 450, y: 500 }, 'Very good quality of chicken meat!'),
    new Product('Frozen Chicken - Degree', 'https://www.wholesalemeat.co.nz/wp-content/uploads/2016/10/Inghams-Whole-Chicken-Size-20.jpg', 5.10, { x: 450, y: 450 }, 'Very good quality of chicken meat!'),
    new Product('Salami - Pirnelik', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Salami_aka.jpg/310px-Salami_aka.jpg', 3.60, { x: 550, y: 500 }, 'Best salami taste ever!'),
    new Product('Salami - Meati', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Salami_aka.jpg/310px-Salami_aka.jpg', 5.60, { x: 570, y: 500 }, 'Best salami taste ever!'),
    new Product('Eggs - Koko', 'https://a57.foxnews.com/media2.foxnews.com/BrightCove/694940094001/2019/03/15/931/524/694940094001_6014490250001_6014489408001-vs.jpg?ve=1&tl=1', 2.10, { x: 500, y: 100 }, 'Еggs laid by happy hens!'),
    new Product('Eggs - Chickin eggs', 'https://a57.foxnews.com/media2.foxnews.com/BrightCove/694940094001/2019/03/15/931/524/694940094001_6014490250001_6014489408001-vs.jpg?ve=1&tl=1', 1.90, { x: 450, y: 100 }, 'Еggs laid by happy hens!'),
];

export const MOCK_SHOPS = [
    new Shop('Balla', '../assets/shopsImages/balla.png', '../assets/shopMap.svg', 'Balla is a shop with a great repotation', [
        MOCK_PRODUCTS[0],
        MOCK_PRODUCTS[1],
        MOCK_PRODUCTS[3],
        MOCK_PRODUCTS[4],
        MOCK_PRODUCTS[6],
        MOCK_PRODUCTS[8],
        MOCK_PRODUCTS[9],
        MOCK_PRODUCTS[10],
        MOCK_PRODUCTS[12],
        MOCK_PRODUCTS[13],
        MOCK_PRODUCTS[14],
        MOCK_PRODUCTS[15],
    ]),
    new Shop('Kaafland', '../assets/shopsImages/kaaufland.png', '../assets/shopMap.svg', 'Kaafland is a big hypermarket with a great repotation', [
        MOCK_PRODUCTS[0],
        MOCK_PRODUCTS[4],
        MOCK_PRODUCTS[7],
        MOCK_PRODUCTS[8],
        MOCK_PRODUCTS[9],
        MOCK_PRODUCTS[10],
        MOCK_PRODUCTS[13],
        MOCK_PRODUCTS[15],
    ]),
    new Shop('Fantactichi', '../assets/shopsImages/fantastichi.png', '../assets/shopMap.svg', 'Fantactichi is a shop with low price products and good quality', [
        MOCK_PRODUCTS[0],
        MOCK_PRODUCTS[2],
        MOCK_PRODUCTS[3],
        MOCK_PRODUCTS[4],
        MOCK_PRODUCTS[5],
        MOCK_PRODUCTS[7],
        MOCK_PRODUCTS[8],
        MOCK_PRODUCTS[9],
        MOCK_PRODUCTS[11],
        MOCK_PRODUCTS[12],
        MOCK_PRODUCTS[13],
        MOCK_PRODUCTS[14],
        MOCK_PRODUCTS[15],
    ]),
    new Shop('TT-Market', '../assets/shopsImages/ttmarket.png', '../assets/shopMap.svg', 'TT-Market is a shop with balanced price and quality.', [
        MOCK_PRODUCTS[0],
        MOCK_PRODUCTS[3],
        MOCK_PRODUCTS[4],
        MOCK_PRODUCTS[5],
        MOCK_PRODUCTS[6],
        MOCK_PRODUCTS[7],
        MOCK_PRODUCTS[8],
        MOCK_PRODUCTS[9],
        MOCK_PRODUCTS[10],
        MOCK_PRODUCTS[11],
        MOCK_PRODUCTS[12],
        MOCK_PRODUCTS[13],
        MOCK_PRODUCTS[14],
        MOCK_PRODUCTS[15],
    ])
];


export const MOCK_USERS = [
    // new User('User1', 'user1@gmail.com', '12345', false, []),
    // new User('User2', 'user2@gmail.com', '123456', false, []),
    // new User('admin', 'admin@gmail.com', 'admin1234', true, [])
];
