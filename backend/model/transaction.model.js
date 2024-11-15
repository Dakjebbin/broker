import mongoose from "mongoose"

const transactionSchema = mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true
     },
  amount: { 
    type: Number, 
    required: true 
},
  type: { 
    type: String, 
    enum: ['deposit', 'withdrawal'], 
    required: true 
},
  transactionHash: { 
    type: String, 
    required: true
 },  // Bitcoin transaction hash
  status: { type: String, 
    enum: ['pending', 'completed', 'failed'], 
    default: 'pending' },
  timestamp: { 
    type: Date, 
    default: Date.now 
}
})

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;