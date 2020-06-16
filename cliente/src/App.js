import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import Login from './auth/Login';
import store from './store/index';
import Content from './components/Content';

function App() {
  return (
      
    <Router>
      <Provider store={store}>
          <Switch>          
                <Route exact path='/' component={Login} />            
                <Route exact path='/content' component={Content} />  
          </Switch>
       </Provider>
    </Router>



  );
}

export default App;
