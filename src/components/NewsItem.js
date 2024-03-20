import React from "react";

function NewsItem(props) {
  return (
    <>
      <div className="card" style={{width: "18rem", margin: "1rem"}}>
        <p>{props.id}</p>
        <img src={props.urlToImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.description}
          </p>
          <a href={props.url} className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
    </>
  );
}

export default NewsItem;
