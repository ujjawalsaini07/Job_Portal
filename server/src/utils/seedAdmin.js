import User from "../models/User.model.js";

const seedAdmin = async () => {
  const adminEmail = "admin@smartportal.com";

  const existingAdmin = await User.findOne({
    email: adminEmail
  });

  if (!existingAdmin) {
    await User.create({
      name: "Super Admin",
      email: adminEmail,
      password: "Admin@123",
      role: "ADMIN"
    });

    console.log("✅ Admin user created");
  } else {
    console.log("ℹ️ Admin user already exists");
  }
};

export default seedAdmin;
