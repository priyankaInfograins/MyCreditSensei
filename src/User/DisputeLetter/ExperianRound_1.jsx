import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../asset/image/logo.png';
import { Link } from 'react-router-dom'


export default function RoundFirst() {
    return (
        <>
            <section >
                <Container>
                    <Row>
                        <Col>
                            <div className='roundFirst'>
                                <h2>Great Job!</h2>
                                <img src={logo} className="logo" />
                                <p>Your <b>Experian Round 1 </b>dispute letter has been emailed  to <b>alonzo@creditsenei.com</b></p>

                                <div className='line'>------------</div>
                                <p>What would you like to do next?</p>
                                <Link to="/equifaxdispute" type="button" className='disputebtn'>CREATE EQUIFAX DISPUTE</Link>
                                <Link to="/transuniondispute" type="button" className='disputebtn1'>CREATE TRANSUNION DISPUTE</Link>
                                <Link to="/useHome" type="button" className='disputebtn2'>GO TO DASHBOARD</Link>

                            </div>

                        </Col>
                    </Row>

                </Container>
            </section>




        </>
    )
}
