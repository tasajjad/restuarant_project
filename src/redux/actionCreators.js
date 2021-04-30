import * as actionType from './actionType';
import axios from 'axios';
import {baseUrl} from './baseUrl'

export const addComment=(dishId,rating,author,comment)=>dispatch=>{

    const newComments={
        dishes:dishId,
        rating:rating,
        author:author,
        comment:comment
    };

    newComments.date=new Date().toISOString()

    axios.post(baseUrl+"comments",newComments)
    .then(response=>response.data)
    .then(comments=>dispatch(commentConcat(comments)))
}

export const commentConcat=comment=>({
    type:actionType.ADD_COMMENT,
    payload:comment
})


export const commentLoading=()=>({  
    type:actionType.COMMENTS_LOADING

})

export const loadComments=(comments)=>({
    type:actionType.LOAD_COMMENTS,
    payload:comments
})


export const fetchComments=()=>dispatch=>{
    dispatch(commentLoading());
    axios.get(baseUrl+"comments")
    .then((response)=>response.data)
    .then(comments=>dispatch(loadComments(comments)))
}

// Dishes Section*****************************************
export const loadDishes=dishes=>({
    type:actionType.LOAD_DISHES,
    payload:dishes
})

export const dishesLoading=()=>({
    type:actionType.DISHES_LOADING
})

export const fetchDishes=()=>{
    return dispatch=>{
        dispatch(dishesLoading());
       
      axios.get(`${baseUrl}dishes`)
      .then((response)=>response.data)
      .then(dishes=>dispatch(loadDishes(dishes)))
    }
}