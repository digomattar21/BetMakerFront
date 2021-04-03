import P from 'prop-types';
import { useReducer } from 'react';
import BetsContext from './context'
import { data } from './data';
import reducer from './reducer';


const BetsProvider = ({children}) =>{
    const [betsState, betsDispatch] = useReducer(reducer,data)


    return (<BetsContext.Provider value={{betsState, betsDispatch}}>{children}</BetsContext.Provider>)
}

BetsProvider.propTypes={
    children: P.node.isRequired
}

export default BetsProvider;