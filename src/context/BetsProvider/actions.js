import axios from 'axios';
import * as types from './types';


export const loadSports = async(dispatch) =>{
    try{
        let requestData = await axios.get(`http://localhost:3080/sports`,{
            headers:{
                'Access-Control-Allow-Origin':'*'
            }
        });
        let toArray = Array.from(requestData.data.data);

        dispatch({type: types.LOAD_SPORTS, payload: toArray})

    }catch(err){
        console.log(err)
    }
}

