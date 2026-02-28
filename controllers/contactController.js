const ContactMessage = require("../models/ContactMessage");

exports.sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    await ContactMessage.create({ name, email, message });

    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send message" });
  }
};

exports.getMessages = async (req, res) => {
  const messages = await ContactMessage.find().sort({ createdAt: -1 });
  res.json(messages);
};
