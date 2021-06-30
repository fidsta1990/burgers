import React ,{Fragment} from 'react'
import {Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Global from './components/GlobalStyles/global'
import {Home, About,Menu, Contact, Error} from './pages/'
function App() {
  return (
    <Fragment>
    <Global/>
    <Navbar/>
    <Switch>
     <Route exact path="/" component={Home}/>
     <Route  path="/about" component={About}/>
     <Route  path="/menu" component={Menu}/>
     <Route  path="/contact" component={Contact}/>
     <Route  path="*" component={Error}/>
    </Switch>
    </Fragment>
  );
}

export default App;
