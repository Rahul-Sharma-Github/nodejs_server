// imports
const express = require('express');
// Getting Router class Object/Instance
const router = express.Router();

// importing Menu model from menuitems module
const Menu = require('./menuitems');




// All MongoDB Database Core CRUD operations through API Endpoint using router object

// Create a new Menu Item
router.post('/create-menu-item', async (req, res) => {

  // here we are getting passed data from req parameter as Object ( req.body ) [ from Client App ]
  // and storing each value of req.body object's property inside constant variables in sequence according to Schema and making a Single Object from them

  const { itemname, itemprice, addonitemname, addonitemprice, description, category } = req.body;

  // the above line is similar to Below 6 Lines

        // const itemname = req.body.itemname;
        // const itemprice = req.body.itemprice;
        // const addonitemname = req.body.addonitemname;
        // const addonitemprice = req.body.addonitemprice;
        // const description = req.body.description;
        // const category = req.body.category;

  try {
    // storing Single object in menuitem variable
    const menuitem = new Menu({ itemname, itemprice, addonitemname, addonitemprice, description, category});
    // then saving the menuitem Document inside MongoDB Database
    await menuitem.save();

    res.send(menuitem);
  } catch (error) {
    console.error('error while Post Request = ',error);
    res.status(500).send(error);
  }
});


// Get all menu items
router.get('/all-menu-items', async (req, res) => {
  try {
    // here we are Fetching all the Documents from menu collection in Database
    const allMenuItems = await Menu.find({});
    res.send(allMenuItems);
  } catch (error) {
    console.error('error while Get Request ( Fetching all menu items ) = ',error);
    res.status(500).send(error);
  }
});


// Update a menu item
router.put('/update-menu-item/:id', async (req, res) => {
    // getting passed id and storing in id variable
  const { id } = req.params;
    // getting new updated data and storing them inside related variables
  const { itemname, itemprice, addonitemname, addonitemprice, description, category } = req.body;

  try {
    // after that finding document using specific id and updating it with new updated data
    const updatedMenuItem = await Menu.findByIdAndUpdate(id, { itemname, itemprice, addonitemname, addonitemprice, description, category }, { new: true });
    res.send(updatedMenuItem);
  } catch (error) {
    console.error('error while Put Request ( updating menu item ) = ',error);
    res.status(500).send(error);
  }
});


// Delete a menu item
router.delete('/delete-menu-item/:id', async (req, res) => {
    // getting passed id
  const { id } = req.params;

  try {
    // deleting a specific document by passed id
    const deletedMenuItem = await Menu.findByIdAndDelete(id);
    res.send(deletedMenuItem);
  } catch (error) {
    console.error('error while Delete Request ( Delete menu item ) = ',error);
    res.status(500).send(error);
  }
});


// All MongoDB Database Advance CRUD operations through API Endpoint using router object

// get all menu items filtered by Catagory
router.get('/menu-items/:category',async (req, res) => {
  // getting passed category
  const { category } = req.params;
  try{
    // fetching menu items documents by category
    const menuItemsByCategory = await Menu.find({"category":category});
    res.send(menuItemsByCategory);
  }catch (error) {
    console.error('error while Get Request ( Fetching all menu items by Category ) = ',error);
    res.status(500).send(error);
}
});






// exporting router object
module.exports = router ;