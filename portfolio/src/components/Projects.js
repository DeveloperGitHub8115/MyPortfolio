import { GitHub, Language } from "@mui/icons-material";
import {Card, CardContent, Paper, Typography } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";

export function Projects() {
    return (
        <>
            <div className="pt-5 pb-5" style={{ backgroundColor: '#0a0a0b0d' }}>
                <h1 className="title1 text-center pb-2">My Projects</h1>
                <Container className="d-flex justify-content-center align-items-center pb-5">


                    <Row>
                        <Col lg={4} className="d-flex justify-content-center p-2">
                            <Paper elevation={6} >
                                <Card sx={{ maxWidth: 345, height: "100%" }} className="card_data">
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" className="card_head">
                                            College- Website
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" className="card_content">
                                            A college website that allows users to display data of admitted students and their details,
                                            as well as information about placements, courses offered, and faculty profiles.
                                        </Typography>
                                        <h6 className="pt-2">Technology:</h6>
                                        <Typography className="card_content">
                                            <p>ReactJS, ExpressJS, MongoDB, MUI, CSS, API</p>
                                        </Typography>
                                        <Language className="ms-1" color="success" />
                                        <a href="https://github.com/DeveloperGitHub8115" target="_blank" rel="noopener noreferrer">
                                            <GitHub className='ms-3' style={{ color: 'black', size: 450 }} />
                                        </a>
                                    </CardContent>

                                </Card>
                            </Paper>
                        </Col>
                        <Col lg={4} className="d-flex justify-content-center p-2">
                            <Paper elevation={6}>
                                <Card sx={{ maxWidth: 345, height: "100%" }} className="card_data">
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" className="card_head">
                                            Agriculture- Website
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" className="card_content">
                                            A farming website that provides information about crops, pesticides, new technologies, and utilizes
                                            weather API to check weather conditions. It also includes data storage and updates for cold storage.
                                        </Typography>
                                        <h6 className="pt-2">Technology:</h6>
                                        <Typography className="card_content">
                                            <p>ReactJS, ExpressJS, MongoDB, MUI, CSS, API</p>
                                        </Typography>
                                        <Language className="ms-1" color="success" />
                                        <a href="https://github.com/DeveloperGitHub8115" target="_blank" rel="noopener noreferrer">
                                            <GitHub className='ms-3' style={{ color: 'black', size: 450 }} />
                                        </a>
                                    </CardContent>
                                </Card>
                            </Paper>
                        </Col>
                        <Col lg={4} className="d-flex justify-content-center p-2">
                            <Paper elevation={6}>
                                <Card sx={{ maxWidth: 345, height: "100%" }} className="card_data">
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" className="card_head">
                                            EasyShop-Website
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" className="card_content">
                                            EasyShop is an e-commerce website that allows you to easily browse and purchase
                                            a wide range of products. Whether you're looking for electronics, fashion, home goods,
                                            or anything in between, EasyShop has everything you need to shop online conveniently.
                                        </Typography>
                                        <h6 className="pt-2">Technology:</h6>
                                        <Typography className="card_content">
                                            <p>ReactJS, ExpressJS, MongoDB, MUI, CSS</p>
                                        </Typography>
                                        <Language className="ms-1" color="success" />
                                        <a href="https://github.com/DeveloperGitHub8115" target="_blank" rel="noopener noreferrer">
                                            <GitHub className='ms-3' style={{ color: 'black', size: 450 }} />
                                        </a>
                                    </CardContent>

                                </Card>
                            </Paper>
                        </Col>
                    </Row>

                </Container>
            </div>
        </>
    )
}
