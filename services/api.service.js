import https from 'https';
import axios from "axios";
import {getKeyValue} from "./storage.service.js";

const getWeather = async () => {
    const token = await getKeyValue('token');
    const city = await getKeyValue('city');

    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'ru',
            units: 'metric'
        }
    })
    return data;
    /*
    const url = new URL('https://api.openweathermap.org/data/2.5/weather');
    url.searchParams.append('q', city);
    url.searchParams.append('appid', token);
    url.searchParams.append('lang', 'ru');
    url.searchParams.append('units', 'metric');

    https.get(url, (response) => {
        let res = '';
        response.on('data', (chunk) => {
            res += chunk;
        })

        response.on('end', () => {
            console.log(res);
        })
    }); */
};

export {getWeather};