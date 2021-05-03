import React from 'react';
import dateFormat from 'dateformat';
import Loading from './Loading';

const LoadComments = props => {
    if (props.commentIsLoading) {
        return <Loading />;
    } else {
        return (
            props.comments.map(comment => {
                return (
                    <div key={comment.id} style={{background:"#F06292",borderRadius:"10px"}}>
                        <h5 style={{marginLeft:"20px"}}>{comment.author}</h5>
                        <p style={{marginLeft:"20px"}}>{comment.comment}</p>
                        <p style={{marginLeft:"20px"}}>Rating: {comment.rating}</p>
                        <p style={{marginLeft:"20px"}}> {dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM TT")}</p>
                    </div>
                );
            })

        );
    }
}

export default LoadComments;