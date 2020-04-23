import React from 'react';
import {adminRouter} from '../routes/index'
import {Redirect,Route,Switch} from 'react-router-dom'
import Frame from '../components/Frame/Index'

function App() {
  return (
    <Frame>
      <Switch>
        {
          adminRouter.map(route=>{
            return <Route key={route.path} path={route.path} exact={route.exact} render={routeProps=>{
              return <route.component {...routeProps} />
            }} />
          })
        }
        <Redirect to='/404' />
      </Switch>
    </Frame>
  );
}

export default App;
