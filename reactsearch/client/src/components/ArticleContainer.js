import React from "react";
import Articles from "./Article";
import SavedArticles from "./SavedArticles";

const ArticleContainer = props => (
  <div className="container">
    <div className="jumbotron">
      <h3>Search Results</h3>
      <hr className="my-4" />
      <div className="row">
        <div className="col">
          <Articles articles={props.articles} saveArticle={props.saveArticle} />
        </div>
      </div>
    </div>
    <div className="jumbotron">
      <h3>Saved Articles</h3>
      <hr className="my-4" />
      <div className="row">
        <div className="col">
          <SavedArticles
            deleteArticle={props.deleteArticle}
            savedArticles={props.savedArticles}
          />
        </div>
      </div>
    </div>
  </div>
);

export default ArticleContainer;