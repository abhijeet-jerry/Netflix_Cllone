import React from 'react';
import './CSS/App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      {/*Rows Of Different Categories*/}
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Mystery Movies" fetchUrl={requests.fetchMystery} />
      <Row title="SciFi Movies" fetchUrl={requests.fetchSciFi} />
      <Row title="Western Movies" fetchUrl={requests.fetchWestern} />
      <Row title="Animated Movies" fetchUrl={requests.fetchAnimation} />
      <Row title="TV Series" fetchUrl={requests.fetchTV} />

    </div>
  );
}

export default App;
