import axios from "axios";
const apiKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931" //key from week 6 activity
const nytURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"; //query url 

export default {
  // Gets all articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  },
  getNews: function(topic, start, end) {
    return axios.get(nytURL+`?api-key=${apiKey}&q=${topic}&begin_date=${start}&end_date=${end}`)
  }
};
