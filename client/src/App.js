import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Header from './Component/header/Header'
import Create_product from './Component/pages/product/Create_product'
import Category from './Component/pages/category/Category'
import Products from './Component/products/Products'


function App() {
  return (
    <DataProvider>
      <Router>
        <Switch>
        <div className="App">
          <Header />
               <Route path="/" exact component={Products} />
              <Route exact path = '/create_product' component={Create_product}/>

              <Route path="/edit_product/:id" exact component={Create_product} />

              <Route exact path = '/category' component={Category}/>
        </div>
        </Switch>

      </Router>
    </DataProvider>
  );
}

export default App;
