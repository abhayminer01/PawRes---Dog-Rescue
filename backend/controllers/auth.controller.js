const User = require("../models/User.model");

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email : email });
        if(!user) {
            return res.json({ success : false, message : "user not found" });
        }

        res.json({ success : true });
    } catch (error) {
        console.log(`Error Occured while user login : ${error}`);
        res.status(400).json({ success : false, message : 'Error occured', err : error });
    }
}

const userregistration = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if(existingUser) {
            return res.json({ success : false })
        }

        const user = new User({
            email : email,
            password : password,
            name : name
        });
        await user.save();

        res.json({ success : true });
    } catch (error) {
        console.log(`Error occured while user registration : ${error}`);
        res.status(400).json({ success : false, message : 'Error occured', err : error });
    }
}

module.exports = {
    userLogin,
    userregistration
}