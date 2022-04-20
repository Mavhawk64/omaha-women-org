const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
   req.db.query("SELECT * FROM Events", function (err, result, fields) {
      if (err)  res.status(500);
      res.status(200).json({"events":result});
    });
 });

 module.exports = router;