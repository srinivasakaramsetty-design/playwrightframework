import { config } from "../config/config";


export class ConfigReader {


    static getUrl(){

        return config.url;

    }


    static getExplicitWait(){

        return config.explicitWait;

    }


}