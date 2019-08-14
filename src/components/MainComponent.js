import React, { Component } from "react";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
// import DishDetail from "./DishDetailComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
      // selectedDish: null
    };
  }

  // onDishSelect(dishId) {
  //   this.setState({ selectedDish: dishId });
  // }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter(dish => dish.featured)[0]}
          promotion={this.state.promotions.filter(promo => promo.featured)[0]}
          leader={this.state.leaders.filter(leader => leader.featured)[0]}
        />
      );
    };

    return (
      <>
        <Header />
        <div className="container">
          {/* <Menu
            dishes={this.state.dishes}
            onClick={dishId => this.onDishSelect(dishId)}
          />
          <DishDetail
            dish={
              this.state.dishes.filter(
                dish => dish.id === this.state.selectedDish
              )[0]
            }
          /> */}
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route
              exact
              path="/menu"
              component={() => <Menu dishes={this.state.dishes} />}
            />
            <Route exact path="/contactus" component={Contact} />
            <Redirect to="/home" />
          </Switch>
        </div>
        <Footer />
      </>
    );
  }
}

export default Main;
