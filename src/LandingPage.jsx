import { Button, Card, Col, Collapse, Layout, Row, Typography, Form,  Input } from 'antd';
import Grid from '@material-ui/core/Grid';

import logo from './Assets/usahq.png';
import { PhoneOutlined } from '@ant-design/icons';

import best from './Assets/best.png';
import budget from './Assets/budget.png';
import { ReactComponent as YourSvg } from './Assets/svg_2.svg';
import Meta from 'antd/es/card/Meta';
import './LandingPage.css';
import { useHistory } from 'react-router-dom';
import {Link} from "react-router-dom"; 

import React from 'react';

function LandingPage(props) {
	const history = useHistory();
	const { Header, Footer, Content } = Layout;
	const { Panel } = Collapse;

	function zipCheck(){

		const zip = document.getElementById("zip").value; 
		if (zip.length > 5) {
			alert("please enter a correct zip") 
		}
		else{

		}
	}
	console.log(props);
	return (
		<div className='landing-page'>
			<Layout>
				<Header>
					<Row>
						<Col xs={{ span: 24 }} lg={{ span: 12 }}>
							<a>
								<img src={logo} width='181' alt='logo' />
							</a>
						</Col>
						<Col xs={{ span: 12 }} lg={{ span: 12 }} className='text-right'>
						<Button
									type='primary'
									size='middle'
									icon={
										<PhoneOutlined
											// @ts-ignore
											rotate='90'
										/>
									}
									href={'tel:+18885671448'}>
									888-567-1448 
								</Button>
								TTY: 711 
						</Col>
					</Row>
				</Header>
				<Content>
				<Content>
                        <div className="container3 ">
					
						<h1 className="header"> Health Insurance for Individuals and Family</h1>
                        <div className="inputField">
							
                        <div className='text'>
                                <h1 className='lPHeading text-center'>
                                Compare Multiple Health Insurance Quotes 
                                </h1>

                              
                            </div>
                            <div className="input">

						
                            <Input className="inputArea" autoFocus={true} placeholder="Enter Your Zipcode" required={true} maxLength={5}  type="number"  onKeyPress="if(this.value.length==5) return false;"  />                           


					<Link to={"/step1"}>
                            <Button  className="button" >
                                Get My Free Quote
                            </Button>
							</Link>
						
                            </div>
                        </div>
                        </div>
                    </Content>
					<section className='section-two'>
						<div className='section-two-container'>
							<Row>
								<Col span={24}>
									<p className='cl01_title'>
										It's Easy 1-2-3
										<br />
									</p>
								</Col>
							</Row>
							{/* <div className='section-two-imgs '>
							<Row gutter={16}>
								<Col  xs={24} sm={24} md={6} lg={6} xl={6} className="column">
									<img src={aet} className="logoSize" />
								</Col>
								<Col  xs={24} sm={24} md={6} lg={6} xl={6}  className="column">
									<img src={humana} className="logoSize"/>
								</Col>
								<Col  xs={24} sm={24} md={6} lg={6} xl={6}  className="column">
									<img src={kra} className="logoSize" />
								</Col>
								<Col  xs={24} sm={24} md={6} lg={6} xl={6}  className="column">
									<img src={uhs} className="logoSize aig"/>
								</Col>
							</Row>
							
							</div> */}
						</div>
					</section>
					
					
					<section className='container my-5'>
						<Row>
							
						<Col xs={{ span: 24 }} lg={{ span: 8 }}>
										<Card className=' card shadow-sm' cover={<img alt='example' src={budget} />}>
											<Meta title='Affordable Prices' description='no matter your budget we can find the policy right for you and your family.' />
										</Card>

									</Col>

									<Col xs={{ span: 24 }} lg={{ span: 8 }}>
										<Card  className='card shadow-sm' cover={<img alt='example' src={best} />}>
											<Meta title='No Medical Exam' description='Simple Application - Free Quote—Apply in Minutes' />
										</Card>
									</Col>

									<Col xs={{ span: 24 }} lg={{ span: 8 }}>
										<Card  className='card shadow-sm' cover={<YourSvg/>}>
										<Meta title='You have options' description='Getting a quote across multiple insurance companies empowers you to know what works best for you.' />
										</Card>
									</Col>
						</Row>

						<div className="sc-1wvmd16-0 eKGJdd"><div><h3 className="speak">Speak with a Medicare Supplement Agent</h3> <p className="blockPhone"><svg xmlns="http://www.w3.org/2000/svg" fill="#205bb9" viewBox="0 0 22.8 22.8" className="sc-1pqlmik-0 hRpSpx"><title>phone</title><path d="M5,1A1,1,0,0,1,6.35,1l5.74,5.74a1,1,0,0,1,0,1.41L9.56,10.66l1.93,2.1,2.09,1.93,2.54-2.53a1,1,0,0,1,1.41,0l5.74,5.74a1,1,0,0,1,0,1.39l-.73-.68-5.75-5.74-3.21,3.21-2.83-2.61L8.17,10.64l3.21-3.21L5.64,1.68ZM7.05,17.19C2.49,12.57.67,6.75,2.43,4.89S5.64,1.68,5.64,1.68L5,1h0L4.89,1,4.7,1.2,4,1.88c-.59.57-1.4,1.39-2.29,2.33A3.9,3.9,0,0,0,.77,6.94a10.05,10.05,0,0,0,.66,3.4A21.44,21.44,0,0,0,6.34,17.9h0a21.44,21.44,0,0,0,7.56,4.91,10.05,10.05,0,0,0,3.4.66A4,4,0,0,0,20,22.55c.94-.89,1.75-1.71,2.33-2.3l.68-.7.18-.19.05-.05v0h0l-.73-.68s-1.36,1.45-3.22,3.21S11.68,21.75,7.05,17.19Z" transform="translate(-0.77 -0.68)" fill="#205bb9" fillRule="evenodd" /><path d="M8.17,10.64l3.21-3.21L5.64,1.68S4.19,3,2.43,4.89s.06,7.68,4.62,12.3,10.45,6.39,12.3,4.63,3.22-3.21,3.22-3.21l-5.75-5.74-3.21,3.21-2.83-2.62Zm8.65,3.64-2.5,2.5a1,1,0,0,1-1.39,0L10.1,14.2,10,14.14l-2.6-2.83a1,1,0,0,1,0-1.38L10,7.43,5.62,3.08l-.23.23C4.82,3.87,4,4.66,3.16,5.58A2,2,0,0,0,2.77,7a8.27,8.27,0,0,0,.54,2.72,19.67,19.67,0,0,0,4.45,6.82,19.39,19.39,0,0,0,6.82,4.44,8.27,8.27,0,0,0,2.71.55,2,2,0,0,0,1.38-.39c.92-.87,1.71-1.66,2.27-2.24l.23-.23Z" transform="translate(-0.77 -0.68)" fill="#205bb9" fillRule="evenodd" /></svg>
						
						<a className="gtm-identifier-phone">888-567-1448</a> TTYL:711</p></div></div>

					</section>
					
					
				
				</Content>
				<Footer className='footer'>
					<div className='footer-container'>
						<div className='div-block-58'>
					
						<Grid container xs={12} align='left' style={{ justifyContent: 'left' }}>
		
						<Grid container xs={10} style={{ paddingBottom: '1rem', marginTop: '1rem' }}>
							<p style={{ fontSize: '12px', color: 'white', textAlign: 'center'}}>This is a commercial site designed for the solicitation of insurance from selected health insurance carriers. It is not an insurer, an insurance agency, or a medical provider. Insurance agency services may be provided by a partner licensed agency. This site is not maintained by or affiliated with the federal government’s Health Insurance Marketplace website or any state government health insurance marketplace</p> 
						<Grid item lg={3} xs={12} style={{ alignSelf: 'flex-end' }}>
							<Typography style={{ fontSize: '15px', color: 'rgb(166, 166, 166)' }}>2021 Cover My Expense</Typography>
							<Typography style={{fontSize: '12px', color: 'rgb(166, 166, 166)' }}>Powered By Quotehound</Typography>
						</Grid>
						<Grid item lg={12} xs={12} />
						<Grid container lg={12} xs={12}>
							
						<Grid item lg={12} xs={12} style={{ alignSelf: 'left' }}>
								<Typography style={{ fontSize: '11px', color: 'rgb(166, 166, 166)' }}>
									<a
										href='https://www.quotehound.com/dont-sell-my-info'
										// @ts-ignore
										style={{ color: 'rgb(166,166,166)', fontWeight: '400' }}>
											Do Not Sell
									</a>
								</Typography>
							</Grid>
							<Grid item lg={12} xs={12} style={{ alignSelf: 'left'}}>
								<Typography style={{ fontSize: '11px', color: 'rgb(166, 166, 166)' }}>
									<a
										href='https://quotehound.com/privacy-policy'
										// @ts-ignore
										style={{ color: 'rgb(166,166,166)', fontWeight: '400' }}>
										Privacy Policy
									</a>
								</Typography>
							</Grid>
							<Grid item lg={12} xs={12} style={{ alignSelf: 'left'}}>
								<Typography
									style={{
										fontSize: '11px',
										color: 'rgb(166, 166, 166)',
										fontWeight: 600,
									}}>
									<a
										href='https://quotehound.com/terms-conditions'
										// @ts-ignore
										style={{ color: 'rgb(166,166,166)', fontWeight: '400' }}>
										Terms & Conditions
									</a>
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
						</div>
					</div>
				</Footer>
			</Layout>
		</div>
	);
}

export default LandingPage;