import * as types from './types';

const reducer = (state, action)=>{
    switch(action.type){
        case types.LOAD_SPORTS:{
            return {...state,  sports: action.payload}
        }
        case type.LOAD_ODDS:{
            return {...state, odds: action.payload}
        }
    }

    return {...state}
}

export default reducer;