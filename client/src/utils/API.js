import axios from "axios";
var nytAPIKEY = "abfda96b313848ad975837fbc8f1e9f6";
var nytURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

export default {
  getNYTArticles: function(topic,from,to){
    return axios.get(nytURL+`?api-key=${nytAPIKEY}&q=${topic}&begin_date=${from}&end_date=${to}`);
},
  // Gets all Articles
  getArticles: function() {
    return axios.get("/api/news");
  },
  // Gets the articles with the given id
  getArticle: function(id) {
    return axios.get("/api/news/" + id);
  },
  // Deletes the articles with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/news/" + id);
  },
  // Saves a articles to the database
  saveArticle: function(newsData) {
    console.log(newsData);
    return axios.post("/api/news", newsData);
  }
};