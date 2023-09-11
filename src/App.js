import './App.css';
import { Card, Container,Col,Row,Button } from 'reactstrap';
import Listn from './Pages/Listn';
import { BrowserRouter as Router,Route,Routes, Link } from 'react-router-dom';
import Resister from './Pages/Register';
import Login from './Pages/Login';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AdminLogin from './Pages/AdminLogin';
import AdminList from './Pages/AdminList';
import AddPost from './Pages/AddPost';
import AdminUpdate from './Pages/AdminUpdate';
import AdminData from './Pages/AdminData';
import HomeImage from './HomeImage';
import { Fragment } from 'react';
import StudentDashboard from './Pages/StudentDashboard';
function App() {
 
  return (
    // <Container >
     <div><Container>

      <Router>
      <Card className='text-center' color='success' style={{marginTop:'.5cm'}}>
      <h1 style={{color:'white'}}>Welcome To Placement Module</h1>
      </Card>


      <Row>
        <Col md="3">
          {/* <Listn/> */}
        <Routes>
        <Route path='/listn' element={<><Listn/></>} exact/>
          {/* <Route path='/adminlist'
          element={<><AdminList/><Listn/></>} exact/> */}
          <Route path='/adminlist' element={<AdminList/>}></Route>
          <Route path='/addpost' element={<AdminList/>}></Route>
          <Route path='/update' element={<AdminList/>}></Route>
          <Route path='/studentdashboard' element={<Listn/>}></Route>

          </Routes>

        </Col>
        <Col md="6">
          <Routes>
           <Route path='/update' Component={AdminData} exact/>
        <Route path='/addpost' Component={AddPost}></Route>
        <Route path='/studentdashboard' Component={StudentDashboard}></Route>
          </Routes>

        </Col>
      <Col md="3">
        <div className=' my-3' style={{textAlign:'right'}}>
          <Link to='/login'><Button color='success' style={{marginRight:'.5cm'}}>Log-In</Button></Link>
            <Link to='/register'><Button color='warning' >Sign-In</Button></Link>   
          </div>
          
      </Col>


      <Row>
        <Col md={3}></Col>
        <Col md={6}>

        <Routes>
        <Route path='/login' Component={Login}></Route>
          <Route path='/adminlogin' Component={AdminLogin}></Route>
          </Routes>
        </Col>
        <Col md={3}></Col>
      </Row>



      </Row>
      <Row >
        <Col md={2} ></Col>
        <Col md={8}>
        <Routes>
          <Route path='/register' Component={Resister}></Route>
          <Route path='/'  Component={HomeImage} ></Route>
        </Routes>
      </Col >
        <Col md={2}></Col>
      </Row>


      
         
       
        
   
        <br></br>
      </Router>

      <ToastContainer  />
</Container></div>
    
  );
}

export default App;
