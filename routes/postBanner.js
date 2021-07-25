var express = require("express");
var router = express.Router();
var DataBanner = require("../models/banner");

// ============get api===============================
router.get("/", async (req, res) => {
  try {
    const Get_todo = await DataBanner.find();
    res.json(Get_todo);
  } catch (err) {
    res.json({ message: err });
  }
});
// ============update api============================
router.put("/:id", async (req, res) => {
  try {
    var dataPut = {
      img: req.body.img,
      toLink: req.body.toLink,
      textLink: req.body.textLink,
    };
    var Update_id = await DataBanner.findByIdAndUpdate(req.params.id, dataPut);
    res.json(Update_id);
  } catch (err) {
    res.json({ message: err });
  }
});
//===================================================

module.exports = router;
