const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({ include: [Product] })
    .then((records) => {
      console.log("Category - getALL", records);
      res.json(records);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    include: [Product],
  })
    .then((records) => {
      console.log("Category - getOne", records);
      res.json(records);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/", (req, res) => {
  // create a new category
  Category.create(req.body)
    .then((records) => {
      console.log("Category - createOne", records);
      res.json(records);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.body.id,
    }
  })
    .then((records) => {
      console.log("Category - update", records);
      res.json(records);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.body.id,
    },
  })
    .then((records) => {
      console.log("Category - destroy", records);
      res.json(records);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
