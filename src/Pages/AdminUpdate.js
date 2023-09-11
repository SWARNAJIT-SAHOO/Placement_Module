
import { Button, Card,CardBody,CardFooter,CardHeader, Col, ListGroup, ListGroupItem, Row } from "reactstrap";
import {toast } from "react-toastify";
const AdminUpdate=({data})=>{
    
    return (
        <div style={{marginTop:'1cm'}}>
           
            <Card  color="dark" inverse  style={{width:'100%'}}>
                <CardHeader className="text-center"><h5>{data.companyname}</h5></CardHeader>
                <CardBody>
                    <hr></hr>
                    <i>
                    {data.requirement}
                    </i>
                    <hr></hr>
                </CardBody>
                <CardFooter className="text-center">
                  
                   <Row>
                    <Col md={4} style={{borderRight:'.1cm solid red'}}>
                        <CardHeader style={{fontWeight:'bold'}}>Place</CardHeader>
                        {data.place}</Col>
                    <Col md={4} style={{borderRight:'.1cm solid red'}}>
                    <CardHeader style={{fontWeight:'bold'}}>Date</CardHeader>
                        {data.date}</Col>
                    <Col md={4} >
                    <CardHeader style={{fontWeight:'bold'}}>Time</CardHeader>
                        {data.time}</Col>
                   </Row>
                   
                </CardFooter>
                <hr></hr>         
                    <div className='text-center my-3'>
                        <Button  style={{marginRight:'.5cm'}}>Update</Button>
                        <Button color="danger">Delete</Button>
                    </div>
             </Card>
             <br></br>
            
            
            

        </div>
    );
}
export default AdminUpdate