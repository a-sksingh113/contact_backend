const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, '../client/login.html'));
});

router.get('/register', (req, res)=>{
    res.sendFile(path.join(__dirname, '../client/register.html'));
});

router.get('/contacts', (req, res)=>{
    res.sendFile(path.join(__dirname, '../client/contacts.html'));
});

module.exports = router;