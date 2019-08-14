import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";
import { Link } from "react-router-dom";

export default function DishDetail({ dish, comments }) {
  return dish ? (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <RenderDish dish={dish} />
        <RenderComments comments={comments} />
      </div>
    </div>
  ) : (
    <div className="container" />
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
    <li
      key={cmnt.id}
      className="comment-spacing"
      style={{ listStyleType: "none" }}
    >
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
