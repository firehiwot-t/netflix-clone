import axios from 'axios'

const instance = axios.create ({
baseURL: "https://api.themoviedb.org/3", 
});
//instance.get ("/movie/top _rated");

export default instance;