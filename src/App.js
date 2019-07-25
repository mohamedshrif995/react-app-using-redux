import React from 'react';
import { BrowserRouter, Route, Link,Switch } from "react-router-dom"
import NavBar from './component/NavBar'
import Home from './component/Home'
import Contact from './component/Contact'
import About from './component/About'
import Posts from './component/Posts'
function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      <NavBar />
      <Switch>
      <Route path='/home' component={Home} />
      <Route path='/About'component={About}/>
      <Route path='/Contact'component={Contact}/>
      <Route path='/:post_id'component={Posts}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
