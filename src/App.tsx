import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Header, Movie } from './components'
import './hooks/use-request';
import useRequest from './hooks/use-request';
import { apiConfig, apiRouteConstant } from './config/api-config';
// or less ideally

const trendingMovieUri = apiConfig.BASE_URI + apiRouteConstant.trending_movie + '?api_key=' + apiConfig.API_KEY;
const tvShowUri = apiConfig.BASE_URI + apiRouteConstant.tv_shows + '?api_key=' + apiConfig.API_KEY;

function App() {

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
      <Header />
      <LoadingIndicator />
      <Movie movieData={movies} tvShowData={tvShows} />
    </div>
  );
}

export default App;
