import { Shop } from './shops-model';
import { Product } from './product-model';
import { User } from './user-model';

export const MOCK_SHOPS = [
    new Shop('Balla', '../assets/shopsImages/balla.png', '', 'Balla is a shop with a great repotation'),
    new Shop('Balla', '../assets/shopsImages/balla.png', '', 'Balla is a shop with a great repotation'),
    new Shop('Balla', '../assets/shopsImages/balla.png', '', 'Balla is a shop with a great repotation'),
    new Shop('Balla', '../assets/shopsImages/balla.png', '', 'Balla is a shop with a great repotation'),
    new Shop('Kaafland', '../assets/shopsImages/kaaufland.png', '', 'Kaafland is a big hypermarket with a great repotation'),
    new Shop('Fantactichi', '../assets/shopsImages/fantastichi.png', '', 'Fantactichi is a shop with low price products and good quality'),
    new Shop('Fantactichi', '../assets/shopsImages/fantastichi.png', '', 'Fantactichi is a shop with low price products and good quality'),
    new Shop('Fantactichi', '../assets/shopsImages/fantastichi.png', '', 'Fantactichi is a shop with low price products and good quality'),
    new Shop('TT-Market', '../assets/shopsImages/ttmarket.png', '', 'TT-Market is a shop with balanced price and quality.')
];

export const MOCK_PRODUCTS = [
    new Product('Bread', 'https://i0.wp.com/gatherforbread.com/wp-content/uploads/2015/08/Easiest-Yeast-Bread.jpg?fit=800%2C1157&ssl=1', 0.60, { x: 50, y: 30 }, 'Very hot and fresh bread!'),
    new Product('Water', 'https://www.brecorder.com/wp-content/uploads/2018/07/water-3.jpg', 0.50, { x: 60, y: 70 }, 'Refresh yourself!'),
    new Product('Salt', 'https://cdn1.medicalnewstoday.com/content/images/articles/322/322745/salt-shaker.jpg', 1.00, { x: 10, y: 70 }, 'Crystal salt with perfect quality!'),
    new Product('Salt', 'https://cdn1.medicalnewstoday.com/content/images/articles/322/322745/salt-shaker.jpg', 1.00, { x: 10, y: 70 }, 'Crystal salt with perfect quality!'),
    new Product('Salt', 'https://cdn1.medicalnewstoday.com/content/images/articles/322/322745/salt-shaker.jpg', 1.00, { x: 10, y: 70 }, 'Crystal salt with perfect quality!'),
    new Product('Salt', 'https://cdn1.medicalnewstoday.com/content/images/articles/322/322745/salt-shaker.jpg', 1.00, { x: 10, y: 70 }, 'Crystal salt with perfect quality!'),
    new Product('Salt', 'https://cdn1.medicalnewstoday.com/content/images/articles/322/322745/salt-shaker.jpg', 1.00, { x: 10, y: 70 }, 'Crystal salt with perfect quality!'),
    new Product('Salt', 'https://cdn1.medicalnewstoday.com/content/images/articles/322/322745/salt-shaker.jpg', 1.00, { x: 10, y: 70 }, 'Crystal salt with perfect quality!'),
    new Product('Salt', 'https://cdn1.medicalnewstoday.com/content/images/articles/322/322745/salt-shaker.jpg', 1.00, { x: 10, y: 70 }, 'Crystal salt with perfect quality!'),
    new Product('Salt', 'https://cdn1.medicalnewstoday.com/content/images/articles/322/322745/salt-shaker.jpg', 1.00, { x: 10, y: 70 }, 'Crystal salt with perfect quality!'),
    new Product('Salt', 'https://cdn1.medicalnewstoday.com/content/images/articles/322/322745/salt-shaker.jpg', 1.00, { x: 10, y: 70 }, 'Crystal salt with perfect quality!'),
    new Product('Salt', 'https://cdn1.medicalnewstoday.com/content/images/articles/322/322745/salt-shaker.jpg', 1.00, { x: 10, y: 70 }, 'Crystal salt with perfect quality!'),
    new Product('Salt', 'https://cdn1.medicalnewstoday.com/content/images/articles/322/322745/salt-shaker.jpg', 1.00, { x: 10, y: 70 }, 'Crystal salt with perfect quality!'),
    new Product('Salt', 'https://cdn1.medicalnewstoday.com/content/images/articles/322/322745/salt-shaker.jpg', 1.00, { x: 10, y: 70 }, 'Crystal salt with perfect quality!'),
    new Product('Wine', 'https://images-na.ssl-images-amazon.com/images/I/71W%2B3bONurL._SX425_.jpg', 0.60, { x: 50, y: 30 }, 'Taste the new flavoir of this wine!'),
];

export const MOCK_USERS = [
    new User('User1', 'user1@gmail.com', '12345', false),
    new User('User2', 'user2@gmail.com', '123456', false),
    new User('admin', 'admin@gmail.com', 'admin1234', true)
];
