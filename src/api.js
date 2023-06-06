import axios from 'axios';


export default {
    getLeagues: () =>
        axios({
            'method': 'GET',
            'url': 'https://api-football-beta.p.rapidapi.com/leagues',
            'headers': {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
            },
        })
}


