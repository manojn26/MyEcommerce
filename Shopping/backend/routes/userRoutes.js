import express from "express";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils.js";
import expressAsyncHandler from "express-async-handler";

const userRouter = express.Router();

// define post request for signin
userRouter.post(
  // instead of asunc we use expressAsyncHandler
  //   if we have error in this function we can handle it on server.js
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      // if the user email exists we need to check the passsword here
      if (bcrypt.compareSync(req.body.password, user.password)) {
        // if match the condition we need to send the response
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid email or password" });
  })
);

export default userRouter;
