import { Paper } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
export function Skill(){
       return(
          <>
                <div className="text-center pt-4 pb-4" style={{backgroundColor:'#2f6e5b3d'}}>
                <h1 className="title1">SKILLS</h1>
                 <p className="pb-2 paragrap">My Top Skills</p>
                      <Container >
                             <Row> 
                             <Col lg={3} md={6} className="p-2">
                                 <Paper elevation={12} className="pappers_card" style={{backgroundColor:'#d9ccf2'}}>
                                      <p className="pappers_head">Programming</p>
                                    <Timeline position="alternate">
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined" color="primary" />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <h6 className='heading1'>C/C++</h6>
                                                <p className="subpara">Proficient</p>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined" color="secondary" />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <h6 className='heading1'>Java</h6>
                                                <p className="subpara">Experienced</p>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined" color='warning' />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                            <h6 className='heading1'>Object Oriented</h6>
                                                <p className="subpara">Proficient</p>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined" />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                            <h6 className='heading1'>Data Structure</h6>
                                                <p className="subpara">Proficient</p></TimelineContent>
                                        </TimelineItem>
                                    </Timeline>
                              

                                    </Paper>
                                 </Col>
                                 <Col lg={3} md={6} className="p-2">
                                 <Paper elevation={12} className="pappers_card pb-4" style={{backgroundColor:'#d0e7f2'}}>
                                      <p className="pappers_head">Fronted</p>
                                    <Timeline position="alternate">
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined" color="primary" />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <h6 className='heading1'>HTML+CSS</h6>
                                                <p className="subpara">Proficient</p>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined" color="secondary" />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <h6 className='heading1'>BSS5+MUi</h6>
                                                <p className="subpara">Proficient</p>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined" color='warning' />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                            <h6 className='heading1'>JavaScript</h6>
                                                <p className="subpara">Proficient</p>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined" />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                            <h6 className='heading1'>ReactJs</h6>
                                                <p className="subpara">Experienced</p></TimelineContent>
                                        </TimelineItem>
                                    </Timeline>
                              

                                    </Paper>
                                 </Col>
                                 <Col lg={3} md={6} className="p-2">
                                 <Paper elevation={12} className="pappers_card pb-4" style={{backgroundColor:'#f3f0d7'}}>
                                      <p className="pappers_head">Backend</p>
                                    <Timeline position="alternate">
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined" color="primary" />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <h6 className='heading1'>JavaScript/Ajax</h6>
                                                <p className="subpara">Proficient</p>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined" color="secondary" />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <h6 className='heading1'>NodeJs</h6>
                                                <p className="subpara">Proficient</p>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined" color='warning' />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                            <h6 className='heading1'>ExpressJs</h6>
                                                <p className="subpara">Proficient</p>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined" />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                            <h6 className='heading1'>RestApi</h6>
                                                <p className="subpara">Proficient</p></TimelineContent>
                                        </TimelineItem>
                                    </Timeline>
                              

                                    </Paper>
                                 </Col>  
                                 <Col lg={3} md={6} className="p-2">
                                 <Paper elevation={12} className="pappers_card pb-4" style={{backgroundColor:'#ffeae7'}}>
                                      <p className="pappers_head">DataBase + Tools</p>
                                    <Timeline position="alternate">
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined" color="primary" />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <h6 className='heading1'>MongoDb</h6>
                                                <p className="subpara">Proficient</p>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined" color="secondary" />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <h6 className='heading1'>Mysql</h6>
                                                <p className="subpara">Experienced</p>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined" color='warning' />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                            <h6 className='heading1'>Git</h6>
                                                <p className="subpara">Proficient</p>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined" />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                            <h6 className='heading1'>GitHub</h6>
                                                <p className="subpara">Proficient</p></TimelineContent>
                                        </TimelineItem>
                                    </Timeline>
                              

                                    </Paper>
                                 </Col>  

                             </Row>
                      </Container>
                </div>
          
          
          
          </>
       )
}