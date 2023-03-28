const {Router} = require("express");
const { Temperament } = require("../db.js");

const router = Router();

router.get("/", async (req, res)=>{
  try{
    res.status(200).send(await Temperament.findAll());
  } catch(err){
    res.status(500).json({err:err.message});
  }
});

module.exports = router;