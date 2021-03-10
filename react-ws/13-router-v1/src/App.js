import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import Products from './components/Products';
import ProductForm from './components/Product-Form';
import FindProduct from './components/Find-Product';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import NavBar from './components/NavBar';

const App = () => {
  return (

    <Router>
      <div className="container">
        <div className="alert alert-info text-center">
          <h1>SPA Application Development</h1>
        </div>
        <hr />

        <div className="row">
          <div className="col-2">

           <NavBar/>

          </div>
          <div className="col-10">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/product-form" component={ProductForm} />
              <Route exact path="/listAll" component={Products} />
              <Route exact path="/find-product" component={FindProduct} />
              <Route exact path="/edit/:id" component={ProductForm} />
            </Switch>

          </div>

        </div>


      </div>


    </Router>

  );
};

export default App;