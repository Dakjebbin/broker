import User from "../model/user.model.js";
import bcrypt from "bcryptjs"; 
import jwt from "jsonwebtoken";


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

    //check if email/username exists
    const emailExists = await User.findOne({ email: email}).exec();
    const userNameExists = await User.findOne({ username }).exec();
    const phoneNumberExists = await User.findOne({ phonenumber }).exec();

    if (emailExists) {
        res.status(409).json({
            success:false,
            message: "Email already in use",
        })
        return;
    }

    if (userNameExists) {
        res.status(409).json({
            success:false,
            message: "Username already exists",
        })
        return;
    }

    if (phoneNumberExists) {
        res.status(409).json({
            success:false,
            message: "Phonenumber already in use",
        })
        return;
    }


    const salt = await bcrypt.genSalt(10)
    const encrypted = await bcrypt.hash(password, salt);

    //using the mongodb model to create user
    const newUser = await User.create({
        fullname,
        username,
        Dateofbirth,
        email,
        password: encrypted,
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
    
        const body = req.body;
        

        if (!body.email || !body.password) {
            res.status(400).json({
                success: false,
                message: "Please provide email and password"
            })
            return;
        }

        //check if user exist
        const userExists = await User.findOne({email: body.email}).exec();

        if (!userExists) {
            res.status(404).json({
                success: false,
                message: "invalid credentials"
            });
            return;
        }

        const validPassword = await bcrypt.compare(
            body.password, userExists?.password);

        if(!validPassword) {
            res.status(409).json({
              success:false,
              message: "invalid Credentials"
            });
            return;
          }

// create jwt tokens and cookies

        const accessToken = jwt.sign({
            blood: userExists?._id,
        },
        process.env.AccessTOKEN,
        {
            expiresIn: process.env.accesstime,
        });

        const refreshToken = jwt.sign({
            callofduty: userExists?._id,
        },
        process.env.REFRESHtoken,
        {
            expiresIn: process.env.refreshtime,
        });       

        res.cookie("access_Token", accessToken, {
           // httpOnly: true,
            // secure: true,
            sameSite:"none",
            maxAge: 40 * 1000,
        })

        res.cookie("refresh_Token", refreshToken, {
           // httpOnly: true,
            // secure: true,
            sameSite:"none",
            maxAge:1 * 24 * 60 * 60 * 1000,
        })

          res.status(200).json({
            success: true,
            message: "login successful",
           
          });

    
}


// to get all users in admin panel
const userDetails = async (req, res) => {
        try {
            const users = await User.find({}).exec();
            
            if (users?.length === 0) {
                res.status(404).json({
                  success: false,
                  message: "No Users for now",
                });
                return;
              }

            res.status(200).json({
                success: true,
                message: "User details fetched successfully",
                users: users
            })
        } catch (error) {
            res.status(500).json({
                 success: false,
                message: "Internal server error"
            }
               
            )
        }

}

// to get user by id for frontend purposes
const userDetail = async (req, res) => {
    try {
        const {id} = req.params;

        const user = await User.findById(id).exec();
        
        if (!user) {
            res.status(404).json({
                success: false,
                message: "User not found"
            });
            return;
        } 

        res.status(200).json({
            success: true,
            message: "User details fetched successfully",
            user: user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
          });
    }
}

export {register, login, userDetails, userDetail} 