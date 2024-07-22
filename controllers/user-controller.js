import User from '../models/userModel.js';
import bcrypt from 'bcrypt'

// SignupUser FUNCTION
export const signUpUser = async (req, res) => {
    // Parse data from the request body
    const name = req.body.name;
    const email = req.body.email;
    const pass = req.body.password;
    const mobile = req.body.mobile;
    try {
        // check if mail already exixt
        const existUser = await User.findOne({email});
        if(existUser){
            return res.status(400).json({message: 'Email already Exsit'});
        }
        const hashedPassword = await bcrypt.hash(pass, 10);

        // Create a new user instance
        const newUser = new User({ name, email, password:hashedPassword, mobile });

        // Save the user to the database
        await newUser.save();

        // Respond with success message
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {

        // Respond with error message
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
};


// login FUNCTION for the login of details
export const loginUser = async(req, res) => {
    // parse data from req body
    const email = req.body.email;
    const pass = req.body.password;
    try{
        // check if user already exist
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(401).json({message: 'Invalid Email or Password'});
        }

        const isMatch = await bcrypt.compare(pass, user.password);
        if(!isMatch) {
            return res.status(401).json({message: 'Invalid email or password'});
        }

        return res.status(200).json({ message: 'Login successfull', user });

    }catch(error){
        res.status(500).json({ mesage:'error logging in', error: error.mesasge });
    }
};
