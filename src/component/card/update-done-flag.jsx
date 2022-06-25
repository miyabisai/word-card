
import axios from 'axios';
export const updateDoneFlag = (id,status)=>{
    console.log(id,status);

    const sheetId = "1Y_F29_LjJYz-HEwr575H6CLeFBy3TMl2zWXZPstCeYE";
    const APIKey = "AIzaSyDZyU26HELtr_EX4f8kvmZokhp5NY7Ct_4";
    const sheetName = "Sheet1";
    const posIdx = Number(id)+1;
    //const API = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}?key=${APIKey}`;
    const URL = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}!E${posIdx}:E${posIdx}?key=${APIKey}`;
    //const URL = `https://docs.google.com/spreadsheets/d/1Y_F29_LjJYz-HEwr575H6CLeFBy3TMl2zWXZPstCeYE/edit?usp=sharing`;
    const params = {
        "range": `${sheetName}!E${posIdx}:E${posIdx}`,
        "majorDimension": "ROWS",
        "values": [[status]]
    };

    axios
    .put(URL,params)
    .then(response=>{
        console.log(response);
    })
    .catch(err=>{
        console.log("err",err);
    });
} 


