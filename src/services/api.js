import axios from 'axios';

// export const getCountries = () => {
//     const config = {
//         'method': 'GET',
//         'url': 'https://api-football-beta.p.rapidapi.com/countries',
//         'headers': {
//             'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
//             'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
//         },
//     };

//     return axios(config)
//         .then(res => res.data)
//         .catch(err => {
//             console.error(err);
//             throw err;
//         });
// };


export const getLeagues = () => {
    const config = {
        'method': 'GET',
        'url': 'https://api-football-beta.p.rapidapi.com/leagues',
        'headers': {
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
        },
    };

    return axios(config)
        .then(res => res.data)
        .catch(err => {
            throw err;
        });
};
