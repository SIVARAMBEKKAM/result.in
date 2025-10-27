import User from "./userModel.js";

export const create = async (req, res) => {
  try {
    console.log("📩 Received Data:", req.body); // <--- ADD THIS LINE

    const { name, class1, roll } = req.body;

    if (!name || !class1 || !roll) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const existingUser = await User.findOne({ class1, roll });
    if (existingUser) {
      return res.status(400).json({ message: "Student already exists in this class." });
    }

    const newUser = new User({ name, class1, roll });
    const savedUser = await newUser.save();
     

    res.status(201).json({ message: "✅ Student added successfully." });
  } catch (error) {
    console.error("❌ Error saving student:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const userData = await User.find();
    if (!userData || userData.length === 0) {
      return res.status(404).json({ message: "User data not found." });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "User not found." });
    }
    res.status(200).json(userExist);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "User not found." });
    }
    const updatedData = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ message: "User Updated successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "User not found." });
    }
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
export const getUserByClass = async (req, res) => {
  try {
    const cls = req.params.class1;
    const users = await User.find({ class1: cls });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users by class" });
  }
  };export const promoteClass = async (req, res) => {
    const classFilter = req.params.class1; // gets class from URL
    if (!classFilter) return res.status(400).json({ message: "currentClass is required" });

    try {
      await Student.updateMany({ class1: classFilter }, { $set: { class1: String(Number(classFilter) + 1) } });
      res.json({ message: `Students in Class ${classFilter} promoted successfully!` });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error during promotion" });
    }
  };

