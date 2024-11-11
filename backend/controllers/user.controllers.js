import User from "../model/user.model.js";


const register = async (req, res) => {
   
   try {
    const register = req.body;
    const {fullname, username, Dateofbirth, email, password, phonenumber,country} = register;
    
    if (!fullname || !username || !Dateofbirth || !email || !password || !phonenumber || !country) {
        res.status(404).json({
            success: false,
            message: "Please provide all fields"
    });
    return;
    }

    //using the mongodb model to create user
    const newUser = await User.create({
        fullname,
        username,
        Dateofbirth,
        email,
        password,
        phonenumber,
        country, 
    });

    if (newUser) {
        res.status(201).json({
            success:true,
            message: "created Successfully",
            user: newUser
        })
    } else {
        res.status(400).json({
            success:false,
            message: "user not created successfully"
        });
    }

   } catch (error) {
        res.status(500).json({
            success:false,
            message: "Internal server error"
        })
   }; 
};

const login = async (req, res) => {

}

export {register, login}