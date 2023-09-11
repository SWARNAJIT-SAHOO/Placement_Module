import { Col, Form,Row,Label,Input,Button } from "reactstrap";
import { Image,FormGroup } from "react-bootstrap";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useState } from "react";
import Url from "../SpringApi/Url";
import axios from "axios";

const AddPost=()=>{
    const [id,setId]=useState('');
    const [company,setCompany]=useState("");
    const [date,setDate]=useState("");
    const [time,setTime]=useState("");
    const [place,setPlace]=useState("");
    const [job,setJob]=useState("");

    const handle1=(e)=>{
        // console.log(event);
        save1(e);
        console.log("success");
        e.preventDefault();
    }
    async function save1(e){
        try{
            await axios.post(`${Url}/admin/register`,
            {
                companyname:company,
                place:place,
                time:time,                       //left one-->database column right one-->values in input
                date:date,
                requirement:job,
            });
        
            toast.info("Done",{position:'top-center',theme:'colored',autoClose: 3000,});
            
            // setId("");
                    setCompany("");
                    setPlace("");
                    setTime("");
                    setDate("");
                    setJob("");
        }
        catch(err){     
            console.log(err);
                    toast.error('Failed',{position:'top-center',theme:'colored'});
                          
        }
    }
    



    return (
        <div style={{border:'solid .01cm rgba(183, 51, 51, 0.304)',borderRadius:'.1cm',padding:'1cm',boxShadow:' 0 8px 16px 0 rgba(186, 27, 27, 0.2), 0 6px 20px 0 rgba(207, 66, 66, 0.19)'}}>
            <Form onSubmit={handle1}>
                <div className="text-center">
                <Image src="https://www.creativefabrica.com/wp-content/uploads/2019/01/Design-icon-by-back1design1-580x384.png" style={{width:'4cm'}}/>
                {/* <h2 className="text-center">Add New Post</h2> */}
                </div>
                <Row>
                    <Col md="12">
                    <FormGroup>
        <Label for="comapanyname">Company Name: </Label>
        <Input id="comapanyname" name="cn" placeholder="Enter Company Name" type="text"
        value={company}
        onChange={(e)=>
    {
        setCompany(e.target.value)
    }}
         required/>
                    </FormGroup>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md='6'>
                    <FormGroup>
        <Label for="date">Arriving Date: </Label>
        <Input id="date" name="ad" placeholder="Enter Date" type="date" 
        value={date}
        onChange={(e)=>
    {
        setDate(e.target.value)
    }} required/>
                    </FormGroup>
                    </Col>

                    <Col md='6'>
                    <FormGroup>
        <Label for="time">Time : </Label>
        <Input id="time" name="at" placeholder="Enter Date" type="time" 
        value={time}
        onChange={(e)=>
    {
        setTime(e.target.value)
    }} pattern="[0-9]{2}:[0-9]{2}" required/>
                    </FormGroup>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md="12">
                    <FormGroup>
        <Label for="place">Place: </Label>
        <Input id="place" name="cn" placeholder="@India -Odisha" type="text" 
        value={place}
        onChange={(e)=>
    {
        setPlace(e.target.value)
    }} required/>
                    </FormGroup>
                    </Col>
                </Row>
                <br></br>

                <Row>
                    <Col md='12'>
                        <FormGroup>
        <Label for="jobreq">Job Description/Requirement: </Label>
        <Input id="jobreq" name="ad" placeholder="Requirement" type="textarea" style={{height:'2cm'}}
        value={job}
        onChange={(e)=>
    {
        setJob(e.target.value)
    }} required/>  
                        </FormGroup>
                    </Col>
                </Row>

                <div className="text-center" style={{marginTop:'10px'}}>
                    {/* <Link to='/Adminlist'> */}
                <Button  color="success" type="submit" >SUBMIT</Button>
                    {/* </Link> */}
                </div>
            </Form>
        </div>
    );
}
export default AddPost