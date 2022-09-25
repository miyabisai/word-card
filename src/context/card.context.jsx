import {createContext,useEffect,useState} from 'react';
import axios from 'axios';

export const CardContext = createContext({
    front:"",
    back:"",
    note:"",
    practice:""
});

export const CardProvider = ({children})=>{

    const sheetId = "1Y_F29_LjJYz-HEwr575H6CLeFBy3TMl2zWXZPstCeYE";
    const APIKey = "AIzaSyDZyU26HELtr_EX4f8kvmZokhp5NY7Ct_4"
    const sheetName = "main"
    const API = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}?key=${APIKey}`; 

    const [words,setWords] = useState([]);
    const value = {words};

    useEffect(()=>{
       axios
        .get(API)
        .then(response=>{
            const data =response.data.values;
            console.log(data);
            setWords(data);
        })
        .catch(err=>{
            console.log("err",err);
        })
        
    },[]);

    return <CardContext.Provider value={value}>{children}</CardContext.Provider>

}
