const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//get conatcts
//@ /api/contacts/
const getContacts = asyncHandler(async (req, res) => {
  const contact = await Contact.find({user_id : req.user.id});
  res.status(200).json(contact);
});

//create contacts
//@ /api/contacts/
  const createContact = asyncHandler(async (req, res) => {
  console.log("the  requested body is", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("all the fields are mandatory");
  }
  const contacts = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user.id,
  });
  res.status(201).json(contacts);
});

//get an indi contacts
//@ /api/contacts/1
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact){
    res.status(404);
    throw new Error("contact not found")
  }
  res.status(200).json(contact);
});

// update contacts
//@ /api/contacts/1
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact){
    res.status(404);
    throw new Error("contact not found")
  }
  if(contact.user_id.toString() !== req.user.id){
    res.status(403);
    throw new Error("user dont have access to update the others contact");
  }
  const updatedContact = await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true});
  res.status(200).json(updatedContact);
});

//deleteconatcts
//@ /api/contacts/1
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact){
    res.status(404);
    throw new Error("contact not found")
  }
  if(contact.user_id.toString() !== req.user.id){
    res.status(403);
    throw new Error("user dont have access to delete the others contact");
  }
  //await contact.remove(); not working 
 // await Contact.findByIdAndRemove(req.params.id); 
  await Contact.deleteOne({ _id: req.params.id });
  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
