import Job from "../models/Job.model.js"; // Adjust the path to your model file

export const addJob = async (req, res) => {
  try {
    const { title, company, location, skillsRequired, experience, description } = req.body;

    // 1. Basic Validation
    if (!title || !company) {
      return res.status(400).json({ 
        success: false, 
        message: "Please provide both a Job Title and a Company name." 
      });
    }

    // 2. Create the Job
    // We explicitly map the fields to ensure security, preventing 
    // users from injecting unwanted fields (like overriding createdAt).
    const job = await Job.create({
      title,
      company,
      location,
      skillsRequired, 
      experience,
      description,
      // Assumption: Your auth middleware adds the user object to req
      postedBy: req.user.userId, 
    });

    // 3. Send Success Response
    res.status(201).json({
      success: true,
      message: "Job created successfully",
      job,
    });

  } catch (error) {
    // Handle Mongoose Validation Errors specifically
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        message: messages.join(", "),
      });
    }

    // Handle General Server Errors
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server Error: Unable to create job",
    });
  }
};