import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderComments() {
    const comments = this.props.dish.comments.map(cmnt => (
      <li key={cmnt.id} style={{ listStyleType: "none", margin: "0 0 15px 0" }}>
        {cmnt.comment} <br />
        -- {cmnt.author}, {new Date(cmnt.date).toDateString()}
      </li>
    ));

    return (
      <div className="col-12 col-md-5 m-1">
        <h1>Comments</h1>
        <ul className="borderless">{comments}</ul>
      </div>
    );
  }

  renderDish() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg
              width="100%"
              src={this.props.dish.image}
              alt={this.props.dish.name}
            />
            <CardBody>
              <CardTitle>{this.props.dish.name}</CardTitle>
              <CardText>{this.props.dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        {this.props.dish.comments ? this.renderComments() : <div />}
      </div>
    );
  }

  render() {
    const dish = this.props.dish;
    return dish ? this.renderDish() : <div className="row" />;
  }
}

export default DishDetail;
