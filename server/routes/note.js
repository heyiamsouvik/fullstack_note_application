import express from "express";
import Note from "../models/Note.js";
import middleware from "./../middleware/middleware.js";

const router = express.Router();


// Add a Note
router.post("/add", middleware, async (req, res) => {
  try {
    const { title, description } = req.body;

    const newNote = new Note({
      title,
      description,
      userId: req.user.id,
    });
    await newNote.save();

    return res.status(201).json({
      success: true,
      message: "Note created successfully",
      note: newNote,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error adding note",
      error: error.message,
    });
  }
});


// Get Notes
router.get("/", middleware, async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user.id });
    return res.status(200).json({
      success: true,
      notes,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "error finding notes",
      error: error.message,
    });
  }
});

// Update Note
router.put("/:id", middleware, async (req, res) => {
  try {
    
    const updateNote = await Note.findByIdAndUpdate(
      req.params.id,
      req.body);

      if (!updateNote) {
      return res.status(404).json({
        success: false,
        message: 'Note not found',
      });
    }

    return res.status(200).json({
      success: true,
      updateNote,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error updating note",
      error: error.message,
    });
  }
});


//Delete Note
router.delete("/:id", middleware, async (req, res) => {
  try {
    const updateNote = await Note.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      success: true,
      message: 'Note deleted successfully',
      updateNote,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error deleting note",
       error: error.message,
    });
  }
});

export default router;
