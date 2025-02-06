import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "users", 
    default: null 
}, // Target user (or null for system-wide)
  message: { 
    type: String, 
    required: true 
},
  type: { 
    type: String, 
    enum: ["task", "payment", "announcement"], 
    required: true },
  isRead: { 
    type: Boolean, 
    default: false 
},
  createdAt: { 
    type: Date, 
    default: Date.now 
}
});

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;