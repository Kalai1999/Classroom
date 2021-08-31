import React from 'react';
import Dashboard from './dashboard'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col} from 'react-bootstrap';
import '../Styles/sub.css'
import img1 from '../Images/img1.jpg'
function home(){
    return(
      <div>
          <Dashboard/>
          <Container>
              <Row>
                  <Col>
                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant='top' src={img1}/>
                            <Card.Body>
                            <Card.Text>
                                <p className='sub-title'>
                                    Biology<br/>
                                    XC23457
                                </p>
                            </Card.Text>
                            </Card.Body>
                    </Card>                  
                    </Col>

                    <Col>
                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant='top' src={img1}/>
                            <Card.Body>
                            <Card.Text>
                                <p className='sub-title'>
                                    Biology<br/>
                                    XC23457
                                </p>
                            </Card.Text>
                            </Card.Body>
                    </Card>                  
                    </Col>

                    <Col>
                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant='top' src={img1}/>
                            <Card.Body>
                            <Card.Text>
                                <p className='sub-title'>
                                    Biology<br/>
                                    XC23457
                                </p>
                            </Card.Text>
                            </Card.Body>
                    </Card>                  
                    </Col>
                    <br/><br/><br/><br/><br/>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant='top' src={img1}/>
                            <Card.Body>
                            <Card.Text>
                                <p className='sub-title'>
                                    Biology<br/>
                                    XC23457
                                </p>
                            </Card.Text>
                            </Card.Body>
                    </Card>                  
                    </Col>

              </Row>
          </Container>

      </div>  
    );
}
export default home;