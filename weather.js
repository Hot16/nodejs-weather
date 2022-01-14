#!/usr/bin/env node
import {getArgs} from './helpers/args.js';
import {printError, printSuccess, printHelp} from './services/log.cervice.js';
import {saveKeyValue} from './services/storage.service.js';
import {getWeather} from './services/api.service.js';

const saveToken = async (token) => {
    try {
        await saveKeyValue('token', token);
        printSuccess('Token saved')
    } catch (e) {
        printError(e.message);
    }
}

const saveCity = async (city) => {
    try {
        await saveKeyValue('city', city);
        printSuccess('City saved');
    } catch (e) {
        printError(e.message);
    }
}

const getForecast = async () => {
    const weather = await getWeather();
    console.log(weather);
}

const initCLI = () => {
    const args = getArgs(process.argv);

    if (args.help){
        //вывод помощи
        printHelp();
    }
    if (args.city){
        //save city
        saveCity(args.city);
    }
    if (args.token){
        //save token
        saveToken(args.token);
    }

    if (!args.city && !args.token && !args.help){
        getForecast();
    }

}

initCLI();