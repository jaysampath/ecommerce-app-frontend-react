import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import AppAuthContext from "./context/app-auth-context";
import { useContext, useEffect } from "react";
import Items from "./components/Item/Items";
import ItemDetail from "./components/Item/ItemDetail";
import Category from "./components/Category/Category";
import UserAccount from "./components/pages/UserAccountPage";
import {useDispatch } from "react-redux";
import { FetchCartData } from "./redux/CartActions";
import ItemsBySubCategories from "./components/Category/ItemsBySubCategories";
import Order from "./components/Order/Order";
import OrderSummary from "./components/Order/OrderSummary";
import UserOrderPage from "./components/pages/UserOrderPage";
import SearchResults from "./components/Category/SearchResults";
import ItemAllReviews from "./components/Item/ItemAllReviews";



function App() {
  const authCtx = useContext(AppAuthContext);

  if (!authCtx.isLoggedIn) {
    window.location.href = "http://localhost:3006";
  }
 
  const dispatch = useDispatch();
  //const cart = useSelector(state=>state.cart);

  const loggedInUserEmail = authCtx.token["loginCookieForEcommerce"];

  useEffect(()=>{
    dispatch(FetchCartData(loggedInUserEmail));
  },[dispatch,loggedInUserEmail]);

  // useEffect(()=>{

  //   if(cart.changed){
  //     dispatch(FetchCartData(loggedInUserEmail));
  //   }

  // });
  

  return (
    <Layout>
      <Switch>
        <Route path="/cart" exact>
          <Cart />
        </Route>

        <Route path="/item-detail" exact>
          <ItemDetail />
        </Route>

        <Route path="/category" exact>
          <Category />
        </Route>

        <Route path="/user-account" exact>
          <UserAccount />
        </Route>

        <Route path="/" exact>
          <Items />
        </Route>

       <Route path="/subcategory/items" exact >
           <ItemsBySubCategories />
       </Route>

       <Route path="/order" exact >
           <Order />
       </Route>

       <Route path="/order-summary" exact >
           <OrderSummary />
       </Route>

       <Route path="/user-orders" exact >
           <UserOrderPage />
       </Route>

       <Route path="/search-results" exact >
           <SearchResults />
       </Route>

       <Route path="/all-reviews" exact >
           <ItemAllReviews />
       </Route>

      </Switch>
    </Layout>
  );
}

export default App;
