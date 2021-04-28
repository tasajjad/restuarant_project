/* eslint-disable react/jsx-pascal-case */
import React,{Component} from 'react';
import {Button,FormGroup,Label,Input,Col} from 'reactstrap'
import {Form,Control,Errors,actions} from 'react-redux-form';
import {connect} from 'react-redux'


const mapDispatchToProps=dispatch=>{
    console.log("This is mapDispatchToProps Contact JS file: ",dispatch)
    return {
        resetFeedBackForm:()=>{
            dispatch(actions.reset('feedback'))
        }
    }
}

// /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const required=val=>val && val.length;
const isNumber= val=>!isNaN(Number(val));
const validMAil=val=>/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val)

class Contact extends Component {
    
    handleSubmit=values => {
      
        
        // console.log("SUBMIT: ",values);
        this.props.resetFeedBackForm()
       
       
    }

    


    render(){
      document.title="Menu"

    //   console.log("STATE: ",this.state)

        return (
            <div className="container">
                <div className="row row-content" style={{paddingLeft:"20px",textAlign:"left"}}>
                    <div className="col-12">
                        <h3>Send Us Your Feed Back</h3>
                    </div>
                    <div className="col-12 col-md-7">
                        <Form model="feedback" onSubmit={values=>this.handleSubmit(values)}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                   
                                    < Control.text
                                    model=".firstname"
                                    name="firstname" 
                                    placeholder="First Name"
                                    className="form-control"
                                    validators={{
                                        required
                                    }}
                                     />
                                     <Errors
                                     className="text-danger"
                                     model=".firstname"
                                     show="touched"
                                     messages={{
                                         required:"Please Required" 
                                     }}
                                     />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last name</Label>
                                <Col md={10}>
                                    <Control.text
                                    model=".lastname"
                                     name="lastname"
                                      placeholder="Last Name" 
                                      className="form-control"
                                      validators={{
                                          required
                                      }}
                                      />
                                      <Errors
                                     className="text-danger"
                                     model=".lastname"
                                     show="touched"
                                     messages={{
                                         required:"Please Required"
                                     }}
                                     />

                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text
                                    model=".telnum"
                                     name="telnum"
                                      placeholder="Tel. Number"
                                      className="form-control"
                                      validators={{
                                        required,
                                        isNumber
                                    }}
                                      />

                                    <Errors
                                     className="text-danger"
                                     model=".telnum"
                                     show="touched"
                                     messages={{
                                         required:"Please Required",
                                         isNumber:"Invalid Number"
                                     }}
                                     />

                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text
                                    model=".email"
                                     name="email"
                                      placeholder="Email"
                                      className="form-control"
                                      validators={{
                                        required,
                                        validMAil
                                    }}
                                       />

                                    <Errors
                                     className="text-danger"
                                     model=".email"
                                     show="touched"
                                     messages={{
                                         required:"Please Required",
                                         validMAil:"Invalid email"
                                     }}
                                     />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:6, offset:2}}>
                                   <FormGroup check>
                                       <Label check>
                                           <Control.checkbox
                                           model=".agree"
                                            name="agree" 
                                            className="form-check-input"
                                            /><strong>May We Contact You ?</strong>
                                       </Label>
                                   </FormGroup>
                                </Col>
                                <Col md={{size:3, offset:1}}>
                                    <Control.select
                                    model=".contactType"
                                     name="contactType" 
                                      className="form-control"
                                     >
                                            <option>Tel.</option>
                                            <option> Email</option>
                                    </Control.select>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}> Your Feedback </Label>
                                <Col md={10}>
                                    <Control.textarea
                                    model=".message"
                                     name="message" 
                                     rows="12"
                                     className="form-control"
                                     validators={{
                                        required
                                    }}
                                     />

                                    <Errors
                                     className="text-danger"
                                     model=".message"
                                     show="touched"
                                     messages={{
                                         required:"Please Required",

                                     }}
                                     />                     

                                </Col>
                            </FormGroup>
                            <FormGroup>
                                    <Col md={{size:10,offset:2}}>
                                        <Button type="submit" color="primary">Send Feedback</Button>
                                    </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null,mapDispatchToProps) (Contact);