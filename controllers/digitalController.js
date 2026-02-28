const Blog = require("../models/Digital");

exports.addBlog = async (req, res) => {
  try {
    const { title, desc } = req.body;

    const blog = new Blog({
      title,
      desc,
      date: new Date().toLocaleDateString(),
    });

    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    console.error("ADD BLOG ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getBlogs = async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
};
