import axios from "axios";

export default {
  getGoogleBooks: function(search) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q="+search+"&orderBy=newest&maxResults=16&key=AIzaSyAZw2FMTI8E9xeuYJcQWVuhR_iHo6-IHic");
  },
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log(bookData)
    return axios.post("/api/books", bookData);
  }
  
};