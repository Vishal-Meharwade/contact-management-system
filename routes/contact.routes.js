// routes/contact.routes.js
const express = require("express");
const router = express.Router();
const {
  getAllContacts,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contact.controller");

router.get("/", getAllContacts);
router.post("/", createContact);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);

module.exports = router;
