const express = require("express");

const router = express.Router();

const Video = require("../models/video");

//Read all videos
router.get("/videos", async (req, res) => {
  try {
    const videos = await Video.find({});
    res.send(videos);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/videos/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await Video.findById({ _id: _id });
    res.send(data);
  } catch (e) {
    res.status(400).send({ error: "video not found" });
  }
});

//create videos
router.post("/videos", async (req, res) => {
  try {
    const insertData = new Video(req.body);
    console.log(insertData);
    const data = await insertData.save();
    res.send(data);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.patch("/videos/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    // const data = await Video.findByIdAndUpdate(_id, req.body, {
    //   new: true,
    // });
    const data = await Video.findByIdAndUpdate(
      _id,
      {
        $set: {
          title: req.body.title,
          url: req.body.url,
          description: req.body.description,
        },
      },
      {
        new: true,
      }
    );
    res.send(data);
  } catch (e) {
    res.status(400).send({ error: "player not found" });
  }
});

router.delete("/videos/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await Video.findByIdAndDelete({ _id: _id });
    if (data) {
      res.status(200).send({ message: "Data deleted successfully" });
    } else {
      res.status(404).send({ error: "Data not found" });
    }
  } catch (e) {
    res.status(500).send({ error: "player not found" });
  }
});

module.exports = router;
