const API_KEY = "51fb7928986e62af1af8fb721cfb26a6";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&Swith_networks=213`, 
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US` ,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&Swith_genres=35` ,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`, 
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

};
export default requests;