
//get conatcts
const getContacts = (req,res)=>{
    res.status(200).json({message:"get all contacts"});
}

//create contacts
const createContacts = (req,res)=>{
    console.log("the  request body is",req.body);
    res.status(200).json({message:"create contacts"});
}
//get an indi contacts
const getContact = (req,res)=>{
    res.status(200).json({message:`get an contacts ${req.params.id}`});
}
 // update contacts
const updateContacts = (req,res)=>{
    res.status(200).json({message:`update contacts ${req.params.id}`});
}
//deleteconatcts

const deleteContact = (req,res) =>{
    res.status(200).json({message:`delete contacts ${req.params.id}`});
}

module.exports = {
    getContacts,
    createContacts,
    getContact,
    updateContacts,
    deleteContact,
}