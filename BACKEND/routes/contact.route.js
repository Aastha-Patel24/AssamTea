import express from "express";

import { submitForm , submitBulkOrderContact} from "../controllers/contact.controller.js";
import { authenticateUser } from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.post('/', submitForm);
router.post('/bulk', submitBulkOrderContact);

export default router;