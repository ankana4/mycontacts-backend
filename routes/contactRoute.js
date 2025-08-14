const express = require("express");
const router = express.Router();
const {
    getContacts,
    createContacts,
    updateContacts,
    deleteContacts,
    getContactforOne
} = require("../controllers/contactController")


router.route("/").get(getContacts).post(createContacts);

router.route("/:contactId").get(getContactforOne).put(updateContacts).delete(deleteContacts);


module.exports = router;
