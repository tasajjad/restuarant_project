import React, { Component } from 'react';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail';
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import {addComment,fetchDishes,fetchComments} from '../../redux/actionCreators';
import{connect} from 'react-redux';
import Loading from './Loading'


// this state acces store state for props 
const mapStateToProps = state => {
   //console.log("Map State to Props: ",state);
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}
 
// this function accedpt dispatch function as a props and this props
// function call by addComments property . and addComment property 
// will be send as a props dishDetail component and it take and 
// now it send comments for components as a props and recieve and 
//call this mamDispatchToProps() function

const mapDispatchToProps=dispatch =>{
    
   // console.log("MapDispatch to Porps: ",dispatch);
    return {
        // this is tiny customization author and rating are change
        addComments:(dishId,author,rating,comment)=>dispatch(addComment(dishId,rating,author,comment)),
        fetchDishes:()=>dispatch(fetchDishes()),
        fetchComments:()=>dispatch(fetchComments()),
        
    }
}



class Menu extends Component {
    state = {
        selectedDish: null,
        modalOpen: false
    }

    onDishSelect = dish => {
        this.setState({
            selectedDish: dish,
            modalOpen: !this.state.modalOpen
        });
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments()
    }

    render() {
        document.title = "Menu";
        if(this.props.dishes.isLoading){
            return (
                    <Loading/>
            );
        }else{

            const menu = this.props.dishes.dishes.map(item => {
                return (
                    <MenuItem
                        dish={item}
                        key={item.id}
                        DishSelect={() => this.onDishSelect(item)}
                    />
                );
            })
    
            let dishDetail = null;
            if (this.state.selectedDish != null) {
                const comments = this.props.comments.comments.filter(comment => comment.dishId === this.state.selectedDish.id
                )
                dishDetail = <DishDetail
                    dish={this.state.selectedDish}
                    comments={comments} 
                    addComments={this.props.addComments}
                    commentsIsLoading={this.props.comments.isLoading}
                    />
            }
            return (
                <div className="container">
                    <div className="row">
                        <CardColumns>
                            {menu}
                        </CardColumns>
                        <Modal isOpen={this.state.modalOpen} >
                            <ModalBody>
                                {dishDetail}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggleModal}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
            );
        }
       
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu);