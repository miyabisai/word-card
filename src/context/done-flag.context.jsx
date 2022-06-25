import {createContext,useEffect,useState} from 'react';
import axios from 'axios';

export const DoneFlagContext = createContext({  
    id:"",
    flag:""
});

export const DoneFlagProvider = ({children})=>{
    const sheetId = "1Y_F29_LjJYz-HEwr575H6CLeFBy3TMl2zWXZPstCeYE";
    const APIKey = "AIzaSyDZyU26HELtr_EX4f8kvmZokhp5NY7Ct_4"
    const sheetName = "Sheet1";
    const API = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}!A1:D5?valueInputOption=USER_ENTERED`;


}



