import { Webhook } from "svix";
import User from "../models/user.model.js";

// API Controller Function to manage Clerk User with Database
export const clerkWebhooks = async (req, res) => {
  try {
    console.log("Received Webhook Data:", req.body);

    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body;

    // Log type to ensure the webhook type is what we expect
    console.log("Webhook Type:", type);

    switch (type) {
      // create user
      case "user.created": {
        const userData = {
          _id: data.id,
          email: data.email_address[0].email_address,
          name: data.first_name + " " + data.last_name,
          imageUrl: data.image_url,
        };

        // Log user data for debugging
        console.log("Creating User:", userData);

        await User.create(userData);
        res.json({});
        break;
      }

      // update user data
      case "user.updated": {
        const userData = {
          email: data.email_address[0].email_address,
          name: data.first_name + " " + data.last_name,
          imageUrl: data.image_url,
        };
        // Log the update data
        console.log("Updating User:", userData);

        await User.findByIdAndUpdate(data.id, userData);
        res.json({});
        break;
      }

      // Delete User
      case "user.deleted": {
        // Log deletion data
        console.log("Deleting User ID:", data.id);

        await User.findByIdAndDelete(data.id);
        res.json({});
        break;
      }

      default:
        console.log("Unhandled event type:", type);
        res
          .status(400)
          .json({ success: false, message: "Unhandled event type" });

        break;
    }
  } catch (error) {
    console.error("Error processing webhook:", error);
    res.json({ success: false, message: error.message });
  }
};
