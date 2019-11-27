
'use strict';
const catModel = require('../models/catModel');

// const cats = catModel.cats;

const cat_list_get = async (req, res) => {
  const cats = await catModel.getAllCats();
  await res.json(cats);
};

const cat_create_post = (req, res) => {
  const params = [
    req.body.name,
    req.body.age,
    req.body.weight,
    req.body.owner,
    req.file.filename,
  ];
  const response = await catModel.addCat(params);
  const user = await catModel.getCat([response.insertId]);
  await res.json(cat);
};

const cat_get = async (req, res) => {
  const params = [req.params.id];
  const cat = await catModel.getCat(params);
  await res.json(cat);
};


module.exports = {
  cat_list_get,
  cat_create_post,
  cat_get,
};