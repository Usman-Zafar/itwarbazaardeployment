const User = require("../modals/userModal");

const userControllers = {};

userControllers.Signup = async (req, res) => {
  const { firstname, lastname, email, password, type } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User with this email already exists." });
    }

    const newUser = { firstname, lastname, email, password, type };
    await User.create(newUser);

    res.send("User Signup Successful");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to sign up user" });
  }
};

userControllers.Signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res
        .status(404)
        .json({ error: "User with this email does not exist." });
    }

    if (existingUser.password !== password) {
      return res.status(401).json({ error: "Incorrect password." });
    }
    // const type = existingUser.type;
    // if (type === "seller") {
    // }

    // Successful signin
    res.send("User Signin Successful");
  } catch (error) {
    res.status(500).json({ message: "Failed to sign in User" });
  }
};

module.exports = userControllers;
