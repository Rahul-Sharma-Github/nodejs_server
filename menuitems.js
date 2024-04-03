// imports
const mongoose = require('mongoose');

// Creating menuItemsSchema for Posting/Getting menu items data 
const menuItemsSchema = new mongoose.Schema({
  itemname: {type:String},
  itemprice: {type:Number},
  addonitemname: {type:String},
  addonitemprice: {type:Number},
  description:{type:String},
  category:{type:String}
});

// creating model named 'Menu' from menuItemsSchema
const Menu = mongoose.model('Menu', menuItemsSchema);

// exporting Menu model
module.exports = Menu;