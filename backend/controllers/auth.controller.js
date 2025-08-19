const User = require("../models/User.model");

const userLogin = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(`Error Occured while user login : ${error}`);
        res.status(400).json({ success : false, message : 'Error occured', err : error });
    }
}

const userregistration = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email })
    } catch (error) {
        console.log(`Error occured while user registration : ${error}`);
        res.status(400).json({ success : false, message : 'Error occured', err : error });
    }
}

module.exports = {
    userLogin
}