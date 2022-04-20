const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

router.get('/', (req, res) => {
   try{
      req.db.query(query, [values], function (err, result) {
         if (err) throw err;
         res.status(201).json({message: 'Success'})
         console.log("Number of records inserted: " + result.affectedRows);
       });
   }
   catch(err){
      console.log(err);
   }
 });

 router.post('/register', async (req, res) => {
   try {
     console.log(req.body, 'payload')
     const hashedPassword = await bcrypt.hash(req.body.password1, 10);
     const user = { ...req.body, password: hashedPassword };
     delete user['password1'];
     delete user['password2'];
     const query = "INSERT INTO Users (User_First, User_Last, User_Phone, User_Address, User_Email, User_Password ) VALUES ?"
     const values = [Object.values(user)];
     req.db.query(query, [values], function (err, result) {
      if (err) throw err;
      res.status(201).json({message: 'Success'})
      console.log("Number of records inserted: " + result.affectedRows);
    });
     
   } catch (err){
     console.log(err)
     res.status(500).send()
   }
 })

 router.post('/authenticate', (req, res) => {
   try { 
      const query = `SELECT * FROM Users where User_Email = '${req.body.email}'`
      req.db.query(query, async (err, result) => {
         if (!result || !result.length) {
            return res.status(400).send('Cannot find user')
          }
          if(await bcrypt.compare(req.body.password, result[0].User_Password)) {
            res.status(200).json({ message: 'Success', data: result[0]})
          } else {
           res.status(400).json({ message: 'Invalid Credentials!'})
          }
      });

   } catch {
     res.status(500).send()
   }
 })

 module.exports = router;