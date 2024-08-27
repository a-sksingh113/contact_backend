
const asyncHandler = require("express-async-handler")


//get conatcts
const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get all contacts" });
});




//create contacts
const createContacts =  asyncHandler(async(req, res) => {
  console.log("the  requested body is", req.body);
  const { name, email, phone } = req.body;
   if(!name || !email || !phone){
  res.status(400);
  throw new Error("all the fields are mandatory");}

  res.status(201).json({ message: "create contacts" });
});




//get an indi contacts
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `get an contacts ${req.params.id}` });
});




// update contacts
const updateContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update contacts ${req.params.id}` });
});



//deleteconatcts

const deleteContact = asyncHandler(async(req, res) => {
  res.status(200).json({ message: `delete contacts ${req.params.id}` });
});


module.exports = {
  getContacts,
  createContacts,
  getContact,
  updateContacts,
  deleteContact,
};
