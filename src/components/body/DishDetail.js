import React from 'react';
import {Card,CardBody,CardImg,CardTitle,CardText} from 'reactstrap'
import LoadComments from './LoadComments.js';
import CommentsForm from './CommentsForm.js';
import {baseUrl} from '../../redux/baseUrl'
const DishDetail =props=>{
    // console.log(props.dish)
    return(
        <div >
            <Card >
                <CardImg top src={baseUrl+props.dish.image} alt={props.dish.name}/>
                <CardBody style={{textAlign:"left"}}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText> {props.dish.description} </CardText>
                       
                      
                    <CardText> Price:{props.dish.price}/-</CardText>
                    <hr/>
                    <LoadComments comments={props.comments  } commentsIsLoading={props.commentsIsLoading} />    
                    <hr/>
                    
                   <CommentsForm dishId={props.dish.id} addComments={props.addComments}/>
               
                   
                </CardBody>
            </Card>
        </div>
    );
}

export default DishDetail;