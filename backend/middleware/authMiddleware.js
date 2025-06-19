import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

export const protect = async (req,res,next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startWith('Bearer')) {
        return res.status(401).json({ message: 'No token, not authorized '});
    }

    try {
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.userId).select('-password');
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token '});
    }
};