import Result from "./resultmodel.js";
import User from "./userModel.js"; // ✅ Make sure you have this

// ➕ Add result
export const addResult = async (req, res) => {
  try {
    const {
      class1,
      roll,
      exam,
      telugu,
      hindi,
      english,
      maths,
      science,
      social,
    } = req.body;

    // ✅ Check if the student exists in the user table
    const student = await User.findOne({ class1, roll });
    if (!student) {
      return res.status(404).json({ message: "❌ Student not found in user data." });
    }

    // ✅ Check if result already exists for that student & exam
    const existingResult = await Result.findOne({ class1, roll, exam });
    if (existingResult) {
      return res.status(400).json({ message: "⚠️ Result already exists for this student and exam." });
    }

    // ✅ Save new result
    const newResult = new Result({
      class1,
      roll,
      exam,
      telugu,
      hindi,
      english,
      maths,
      science,
      social,
    });

    await newResult.save();
    res.status(201).json({ message: "✅ Result added successfully." });
  } catch (error) {
    console.error("Error adding result:", error);
    res.status(500).json({ message: "Internal server error.", error: error.message });
  }
};

// 📋 Get all results
export const getAllResults = async (req, res) => {
  try {
    const results = await Result.find();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch results.", error: error.message });
  }
};

// 🔍 Get result by ID
export const getResultById = async (req, res) => {
  try {
    const result = await Result.findById(req.params.id);
    if (!result) return res.status(404).json({ message: "Result not found." });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error fetching result.", error: error.message });
  }
};

// 🏫 Get results by class
export const getResultsByClass = async (req, res) => {
  try {
    const results = await Result.find({ class1: req.params.class1 });
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: "Error fetching class results.", error: error.message });
  }
};

// ✏️ Update result
export const updateResult = async (req, res) => {
  try {
    const updated = await Result.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Result not found." });
    res.status(200).json({ message: "✅ Result updated successfully.", updated });
  } catch (error) {
    res.status(500).json({ message: "Error updating result.", error: error.message });
  }
};

// ❌ Delete result
export const deleteResult = async (req, res) => {
  try {
    const deleted = await Result.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Result not found." });
    res.status(200).json({ message: "🗑️ Result deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error deleting result.", error: error.message });
  }
};export const search=async (req, res) => {
  const { class1,roll, exam } = req.query; // Correctly reads from query
  try {
    const result = await Result.find({
         class1,roll, // These are shorthand for { class1: class1, roll: roll }
      exam,
    });
    res.json(result);}
   catch (err) {

    res.status(500).json({ message: "Error fetching result" });
}
  
};