//get conatcts
const getContacts = (req, res) => {
  res.status(200).json({ message: "get all contacts" });
};




//create contacts
const createContacts = (req, res) => {
  console.log("the  requested body is", req.body);
  const { name, email, phone } = req.body;
   if(!name || !email || !phone){
  res.status(400);
  throw new Error("all the fields are mandatory");}

  res.status(201).json({ message: "create contacts" });
};




//get an indi contacts
const getContact = (req, res) => {
  res.status(200).json({ message: `get an contacts ${req.params.id}` });
};




// update contacts
const updateContacts = (req, res) => {
  res.status(200).json({ message: `update contacts ${req.params.id}` });
};



//deleteconatcts

const deleteContact = (req, res) => {
  res.status(200).json({ message: `delete contacts ${req.params.id}` });
};


module.exports = {
  getContacts,
  createContacts,
  getContact,
  updateContacts,
  deleteContact,
};
