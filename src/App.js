import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbarr from './Components/Navbar';
import Add from './Components/Add';
import Filter from './Components/Filter';
import Movielist from './Components/Movielist';
import {movies} from './Components/movies';
import Trailer from './Components/Trailer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
 
//console.log(movies);
function App () {
  const [movielist, setmovielist]=useState(movies)
  console.log(movielist)
  const addHandler=(newMovie)=>{
    setmovielist(
      [...movielist, newMovie]
    )
  }
  const [search, setsearch]=useState("");
  const [rate, setrate]=useState("1");
  return (
    <Router>
      <div className="App">
      <Navbarr/>
      <div className = 'content'>
       
      <Switch>
      <Route path='/'>
      <Filter setsearch={setsearch} setrate={setrate} rate={rate}/>
      <Add addHandler={addHandler}/>
      <Movielist movielist={movielist} search={search} rate={rate}/>
      </Route>
      <Route path="/Trailer/:id" component={Trailer}>

        <Trailer movies={movies}/>
      </Route>
      </Switch>
      
      </div>
      </div>
      </Router>
    
  );
}

export default App;