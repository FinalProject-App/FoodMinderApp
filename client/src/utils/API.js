import axios from "axios";
const BASEURL = "/api/Items";

export default {
    // Gets all books
    getItems: function() {
        return axios.get(BASEURL);
    },
    // Deletes the book with the given id
    deleteItems: function(id) {
        return axios.delete(BASEURL + id);
    },
    // Saves a book to the database
    saveItems: function(ItemsData) {
        return axios.post(BASEURL, ItemsData);
    },
    // Gets the book with the given id
    // getArticle: function(id) {
    //     return axios.get(BASEURL + id);
    // },
    patchItems: function(id, ItemsData) {
        return axios.patch(BASEURL + id, ItemsData);
    },
};