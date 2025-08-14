const express = require("express");
const router = express.Router();
const {getContacts} = require("../controllers/contactController");
const {createContacts} = require("../controllers/contactController")
const {updateContacts} = require("../controllers/contactController")
const {deleteContacts} = require("../controllers/contactController")
const {getContactforOne} = require("../controllers/contactController")


router.route("/").get(getContacts);

router.route("/:contactId").get(getContactforOne);

router.route("/").post(createContacts);

router.route("/:contactId").put(updateContacts);

router.route("/:contactId").delete(deleteContacts);


module.exports = router;
