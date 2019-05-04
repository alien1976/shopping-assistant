import { Shop } from './shops-model';
import { Product } from './product-model';
import { User } from './user-model';

export const MOCK_PRODUCTS = [
    new Product('Bread', 'https://i0.wp.com/gatherforbread.com/wp-content/uploads/2015/08/Easiest-Yeast-Bread.jpg?fit=800%2C1157&ssl=1', 0.60, { x: 50, y: 30 }, 'Very hot and fresh bread!'),
    new Product('Water', 'https://www.brecorder.com/wp-content/uploads/2018/07/water-3.jpg', 0.50, { x: 60, y: 70 }, 'Refresh yourself!'),
    new Product('Salt', 'https://cdn1.medicalnewstoday.com/content/images/articles/322/322745/salt-shaker.jpg', 1.00, { x: 10, y: 70 }, 'Crystal salt with perfect quality!'),
    new Product('Salt', 'https://cdn1.medicalnewstoday.com/content/images/articles/322/322745/salt-shaker.jpg', 1.20, { x: 10, y: 70 }, 'Crystal salt with perfect quality!'),
    new Product('Salt', 'https://cdn1.medicalnewstoday.com/content/images/articles/322/322745/salt-shaker.jpg', 1.30, { x: 10, y: 70 }, 'Crystal salt with perfect quality!'),
    new Product('Salt', 'https://cdn1.medicalnewstoday.com/content/images/articles/322/322745/salt-shaker.jpg', 1.10, { x: 10, y: 70 }, 'Crystal salt with perfect quality!'),
    new Product('Salt', 'https://cdn1.medicalnewstoday.com/content/images/articles/322/322745/salt-shaker.jpg', 2.00, { x: 10, y: 70 }, 'Crystal salt with perfect quality!'),
    new Product('Salt', 'https://cdn1.medicalnewstoday.com/content/images/articles/322/322745/salt-shaker.jpg', 3.00, { x: 10, y: 70 }, 'Crystal salt with perfect quality!'),
    new Product('Salt', 'https://cdn1.medicalnewstoday.com/content/images/articles/322/322745/salt-shaker.jpg', 1.50, { x: 10, y: 70 }, 'Crystal salt with perfect quality!'),
    new Product('Salt', 'https://cdn1.medicalnewstoday.com/content/images/articles/322/322745/salt-shaker.jpg', 1.60, { x: 10, y: 70 }, 'Crystal salt with perfect quality!'),
    new Product('Salt', 'https://cdn1.medicalnewstoday.com/content/images/articles/322/322745/salt-shaker.jpg', 1.70, { x: 10, y: 70 }, 'Crystal salt with perfect quality!'),
    new Product('Salt', 'https://cdn1.medicalnewstoday.com/content/images/articles/322/322745/salt-shaker.jpg', 1.80, { x: 10, y: 70 }, 'Crystal salt with perfect quality!'),
    new Product('Salt', 'https://cdn1.medicalnewstoday.com/content/images/articles/322/322745/salt-shaker.jpg', 1.90, { x: 10, y: 70 }, 'Crystal salt with perfect quality!'),
    new Product('Salt', 'https://cdn1.medicalnewstoday.com/content/images/articles/322/322745/salt-shaker.jpg', 1.20, { x: 10, y: 70 }, 'Crystal salt with perfect quality!'),
    new Product('Wine', 'https://images-na.ssl-images-amazon.com/images/I/71W%2B3bONurL._SX425_.jpg', 0.60, { x: 50, y: 30 }, 'Taste the new flavoir of this wine!'),
];

export const MOCK_SHOPS = [
    new Shop('Balla', '../assets/shopsImages/balla.png', '../assets/shopMap.svg', 'Balla is a shop with a great repotation', [
        MOCK_PRODUCTS[0],
        MOCK_PRODUCTS[2],
        MOCK_PRODUCTS[3],
        MOCK_PRODUCTS[4],
    ]),
    new Shop('Kaafland', '../assets/shopsImages/kaaufland.png', '../assets/shopMap.svg', 'Kaafland is a big hypermarket with a great repotation', [
        MOCK_PRODUCTS[7],
        MOCK_PRODUCTS[2],
        MOCK_PRODUCTS[3],
        MOCK_PRODUCTS[5],
    ]),
    new Shop('Fantactichi', '../assets/shopsImages/fantastichi.png', '../assets/shopMap.svg', 'Fantactichi is a shop with low price products and good quality', [
        MOCK_PRODUCTS[7],
        MOCK_PRODUCTS[2],
        MOCK_PRODUCTS[3],
        MOCK_PRODUCTS[10],
        MOCK_PRODUCTS[1],
        MOCK_PRODUCTS[0],
    ]),
    new Shop('TT-Market', '../assets/shopsImages/ttmarket.png', '../assets/shopsImages/shopMap.svg', 'TT-Market is a shop with balanced price and quality.', [
        MOCK_PRODUCTS[1],
        MOCK_PRODUCTS[6],
        MOCK_PRODUCTS[3],
        MOCK_PRODUCTS[11],
        MOCK_PRODUCTS[5],
        MOCK_PRODUCTS[10],
    ])
];


export const MOCK_USERS = [
    new User('User1', 'user1@gmail.com', '12345', false),
    new User('User2', 'user2@gmail.com', '123456', false),
    new User('admin', 'admin@gmail.com', 'admin1234', true)
];
