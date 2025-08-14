//@desc for get all contacts
//@route GET /api/contacts
//@access to the api - public

const getContacts = (req, res) => {
    res.status(200).json({message:"Get all contacts"});
};


//@desc for create all contacts
//@route POST /api/contacts
//@access to the api - public

const createContacts = (req, res) => {
    console.log("The request body is: ",req.body)
    const {name, email, phone} = req.body
    if(!name || !email | !phone) {
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    res.status(201).json({message:"Create contacts"});
};

//@desc for update all contacts
//@route PUT /api/contacts
//@access to the api - public

const updateContacts = (req, res) => {
    res.status(200).json({message:`Update contacts for ${req.params.id}`});
};

//@desc for delete all contacts
//@route DELETE /api/contacts
//@access to the api - public

const deleteContacts = (req, res) => {
    res.status(200).json({message:`Delete all contact for  ${req.params.id}`});
};

//@desc for get a contact
//@route GET /api/contacts
//@access to the api - public
const getContactforOne = (req, res) => {
    res.status(200).json({message:`Create contact for  ${req.params.id}`});
};

module.exports = {
    getContacts, 
    createContacts, 
    updateContacts, 
    deleteContacts, 
    getContactforOne
};