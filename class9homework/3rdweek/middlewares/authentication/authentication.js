const jwt = require("jsonwebtoken");
const userCollection = require('../../services/userServices/userServices')

const authenicate = async (req, res, next) => {

    const secretKey = process.env.SECRET_KEY;
    try {
        const token = req.headers.authorization || req.cookies.token;

        const verifyToken = jwt.verify(token, secretKey);

        const User = await userCollection.findById(verifyToken.id);


        if (User.length === 0) {
            return res.status(401).json({ message: 'User Not Found' })
        }

        req.token = token;
        req.User = User;
        req.userID = User.id;

        next();


    } catch (error) {
        res.status(401).json({ message: 'Unauthorized' })

    }
};

module.exports = authenicate;