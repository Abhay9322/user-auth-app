import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

//Register new user
export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password,10);
        const user = await User.create({ name, email, password: hashedPassword });

        res.status(201).json({ message: 'User registerd successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};


//Login user


export const loginUser = async (req,res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password,user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials'});

        const token = jwt.sign({ userId: user._id},process.env.JWT_SECRET,{expiresIn: '1d'});

        res.json({ token });
    } catch (error) {
        res.status(400).json({ message: 'Server error'});
    }
};


//Function for Dashboard


export const dashboard = (req,res) => {
    res.json({ message:'Welcome to your dashboard!'});
};