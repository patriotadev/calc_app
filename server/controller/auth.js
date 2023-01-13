const Auth = require('../models/auth');
const {nanoid} = require('nanoid');
const { RegisterValidation, LoginValidation } = require('../validator/auth');
const bcrypt = require("bcrypt");
const Jwt = require('jsonwebtoken');

const RegisterHandler = async (req, res) => {
    const {error} = RegisterValidation(req.body);
    if (error) return res.status(400).json({
        "status": "failed",
        "message": error.details[0].message
    });

    const emailExist = await Auth.findOne({email: req.body.email});
    if (emailExist) return res.status(400).json({
        "status": "failed",
        "message": "Email already exists."
    });

    const {name, email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user_id = `user-${nanoid(16)}`;
    try {
        await Auth.create({ user_id, name, email, password:hashedPassword});
        return res.status(200).json({
            "status" : 'success',
            "message": 'User registration success.'
        });
    } catch (error) {
        return res.status(400).json({
            status : 'failed',
            message: error.message
        });
    }
}

const LoginHandler = async (req, res) => {
    const {error} = LoginValidation(req.body);
    if (error) return res.status(400).json({
        "status": "failed",
        "message": error.details[0].message
    });

    const user = await Auth.findOne({email: req.body.email});
    if (!user) return res.status(400).json({
        "status":"failed",
        "message": "email is not found."
    });
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).json({
        "status":"failed",
        "message": "invalid password."
    });
    const {user_id, name, email} = user;
    const token = Jwt.sign({id: user_id,}, process.env.ACCESS_TOKEN);
    await Auth.updateOne({email:req.body.email}, {
        $set: {
            timestamp_in: new Date()
        }
    });
    res.header('auth-token', token).status(200).json({
        "status": "success",
        "data": {user_id, name, email},
    });
}

module.exports = {RegisterHandler, LoginHandler};