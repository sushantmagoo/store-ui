import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

export default function DishDetail({ dish }) {
  return dish ? (
    <div className="row">
      <RenderDish dish={dish} /> <RenderComments comments={dish.comments} />
    </div>
  ) : (
    <div className="row" />
  );
}

function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments }) {
  const _comments = comments.map(cmnt => (
    <li key={cmnt.id} style={{ listStyleType: "none", margin: "0 0 15px 0" }}>
      {cmnt.comment} <br />
      --&nbsp;{cmnt.author},&nbsp;
      {new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        date: "2-digit"
      }).format(new Date(Date.parse(cmnt.date)))}
    </li>
  ));

  return (
    <div className="col-12 col-md-5 m-1">
      <h1>Comments</h1>
      <ul className="borderless">{_comments}</ul>
    </div>
  );
}
