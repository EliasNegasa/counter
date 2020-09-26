import React, { Component } from "react";
import "./App.css";
// import Counters from "./components/counters";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
// import Products from "./components/routing/products";
import { Redirect, Route, Switch } from "react-router-dom";
// import Dashboard from "./components/routing/admin/dashboard";
// import Posts from "./components/routing/posts";
// import Home from "./components/routing/home";
// import ProductDetails from "./components/routing/productDetails";
import NotFound from "./components/routing/notFound";
import Customer from "./components/customer";
import Rentals from "./components/rentals";
import MoviesForm from "./components/moviesForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logout from "./components/logout";
import auth from "./services/authService";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counter) => {
    const counters = this.state.counters.filter((c) => c.id !== counter.id);
    this.setState({ counters });
  };

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        {/* totalCount={this.state.counters.filter((c) => c.value > 0).length} */}
        <NavBar user={user} />
        <main className="container">
          {/* <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          /> */}
          {/* <Movies /> */}
          <div className="content">
            <Switch>
              <Route
                path="/movies/:id"
                render={(props) => {
                  if (!user) {
                    console.log("USER", user);
                    return <Redirect to="/login" />;
                  }
                  return <MoviesForm {...props} user={user} />;
                }}
              />
              <Route path="/login" component={LoginForm} />
              <Route path="/logout" component={Logout} />
              <Route path="/register" component={RegisterForm} />
              <Route path="/movies" component={Movies} />
              <Route path="/customers" component={Customer} />
              <Route path="/rentals" component={Rentals} />
              <Route path="/not-found" component={NotFound} />
              <Redirect exact from="/" to="/movies" />
              <Redirect to="/not-found" />
            </Switch>
          </div>
          {/* <NavBar /> */}
          {/* <div className="content">
            <Switch>
              <Route path="/products/:id" component={ProductDetails} />
              <Route
                path="/products"
                render={(props) => <Products sortBy="name" {...props} />}
              />
              <Route path="/posts/:year?/:month?" component={Posts} />
              <Route path="/admin" component={Dashboard} />
              <Redirect from="/messages" to="/posts" />
              <Route path="/not-found" component={NotFound} />
              <Route path="/" exact component={Home} />
              <Redirect to="/not-found" />
            </Switch>
          </div> */}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
