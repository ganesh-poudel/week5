'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();

const getAllCats = async () => {
  try {
    const [rows] = await promisePool.execute('SELECT * FROM wop_cat');
    return rows;
  } catch (e) {
    console.log('error', e.message);
    return {error: 'error in database query'};
  }
};

const addCat = async (params) =>{

  try {
    const [rows] = await promisePool.execute(
        'INSERT INTO wop_cat(name, age, weight, owner,filename) VALUES (?,?,?,?,?);',
        params,
    );
    return rows;
  } catch (e) {
    console.log('error', e.message);
    return {error: 'error in database query'};
  }

};

const getCat = async (params) => {
  try {
    const [rows] = await promisePool.execute(
        'SELECT * FROM wop_cat WHERE cat_id = ?;',
        params,
    );
    return rows;
  } catch (e) {
    console.log('error', e.message);
    return {error: 'error in database query'};
  }
};

module.exports = {
  getAllCats,
  getCat,
  addCat,
};