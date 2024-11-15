import User from "../model/user.model.js";
import Transaction from "../model/transaction.model.js";

const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.userId).populate("transactionHistory");
        res.status(200).json({
            success: true,
            message: "User profile fetched successfully",
            user: user
        })
    } catch (error) {
        
    }

}


export {getUserProfile}