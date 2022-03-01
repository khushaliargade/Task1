import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

//import Navbar from './component/Navbar';
import Home from './component/Home';
import Products from './component/Products';
import Title from './component/Title';

import {
  Card, CardBody, CardImg, CardTitle, Col, CardText, CardSubtitle, CardGroup, Button, Row
} from "reactstrap"

function App() {
  return (
    <>

     

      <Row>
        <Col md="5">
          <Home /> </Col>
      
        <Col md="5">
          <Title />
        </Col>
      </Row>



    </>
  );
}

export default App;
