
import { Button, Paper } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const photo = new URL('./AllImages/hiremeimg2.png', import.meta.url);
export function Service() {
     const navigate=useNavigate();
    return (
        <>
            <div className='text-center pt-5 pb-4' style={{backgroundColor:'#90671e24'}}>
            <h1 className="title1">Hire Me</h1>
                 <p className="pb-2 paragrap">For your Projects</p>       
                <Container className='mt-4 pb-4 d-flex justify-content-center'>
              
                    <Row>
                        <Col lg={6} className='d-flex justify-content-center'>
                            <div className="pt-3">
                                <img
                                    src={photo}
                                    alt='#'
                                    className="img-fluid"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>

                        </Col>
                        <Col lg={6} className='d-flex justify-content-center align-items-center'>
                            <div className='ms-5 mt-2 p-3 text-center' style={{ width: 400, backgroundColor: 'whitesmoke', borderColor: 'black', border: '4px solid #0a461b', borderBottomRightRadius: '90px'  }}>
                                <p className="para" style={{color:'black'}}>
                                Hello, I'm Sumit Rajput, a passionate web developer actively seeking new internships.
                                 With a strong foundation in web technologies and a track record of successful projects, 
                                 I'm excited to contribute to your team.
                                 <p>
                                 Ready to bring your web project to life? 
                                 Let's connect! Reach out to me at <span className='text-dark'>rajputsumit6859@gmail.com</span> to discuss how I can contribute to your team's success.
                                 </p>

                                </p>
                                <Button className='btn btn-sm' style={{position:'relative',right:'150px'}} onClick={()=>navigate('/contact')}>
                                <Paper className='p-2' style={{ borderColor: 'red', backgroundColor: '#4b1313b3', borderRadius: 12 }}>
                                Hire Me
                                   </Paper>
                                       </Button>
                          
                            </div>




                        </Col>

                    </Row>
                </Container>
            </div>

        </>
    )
}