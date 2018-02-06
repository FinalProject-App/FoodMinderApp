import axios from "axios";
const BASEURL = "/api/Items";

export default {
    // Gets all books
    getItems: function() {
        return axios.get(BASEURL);
    },
    // Deletes the book with the given id
    deleteItem: function(id) {
        return axios.delete(BASEURL + id);
    },
    // Saves a book to the database
    saveItem: function(ItemsData) {
        return axios.post(BASEURL, ItemsData);
    },
    patchItem: function(id, ItemsData) {
        return axios.patch(BASEURL + id, ItemsData);
    },
};