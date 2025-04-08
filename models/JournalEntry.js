const mongoose = require('mongoose');

const journalSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  text: { type: String, default: "" },
});

module.exports = mongoose.model('JournalEntry', journalSchema);
