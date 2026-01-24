import e from "express";
import { contactCandidate, sendBroadcastEmail} from "../controllers/email.controller.js";
const emailRouter = e.Router();

// Emails
emailRouter.post("/contact-candidate", contactCandidate);
emailRouter.post("/admin/broadcast", sendBroadcastEmail);


export default emailRouter;