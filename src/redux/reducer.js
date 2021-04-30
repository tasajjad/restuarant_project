
// import COMMENTS from '../data/comments';

import {combineReducers} from 'redux'
import * as actionTypes from './actionType';
import {InitialContactForm} from './forms'
import {createForms} from 'react-redux-form'



const dishReducer =(dishState={isLoading:false,dishes:[]},action)=>{
   switch(action.type){
       case actionTypes.DISHES_LOADING:
       return{
           ...dishState,
           isLoading: true,
           dishes:[]
       }
           case actionTypes.LOAD_DISHES:
               return{
                   ...dishState,
                   isLoading: false,
                   dishes:action.payload
               }
       default:
        return dishState;
   }
   
}

const commentReducer=(commentState={isLoading:true,comment:[]},action)=>{
    switch(action.type){
        
        case actionTypes.LOAD_COMMENTS:
            return {
                ...commentState,
                isLoading:false,
                comment:action.payload
            }

            case actionTypes.COMMENTS_LOADING:

            return{
                ...commentState,
                isLoading:false,
                comments:[]
            };


        case actionTypes.ADD_COMMENT:
        let comment=action.payload;
      
        return{
            ...commentState,
            comments:commentState.comments.concat(comment)
        }
        default :
        return commentState;

    }
    
   
}



//This is My Creation ***********************************************************

export const Reducer = combineReducers({
    dishes:dishReducer,
    comments:commentReducer,
    ...createForms({
        feedback:InitialContactForm
    })
})

