const express = require("express");
const router = express.Router();
const { getBlogs, addBlog } = require("../controllers/digitalController");

router.get("/", getBlogs);
router.post("/", addBlog);

module.exports = router;
