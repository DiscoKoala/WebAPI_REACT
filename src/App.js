import React from 'react';
import './App.css';
import MovieHeader from './components/movieheader';
import MovieList from './components/movielist';
import Movie from './components/movie';
import Authentication from './components/authentication';
import {HashRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores/store';

function App() {  
  const [movies, setMovies] = useState([
    {
      _id: "6445edefc87dfc003f679b09",
      title: "Paddington Bear",
      releaseDate: "January 16, 2015",
      genre: "Comedy",
      imageURL: "https://m.media-amazon.com/images/M/MV5BMTAxOTMwOTkwNDZeQTJeQWpwZ15BbWU4MDEyMTI1NjMx._V1_.jpg"

    }
  ])
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <div>
            <MovieHeader />
            <Route exact path="/" render={()=><MovieList />}/>
            <Route exact path="/movielist" render={()=><MovieList />}/>
            <Route exact path="/movie/:movieID" render={()=><Movie />}/>
            <Route path="/signin" render={()=><Authentication />}/>
          </div>
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
