import React from "react";

const Articles = props => (
  <div>
    {props.articles.map(article => (
      <div>
        <div className="card">
          <div className="card-header">
            <a href={article.web_url}>{article.headline.main} ({article.pub_date.substring(0, 4)})</a>
            
            <button
              type="button"
              className="btn-sm btn-success float-right"
              articlename={article.headline.main}
              articledate={article.pub_date}
              articleurl={article.web_url}
              onClick={props.saveArticle}
            >
              Save
            </button>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{article.snippet}</li>
          </ul>
        </div>
        <br />
      </div>
    ))}
  </div>
);

export default Articles;

/*
<div class="card" style="width: 18rem;">
  <div class="card-header">
    Featured
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
</div>
*/

/*
 <List>
{this.state.saved.map(article => (
    <ListItem key={article.i}>
      <Link to={"/articles/" + article.i}>
        <a href={article.web_url}>
          <strong>
            {article.headline.main} published on {article.pub_date}
          </strong>
        </a>
      </Link>
      <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
    </ListItem>
  ))}
</List>
*/