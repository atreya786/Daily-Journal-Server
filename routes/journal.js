const express = require("express");
const router = express.Router();
const JournalEntry = require("../models/JournalEntry");

router.get("/", async (req, res) => {
  const journals = await JournalEntry.find().sort("date");
  res.json(journals);
});

router.post("/", async (req, res) => {
  try {
    const journal = new JournalEntry(req.body);
    const saved = await journal.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error("Error saving journal:", err);
    res.status(400).json({ error: "Failed to save journal" });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updated = await JournalEntry.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    console.error("Error updating journal:", err);
    res.status(500).json({ error: "Failed to update journal" });
  }
});

module.exports = router;
