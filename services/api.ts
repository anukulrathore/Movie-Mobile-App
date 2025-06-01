export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_TMDB_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_BEARER_TOKEN}`
    }
}

export const FetchMovies = async ({ query} : {query:string}) => {
    const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${query}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`; 

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers
    })

    if(!response.ok) {
        throw new Error('Failed to fetch movies');
    }

    const data = await response.json();
    return data.results;
}

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDA4NTA2NzAxNTU1OTA5NmNlNzlhN2VlNzQwY2NmNiIsIm5iZiI6MTc0ODcwMjUwNy43MTUwMDAyLCJzdWIiOiI2ODNiMTUyYmZlOWQ0N2I1MTJmZGFhZTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ZTfjnRS1Pdne1VMRKQNwmxaKEZ7OOXmLS-ruzJ6F6yM'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));