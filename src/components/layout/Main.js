import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer/Footer';
import Header from '../pages/Shared/Header';
import LeftSideNav from '../pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../pages/Shared/rightSideNav/RightSideNav';

const Main = () => {
    return (

        <div>
            <Header></Header>
            <div className='mt-5'>
                <Container>
                    <Row>
                        <Col className='d-none d-lg-block' lg='2'>
                            <LeftSideNav></LeftSideNav>
                        </Col>
                        <Col lg='7'>
                            <Outlet></Outlet>
                        </Col>
                        <Col lg='3'>
                            <RightSideNav></RightSideNav>
                        </Col>
                    </Row>
                </Container>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;