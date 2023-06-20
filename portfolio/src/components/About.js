import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { Col, Container, Row } from 'react-bootstrap';
import { Button, Paper, List, ListItemIcon, ListItemButton } from '@mui/material';
import { Download, School} from "@mui/icons-material";
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';



const photo = new URL('./AllImages/f1photos.png', import.meta.url);



export function About() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
 

    return (
        <>
            <div className='text-center'>


                <Box sx={{ width: '100%', typography: 'body1' }} style={{ backgroundColor: '#0a0a0b0d' }}>
                    <h3 className='title1 pt-4'>About</h3>
                    <Container className='p-3'>
                        <Box>
                            <Tab
                                label="About Me"
                                value="1"
                                onClick={(event) => handleChange(event, '1')}
                                sx={{
                                    '&.Mui-selected': {
                                        color: 'primary.main',
                                    },
                                }}
                                className='headings'
                            />
                            <Tab
                                label="Education"
                                value="2"
                                onClick={(event) => handleChange(event, '2')}
                                sx={{
                                    '&.Mui-selected': {
                                        color: 'primary.main',
                                    },
                                }}
                                className='headings'
                            />
                            <Tab
                                label="Achievements"
                                value="3"
                                onClick={(event) => handleChange(event, '3')}
                                sx={{
                                    '&.Mui-selected': {
                                        color: 'primary.main',
                                    },
                                }}
                                className='headings'
                            />
                            {/* <Tab
                label="TechStack"
                value="3"
                onClick={(event) => handleChange(event, '3')}
                sx={{
                  '&.Mui-selected': {
                    color: 'primary.main',
                  },
                }}
                className='heading'
              /> */}
                        </Box>
                    </Container>
                    {value === '1' && (
                        <div>
                            <Container className='mt-4 pb-4'>
                                <Paper className='pb-3' style={{ backgroundColor: '#90671e24' }}>
                                    <Row>
                                        <Col lg={6}>
                                            <div className="">
                                                <img
                                                    src={photo}
                                                    alt='#'
                                                    className="rounded-circle img-fluid"
                                                    style={{ objectFit: "cover" }}
                                                />
                                            </div>
                                        </Col>
                                        <Col lg={5} className='text-center'>
                                            <div className="pt-5 mt-5 d-flex align-items-center">
                                                <p className="para">
                                                    I'm Sumit Rajput, a B.Tech student at IPS Academy, specializing in Java programming. I have a passion for full-stack web development and problem-solving. I am eager to apply my skills and knowledge in a dynamic work environment and contribute to the success of the organization. My ability to learn from mistakes and use them as an opportunity for improvement. I enjoy connecting and expanding my network to learn from others. Additionally, I believe that a person should work on developing their professional skills and learning new things all the time.
                                                </p>
                                            </div>
                                            <div className='pt-2' style={{ paddingRight: 420 }}>
                                                <Paper className='mb-3' style={{ borderColor: 'red', backgroundColor: '#4b1313b3', borderRadius: 12 }}>
                                                    <Button className='text-light '>Cv
                                                        <Download className='ps-1' />
                                                    </Button>
                                                </Paper>
                                                <a href="https://instagram.com/sumitrajput7523?igshid=NGExMmI2YTkyZg==" target="_blank" rel="noopener noreferrer">
                                                    <Instagram className='me-2' style={{color:'black'}}  />
                                                </a>
                                                <a href="https://www.linkedin.com/in/sumit-rajput-4a1021226" target="_blank" rel="noopener noreferrer">
                                                    <LinkedIn className='me-2' style={{color:'black'}}/>
                                                </a>
                                                <a href="https://github.com/DeveloperGitHub8115" target="_blank" rel="noopener noreferrer">
                                                    <GitHub className='me-2' style={{color:'black'}}/>
                                                </a>
                                            </div>
                                        </Col>
                                    </Row>
                                </Paper>
                            </Container>
                        </div>
                    )}
                    {value === '2' && <div>
                        <Container className='mt-3 pb-4'>
                            <Paper className='pb-3 p-3 d-flex justify-content-center' style={{ backgroundColor: '#90671e24' }}>
                                <List sx={{ width: '100%', maxWidth: 360 }} component="nav" aria-labelledby="nested-list-subheader">
                                    <ListItemButton>
                                        <ListItemIcon className="pb-3">
                                            <School />
                                        </ListItemIcon>
                                        <div>
                                            <h6>B-tech in Computer Science</h6>
                                            <h6>IPS Academy, Indore</h6>
                                            <p>2021-2025 || CGPA: 9+</p>
                                        </div>
                                    </ListItemButton>
                                    <ListItemButton>
                                        <ListItemIcon className="pb-3">
                                            <School />
                                        </ListItemIcon>
                                        <div>
                                            <h6>Class 12th</h6>
                                            <h6>MGHS School,Harda</h6>
                                            <p>2020-2021|| Percentage:91.6%</p>
                                        </div>
                                    </ListItemButton>
                                    <ListItemButton>
                                        <ListItemIcon className="pb-3">
                                            <School />
                                        </ListItemIcon>
                                        <div>
                                            <h6>Class 10th</h6>
                                            <h6>GGHS School,Harda</h6>
                                            <p>2018-2019|| Percentage:91%</p>
                                        </div>
                                    </ListItemButton>
                                </List>
                            </Paper>
                        </Container>
                    </div>}
                    {value === '3' && (
                        <div>
                            <Container className='mt-3 pb-4'>
                                <Paper className='pb-3 p-3' style={{ backgroundColor: '#90671e24' }}>
                                    <Timeline position="alternate" >
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined" color="primary" />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <h6 className='heading1'>5+ Projects in Mern Stack</h6>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined" color="secondary" />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <h6 className='heading1'>500+ questions on geeksforgeeks</h6>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined" color='warning' />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <h6 className='heading1'>HackerRank 5⭐ in Java</h6>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined" />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent><h6 className='heading1'>Certification Courses</h6></TimelineContent>
                                        </TimelineItem>
                                    </Timeline>
                                </Paper>
                            </Container>
                        </div>
                    )}

                </Box>
            </div>
        </>
    );
}
