const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
       status: 'This is events api'
    })
 });

 module.exports = router;