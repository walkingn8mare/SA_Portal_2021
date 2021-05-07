const Event = require("../../models/home/event");
const Category = require("../../models/home/category");
const dirname = require("../../dirname");

/**
 *
 * for creating events the body of the request should be-
 * title, author, topics imgPath
 */

exports.createEvent = async (req, res) => {
  const { title, author } = req.body;
  let { category } = req.body;
  category = category.toLowerCase();
  console.log("[request body]");
  console.log(req.body);
  const imgPath =
    dirname.dirpath + "/assets/events/thumbnails/" + req.file.filename;
  if (req.body && req.file.filename) {
    try {
      const newEvent = await Event.create({
        title,
        author,
        imgPath,
        category,
      });

      const savedCategory = await Category.find({ name: category });
      if (savedCategory.length == 0) {
        const newCategory = new Category({ name: category });
        await newCategory.save();
      }

      /**
       * Console.log is for testing
       */
      console.log("[Success, event created successfully]");
      return res.status(200).json({ status: "Success", data: newEvent });
    } catch (err) {
      console.log(err);
      return res
        .status(424)
        .json({ status: "Failed", message: "Request failed" });
    }
  }

  res
    .status(422)
    .json({ status: "Insufficient Data", message: "Data is insufficient" });
};

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({}).sort("-date");
    /**
     *All console logs are for api testing
     */
    console.log("[Success, getting all events...]");
    return res.status(200).json({ status: "Success", data: events });
  } catch (err) {
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.findEvent = async (req, res) => {
  try {
    const { category } = req.body;
    console.log("[Category ]", req.body);

    const events = await Event.find({
      category: category,
    }).sort("-updatedAt");
    const categories = await Category.find({});

    res.status(200).json({
      status: "Success",
      data: {
        events,
        categories,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteEvent = async (req, res) => {
  const { id } = req.params;

  try {
    await Event.findByIdAndDelete({ _id: id });
    return res
      .status(200)
      .json({ status: "Success", message: "Successfully deleted event" });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.updateEvent = async (req, res) => {
  const { id } = req.params;
  console.log("[ID ]", id);

  try {
    const { title, author, category } = req.body;
    const imgPath =
      dirname.dirpath + "/assets/events/thumbnails/" + req.file.filename;

    if (req.body && req.file.filename) {
      const updatedEvent = await Event.findByIdAndUpdate(
        { _id: id },
        { title, author, category, imgPath },
        { new: true }
      );

      const savedCategory = await Category.find({ name: category });
      if (savedCategory.length == 0) {
        const newCategory = new Category({ name: category });
        await newCategory.save();
      }

      return res.status(200).json({ status: "Success", data: updatedEvent });
    }
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};
