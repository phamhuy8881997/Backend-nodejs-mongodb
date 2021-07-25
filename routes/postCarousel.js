var express = require("express");
var router = express.Router();
var DataCarousel = require("../models/carousel");

// ============get api===============================
router.get("/", async (req, res) => {
  try {
    const Get_todo = await DataCarousel.find();
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
      text: req.body.text,
      toLink: req.body.toLink,
      textLink: req.body.textLink,
    };
    var Update_id = await DataCarousel.findByIdAndUpdate(
      req.params.id,
      dataPut
    );
    res.json(Update_id);
  } catch (err) {
    res.json({ message: err });
  }
});
//===================================================

module.exports = router;
