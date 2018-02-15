import axios from "axios";
const BASEURL = "/api/ItemsDB";

export default {
 
    // Gets all items
    getItems: function(email) {
        return axios.get("/api/ItemsDB/" + email);
    },
    // Deletes the item with the given id
    deleteItem: function(id) {
        return axios.delete(BASEURL + "/" + id);
    },
    // Saves a book to the database
    saveItem: function(ItemsData) {
        return axios.post(BASEURL, ItemsData);
    }
   
};