import * as XLSX from "xlsx";


export interface LoginData {
    username: string;
    password: string;
}


export class ExcelReader {


    static getLoginData(): LoginData[] {


        const workbook = XLSX.readFile(
            "F:/adactin/testdata/TestData.xlsx"
        );


        const sheet = workbook.Sheets["Login"];


        const data = XLSX.utils.sheet_to_json<LoginData>(sheet);


        return data;

    }

}