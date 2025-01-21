import e from "express";
import bcrypt from "bcrypt";
import { Mentor } from "../models/mentorModel.js";
import { generateToken } from "../utils/token.js";

const router = e.Router();

//signup
router.post("/signup");

//login
router.put("/login", async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "all fields are required" });
        }

        const userExist = await Mentor.findOne({ email });

        if (!userExist) {
            return res.status(404).json({ message: "user does not exist" });
        }

        const passwordMatch = bcrypt.compareSync(password, userExist.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: "user not authenticated" });
        }

        const token = generateToken(userExist._id);
        res.cookie("token", token);

        // delete userExist._doc.password;
        {
            const { password, ...userDataWithoutPassword } = userExist._doc;
            return res.json({ data: userDataWithoutPassword, message: "user login success" });
        }
    } catch (error) {
        return res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
});

//profile
//logout
//profile-update
//forgot-password
//change-password
//account-deactivate

//check-user

export { router as mentorRouter };
