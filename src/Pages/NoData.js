import { Button, Card, CardFooter, CardHeader, Row,Col } from "reactstrap";
import Listn from "./Listn";
import { Link } from "react-router-dom";
const NoData=()=>{
    return(
        <div>
            <Card  color="dark " inverse style={{width:'50%'}}>
                <CardHeader tag='h2' className="text-center">No Data Found in Database !!</CardHeader>
                <CardFooter>
                    <Row>
                        <Col md={5}></Col>
                        <Col md={4}>
                            <Link to='/AdminList'>
                    <Button color='warning' >Back</Button>
                            </Link>
                        </Col>
                        <Col md={4}></Col>
                    </Row>
                    </CardFooter>
            </Card>
        </div>
    );
}
export default NoData