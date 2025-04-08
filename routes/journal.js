const express = require("express");
const router = express.Router();
const JournalEntry = require("../models/JournalEntry");
const { model } = require("mongoose");

router.get("/", async (req, res) => {
  const journals = await JournalEntry.find().sort("date");
  res.json(journals);
});

router.post("/", async (req, res) => {
  const journal = new JournalEntry(req.body);
  const saved = await journal.save();
  res.status(201).json(saved);
});

router.patch("/:id", async (req, res) => {
  const updated = await JournalEntry.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.json(updated);
});

router.delete("/:id", async (req, res) => {
  await JournalEntry.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;