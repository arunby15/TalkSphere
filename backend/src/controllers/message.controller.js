import User from "../models/user.models.js";
import Message from "../models/message.models.js";
import cloudinary from "../lib/cloudinary.js";
import { getReceverSocketId, io } from "../lib/socket.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const fileterdUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");
    res.status(200).json(fileterdUsers);
  } catch (error) {
    console.error("Error in getUsersForSidebar:", error.message);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const myId = req.user._id;

    if (!userToChatId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const messages = await Message.find({
      $or: [
        { senderId: myId, receiverId: userToChatId }, // ✅ Fixed typo
        { senderId: userToChatId, receiverId: myId },
      ],
    }).sort({ createdAt: 1 }); // ✅ Sorted messages by time

    if (!messages || messages.length === 0) {
      return res.status(200).json([]); // ✅ Return empty array if no messages
    }

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessages controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const sentMessages = async (req, res) => {
  try {
    const { text, image } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let imageUrl;

    // This is the corrected block

    if (image) {
      // Directly await the upload function's promise to resolve
      const uploadResponse = await cloudinary.uploader.upload(image, {
        folder: "chat_app_messages", // It's good practice to organize uploads
      });
      imageUrl = uploadResponse.secure_url;
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      text,
      image: imageUrl,
    });
    await newMessage.save();

    //todo: realtime functionality goes here=>socket.io
    const receviersocketId = getReceverSocketId(recevierId);
    if (receviersocketId) {
      io.to(receviersocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in the sendMessage controller:", error.message);
    res.status(500).json({ error: "Internal server Error" });
  }
};
