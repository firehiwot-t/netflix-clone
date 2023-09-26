import './App.css';
import Banner from './Banner';
import Footer from './footer/Footer';
import Nav from './Nav';
import requests from './requests';
import Row from './Row';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row
      title="NETFLIX ORIGNALS"
      fetchurl={requests.fetchNetflixOriginals}
      isLargeRow/>

      <Row title="Trending Now" fetchurl={requests.fetchTrending}/>
      <Row title="Top Reted" fetchurl={requests.fetchTopRatedMovies}/>
      <Row title="Action Movies" fetchurl={requests.fetchActionMovies}/>
      <Row title="Comedy  Movies" fetchurl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchurl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchurl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries Movies" fetchurl={requests.fetchDocumentaries}/>
      <Footer/>



    </div>
  );
}

export default App;
