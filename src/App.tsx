import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import { Header, Movie } from './components'
import './hooks/use-request';
import useRequest from './hooks/use-request';
import { apiConfig, apiRouteConstant } from './config/api-config';
import { Detail } from './components/movie/Detail';
// or less ideally

const trendingMovieUri = apiConfig.BASE_URI + apiRouteConstant.trending_movie + '?api_key=' + apiConfig.API_KEY;
const tvShowUri = apiConfig.BASE_URI + apiRouteConstant.tv_shows + '?api_key=' + apiConfig.API_KEY;

function App(props: any) {

  const [movies, setMovies] = useState<any[]>([]);
  const [tvShows, setTvShows] = useState<any[]>([]);

  const { doRequest: moviewRequest, loading: movieLoading, error: movieError } = useRequest(trendingMovieUri);
  const { doRequest: tvShowRequest, loading: tvShowLoading, error: tvShowsError } = useRequest(tvShowUri);

  useEffect(() => {

    (async function () {
      const trendingMovies: any = await moviewRequest();
      const tvShows: any = await tvShowRequest();
      setMovies(trendingMovies);
      setTvShows(tvShows);
    })();
  }, [])

  const LoadingIndicator = () => {
    if (tvShowLoading || movieLoading) {
      return <p>Loading....</p>
    }
    return null;
  }

  return (
    <div className="App">
      <Router>
        <Route path="/" exact render={(props) => {
          return <Movie movieData={movies} tvShowData={tvShows} {...props} />
        }} />
        <Route path="/movie/detail/:id" component={Detail} />
      </Router>
    </div>
  );
}

export default App;
{/* <Header />
      <LoadingIndicator />
      <Movie movieData={movies} tvShowData={tvShows} /> */}