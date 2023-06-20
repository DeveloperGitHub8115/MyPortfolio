import { Box, Button, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { About } from "./About";
import { Projects } from "./Projects";
import { Skill } from "./skills";
import { Contact } from "./Contact";
import { Service } from "./Service";
import { useNavigate } from "react-router-dom";
const photo = new URL('./AllImages/homeimg3.png', import.meta.url);
export function Home() {
  const navigate = useNavigate();
  const [developer, setDeveloper] = useState("Web Developer");

  useEffect(() => {
    const words = ["Java Developer", "Web Developer", "Quick Learner"];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % words.length;
      setDeveloper(words[currentIndex]);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <div className="pt-5 pb-5" style={{ backgroundColor: '#1e1e450a' }}>
        <Container className="d-flex justify-content-center align-items-center">
          <Row>
            <Col lg={6}>
              <div>
                <Box className="ms-3 pt-5">
                  <h5 className="heading pt-5" style={{ color: '#cd853f96' }}>Hello Welcome</h5>
                  <h1 className='head' style={{ color: 'peru' }}>Sumit Rajput</h1>
                  <h3 style={{ color: 'rgb(98, 37, 37)' }}>{developer}</h3>
                  <Button className="text-center me-2" onClick={()=>navigate('/contact')}>
                    <Paper elevation={3} style={{ backgroundColor: '#ffc10729' }} className="p-1">

                      Hello Say

                    </Paper>
                  </Button>

                </Box>
              </div>
            </Col>
            <Col lg={6}>
              <div>
                <img
                  src={photo}
                 alt="#"
                  className="rounded-circle img-fluid"
                  style={{ objectFit: "cover", boxShadow: "5px 5px 5px 5px rgba(0, 0, 0, 0)"}}
               
                />

              </div>

            </Col>
          </Row>



        </Container>
      </div>
      <About />
      <Skill />
      <Projects />
      <Service />
      <Contact />
      <div style={{backgroundColor:'grey'}}>
        <Container className='d-flex justify-content-center align-items-center p-3'>

          <h6 className='text-light'>
            @2023  Developed by SUMIT RAJPUT.All rights reserved.
          </h6>




        </Container>
      </div>

    </>
  )
}