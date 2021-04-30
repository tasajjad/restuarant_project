import React from 'react';
// import DISHES from '../../data/dishes';
import dateFormat from 'dateformat';
import Loading from './Loading'

const LoadComments=props=>{

    if(props.commentsIsLoading){
        return(<Loading/>)
    }else{
        return(

            props.comments.map(comments=>{
                return (
                    <div key ={comments.id} style={{background:"#F06292",borderRadius:"10px"}}>
                     <h5 style={{marginLeft:"20px"}}>{comments.author}</h5>
                    
                     <p style={{marginLeft:"20px"}}>{comments.comment}</p>
           
                     <p style={{marginLeft:"20px"}}>rating:{comments.rating}</p>
                 
                     <p style={{marginLeft:"20px"}}>{dateFormat(comments.date,"dddd,mmmm ds,yyyy, h:MM:TT")}</p>
                     <hr/>
                </div>)
            })
         );
    
    }


     

    
}


export default LoadComments;