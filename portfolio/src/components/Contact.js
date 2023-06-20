
import { useRef} from "react";
import { Button, TextField } from "@mui/material";
import { Col, Container, Form, Row } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import { Email, Send } from "@mui/icons-material";


export function Contact(){
    const form =useRef();
 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cagdzkf', 'template_ei7h3on', form.current, '7cekdobyTvRbEVTk7')
      .then((result) => {
          console.log(result.text);
          alert("Email sent successfully");
      }, (error) => {
          console.log(error.text);
      });
       e.target.reset();
  };
     return(
         <>
    
           <div className="div_project pb-5">
        <h3 className="text-center title1">Contact Me</h3>
        <h5 className="text-center head_contact pb-2">Get In Touch With Me</h5>
        <Container className="d-flex justify-content-center">
          <div className="contact_container p-3 pb-3 mt-2">
          <Form    onSubmit={sendEmail} ref={form}>
              <Row className="d-flex justify-content-center">
                <Col lg={6} className="mb-3">
                  <TextField
                    label="Name"
                    name="name"
                    type="text"
                    variant="standard"
                  
                    fullWidth
                    sx={{ marginBottom: 0 }}
               
                  />
                </Col>
                <Col lg={6} className="mb-3">
                  <TextField
                    label="Number"
                    type="number"
                    variant="standard"
                    name="number"
                
                    fullWidth
                    sx={{ marginBottom: 0 }}
                 
                  />
                </Col>
                <Col lg={6} className="mb-3">
                  <TextField
                    label="Email"
                    type="email"
                    name="user_email"
                    variant="standard"
                    fullWidth
                    sx={{ marginBottom: 0 }}
             
                  />
                </Col>
                <Col lg={6} className="mb-3">
                  <TextField
                    label="Subject"
                    type="text"
                    name="subject"
                    variant="standard"
                    fullWidth
                    sx={{ marginBottom: 0 }}
               
                  />
                </Col>
                <Col lg={6} className="mb-3">
                  <TextField
                    label="Message"
                    variant="standard"
                    name="message"
                    type="text"
                    fullWidth
           
                  />
                </Col>
                <Col lg={6}></Col>
              </Row>
              <Button type="submit"
            
                variant="light"
                style={{ backgroundColor: "lightblue" }}
                 
              >
                Send
                <Send className="p-1" color="blue" />
              </Button>
              <p className="pt-2" style={{ color: "grey" }}>
                <Email style={{ color: "burlywood" }} />
                rajputsumit6859@gmail.com
              </p>
              {/* {isEmailSent && (
                <p className="pt-2" style={{ color: "green" }}>
                  Email sent successfully!
                </p>
              )} */}
            </Form>
          </div>
        </Container>
      </div>
        
        
        </>
     )
}