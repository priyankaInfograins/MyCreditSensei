import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import People from "../asset/image/people.jpg"
import { FaAlignCenter, FaCheckCircle } from 'react-icons/fa';
import SmartModule from '../Component/Home/SmartModule';
import CreditScore from '../Component/Home/CreditScore';
import ContactUs from '../Component/Home/ContactUs';
import Header from '../Common/Header';
import Footer from '../Common/Footer'
import aboutUs from "../asset/image/about_us.jpg"
import sliderImg1 from "../asset/image/Sliderimg1.jpg"
import { Link } from 'react-router-dom'


export default function Home() {

    
    
  

    return (
        <>
            <Header />

            <section className='landing_page'>
                <div className='hero-text'>
                    <h1 className=''>Repair all 3 Credit bureaus.<br /> Increase your Credit Score.<br /> Easily do it yourself</h1>
                    <Link to="/createAccount" className='navmenubutton'>
                        <button className='btn homebutton'>GET STARTED</button>
                    </Link>
                </div>
                <div className="overlay"></div>
            </section>

            <section className='about_us'>
                <Container>
                    <Row>
                        <Col lg={6} md={6} >
                            <Image className='aboutusImg' src={aboutUs}></Image>
                        </Col>
                        <Col lg={6} md={6} >
                            <div className='aboutus_text'>
                                {/* <h5>About us</h5> */}
                                {/* <div className='bb1'></div>
                                <div className='bb2'></div> */}
                                <h2>We Help Clients To Get Success</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis officia temporibus ut consequuntur, illum cum porro. Illo amet quaerat voluptatum ipsam. Ipsa nihil dicta rem impedit corporis explicabo. Similique, laborum.<br />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, doloremque unde nisi pariatur quasi dolores odit, reprehenderit magnam dicta rerum totam facere nulla ipsam laboriosam vero placeat! Tempore, veniam odio?</p>
                            
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>

            <CreditScore />
            <SmartModule />

            <section className='home_module' >
                <Container>
                    <Row>
                        <Col lg={12} md={12}>
                            <div className='modul_header'>
                                <h4 className='modul_title'>Dispute any account on all 3 bureaus</h4>
                                <p className='modul_text'>My Credit Sensei can help you delete these accounts from Experian, Equifax, and TransUnion:</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} md={12} >
                            <div className='modul_content'>
                                <ul className='account_feature'>
                                    <li ><FaCheckCircle className='modul_check' /><span>Late Payments</span></li>
                                    <li><FaCheckCircle className='modul_check' /><span>Repossessions</span> </li>
                                    <li><FaCheckCircle className='modul_check' /><span>Charge Offs</span></li>
                                    <li><FaCheckCircle className='modul_check' /><span>Foreclosures</span></li>
                                    <li style={{ marginLeft: "-9px" }}><FaCheckCircle className='modul_check' /><span>Collections </span></li>
                                    <li><FaCheckCircle className='modul_check' /><span>Judgments</span></li>
                                    <li><FaCheckCircle className='modul_check' /><span>Inquiries</span></li>
                                    <li><FaCheckCircle className='modul_check' /><span>Bankruptcy</span></li>
                                </ul>
                                <p className='modul_text '> No need to create an account with each credit bureau. My Credit Sensei brings all three <br /> credit bureaus to you.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <ContactUs />
            <Footer />
        </>
    )
}
