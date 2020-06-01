import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/navBar';
import Products from './components/products';
import ProductDetails from './components/productDetails/productDetails';
import Home from './components/home';
import { getProducts } from './services/productService';


class App extends Component {
  constructor() {
    super()
    this.state = { 
      products: [],
      selectedProduct: null,
    }
  }

  async componentDidMount() {
    try {
      const { data: products} = await getProducts()
      this.setState({ products })
    } catch (ex) {
      console.log(ex);
    }
    
  }

  selectProduct = (productIndex) => {
    
    this.setState({ selectedProduct: productIndex })
  }
  render() { 
    return ( 
      <Fragment>
        <NavBar />
        <div style={{ margin: '50px'}}>
          <Switch>
            <Route path='/products/:id' render={(props) => 
              <ProductDetails {...props}
                product={this.state.products[this.state.selectedProduct]}
              /> }
            />
            <Route path='/products' render={(props) => 
              <Products {...props}
                products={this.state.products}
                onSelectProductFn={this.selectProduct}
                onSelectedProductIndex={this.state.selectedProduct}  
              /> }
            />
            <Route path='/' component={Home}/>
          </Switch>
        </div>
      </Fragment>
     );
  }
}
 
export default App;
