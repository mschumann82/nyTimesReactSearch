import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import SaveBtn from "../../components/SaveBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Articles extends Component {
  state = {
    news: [],
    articles: [],
    start: "",
    end: "",

  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  };

  handleNews(topic, start, end){
    const that = this;

    API.getNews(topic, start, end)
    .then(function(res){

      if(res){
      const data = [];
        for (let i=0; i<(5>res.data.response.docs.length ? (res.data.response.docs.length) : 5); i++){
          const url = res.data.response.docs[i].web_url;
          const title = res.data.response.docs[i].headline.main;
          const pub_date = res.data.response.docs[i].pub_date;
          const id = res.data.response.docs[i]._id;
          const newdata = {
            _id: id,
            title: title,
            url: url,
            pub_date: pub_date
        }
          data.push(newdata);
        }
      that.setState({news: data}); //they said this was never that, but they were wrong.
      // console.log(data); 
    }
  }); 
 ;
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>New York Times Article Scrubber</h1>
              <h3>Search for and save articles of interest</h3>
            </Jumbotron>
            <form>
              <Input 
                value={this.state.topic}
                onChange={this.handleInputChange}
                name="topic"
                placeholder="Topic" />
              <Input 
              value={this.state.topic}
              onChange={this.handleInputChange}
              name="start" 
              placeholder="Start Year" />
              <Input 
              value={this.state.topic}
              onChange={this.handleInputChange}
              name="end" 
              placeholder="End Year" />
              <FormBtn 
              disabled={!(this.state.topic)}
              onClick={this.handleNews(this.state.topic, this.state.start, this.state.end)}
              >Search</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Articles On My List</h1>
            </Jumbotron>
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => (
                  <ListItem key={article._id}>
                    <a href={"/articles/" + article._id}>
                      <strong>
                        {article.title}
                        {article.url}
                        {article.date}
                      </strong>
                    </a>
                    <DeleteBtn />
                  </ListItem>
                ))}
            
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>

        </Row>
        <Row>
          <Col size="md-6 sm-12">
          {this.state.news.length ? (
              <List>
                {this.state.news.map(result => (
                  <ListItem key={result._id}>
                    
                      <strong>
                        {article.title}
                        <a href={article.url}>{article.url}</a>
                        {article.date}
                      </strong>
                    
                    <SaveBtn />
                  </ListItem>
                ))}
            
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}

          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
