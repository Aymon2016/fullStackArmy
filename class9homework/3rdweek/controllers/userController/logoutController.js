const jwt = require("jsonwebtoken");
const userCollection = require('../../services/userServices/userServices')

const LogoutController = async (req, res) => {
    const secretKey = process.env.SECRET_KEY;

    try {
        // Get the JWT token from the request headers or cookies
        const token = req.headers.authorization || req.cookies.token;

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        // Verify and decode the JWT token
        const decoded = jwt.verify(token, secretKey);

        // Add the token to a blacklist or perform any other necessary actions
        // to invalidate the token


        return res.status(200).json({ message: 'Logout successful' });

    } catch (err) {

        return res.status(500).json({ message: 'Internal Server Error' });
    }
};
module.exports = LogoutController