import axios from "axios";
var nytAPIKEY = "abfda96b313848ad975837fbc8f1e9f6";
var nytURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

export default {
  getNYTArticles: function(topic,from,to){
    return axios.get(nytURL+`?api-key=${nytAPIKEY}&q=${topic}&begin_date=${from}&end_date=${to}`);
},
  // Gets all Articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the articles with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the articles with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a articles to the database
  saveArticle: function(articleData) {
    // console.log(articleData);
    return axios.post("/api/articles", articleData);
  }
};