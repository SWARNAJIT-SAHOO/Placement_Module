import { Form } from "reactstrap";
import { Image } from "react-bootstrap";
import HomeImage1 from './HomeImage1.gif'
const HomeImage=()=>{
    return(
        <div  className="text-center ">
                <Image src={HomeImage1} />
            
        </div>
    );
}
export default HomeImage