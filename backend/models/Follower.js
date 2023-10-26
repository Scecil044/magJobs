import mongoose, { Schema } from "mongoose";
const followersSchema = new mongoose.Schema(
  {
    userRef: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

const Follower = mongoose.model("Follower", followersSchema);
export default Follower;
