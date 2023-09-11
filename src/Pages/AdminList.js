import React from "react";
import { ListGroup, ListGroupItem, ListGroupItemHeading } from "reactstrap";
import { Link } from "react-router-dom";

const AdminList=()=>{
    return(
        < >
            <ListGroup  >
                <ListGroupItem color="success" >
                    <ListGroupItemHeading >Admin</ListGroupItemHeading>
                </ListGroupItem>
                <ListGroupItem color="success">
                <Link className="list-group-item list-group-item-action"   to="/addpost" tag='a' >Add New Post</Link></ListGroupItem>
                <ListGroupItem color="success">
                <Link className="list-group-item list-group-item-action"   to="/update" tag='a' >Update Placement </Link>
                </ListGroupItem>
                <ListGroupItem color="success">
                <Link className="list-group-item list-group-item-action"   to="#" tag='a' >Placement List</Link>
                </ListGroupItem>     
            </ListGroup>
            
        </>
    );
}
export default AdminList