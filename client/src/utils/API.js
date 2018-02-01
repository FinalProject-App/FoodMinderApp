import axios from "axios";
const BASEURL = "/api/Items";

export default {
    // Gets all items
    getItems: function() {
        return axios.get(BASEURL);
    },
    // Deletes the item with the given id
    deleteItems: function(id) {
        return axios.delete(BASEURL + id);
    },
    // Saves an item to the database
    saveItems: function(ItemsData) {
        return axios.post(BASEURL, ItemsData);
    },
    // Gets the item with the given id
    
    patchItems: function(id, ItemsData) {
        return axios.patch(BASEURL + id, ItemsData);
    },
};