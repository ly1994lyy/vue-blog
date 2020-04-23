import React from 'react';
import ReactDOM from 'react-dom';
import "./style.scss"
import App from './pages/App';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import {mainRouter} from './routes/index'

ReactDOM.render(
   <Router>
     <Switch>
       <Route path="/admin" render={routeProps=>{
         return <App {...routeProps} />
       }} />
       {
         mainRouter.map(route=>{
           return <Route key={route.path} {...route} />
         })
       }
       <Redirect to="/404" />
     </Switch>
   </Router> 
  ,
  document.getElementById('root')
);
