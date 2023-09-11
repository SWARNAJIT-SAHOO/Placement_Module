import React from "react";
import { Form } from "reactstrap";
import { Image } from "react-bootstrap";
import {Col, Label,Input,Button,Row} from "reactstrap";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const AdminLogin=()=>{
    
    const toast_fun1=()=>{
        toast.success("Logged In",{position:'bottom-center',theme:'colored',autoClose:3000});
    }
    return (
       
        

        <div style={{border:'solid .01cm rgba(183, 51, 51, 0.304)',borderRadius:'.1cm',width:'90%',padding:'1cm',boxShadow:' 0 8px 16px 0 rgba(186, 27, 27, 0.2), 0 6px 20px 0 rgba(207, 66, 66, 0.19)',marginLeft:'1cm'}}>
            <Form  >
                <div className="text-center" >
                    <p style={{color:'brown'}}>Admin Login</p>
            <Image  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC1aGLb5RBG9bMVWkkv65FmBZ7PSRgCVTpAg&usqp=CAU" style={{height:'2cm'}}></Image>
                </div>
            <Col md="12">
                <Label for="email">Email : </Label>
        <Input id="email" name="ln" placeholder="Enter Your Email" type="email" required/>
                </Col>
                <Col md="12">
                <Label for="password">Password : </Label>
        <Input id="Password" name="pwd" placeholder="Enter Your Password" type="password" required/>
                </Col>
                <div className="text-center" style={{marginTop:'10px'}}>
                    <Link to='/AdminList'>
                <Button  color="success" onClick={toast_fun1} style={{width:'100%'}} >Log-In</Button>
                    </Link>
                <br></br>
                <a href="#" style={{textDecoration:'none'}}>
                <p>Forgot Password ?</p></a>
                </div>
            </Form>
        </div> 
       

    );
}
export default AdminLogin