import mongoose from "mongoose";

const conversationShema = new mongoose.Schema(
  {
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    messages: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Message", default: [] },
    ],
  },
  {
    timestamps: true, //createdAt updatedAt
  }
);

const Conversation = mongoose.model("Conversation", conversationShema);
export default Conversation;
