import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import LandingPage from './LandingPage';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './App.css';
import Grid from '@material-ui/core/Grid';
import { Button, Typography, Progress, Row, Col } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';

import Plan from './components/step1';
import TimeCoverage from './components/step2.jsx';
import Income from './components/step3.jsx';
import Gender from './components/step4.jsx';
import Birth from './components/step5.jsx';
import Tabacco from './components/step6.jsx';
import AddUser from './components/step7.jsx';
import Weight from './components/step8.jsx';
import Living from './components/step9.jsx';
import Info from './components/step10.jsx';
import Info2 from './components/step11.jsx';
import ThankYou from './components/ThankYou';

class App extends Component {

	state = {
		route: '/',
		routes: ['/step1', '/step2', '/step3', '/step4', '/step5', '/step6', '/step7', '/step8', '/step9', '/step10', '/step11', '/thank-you'],
		postData: {
			//extra entries
			lp_campaign_id: '612cfa49ce7ac ',
			lp_campaign_key: 'BFMw2QrjkNzhbZp6yD8v ',
			lp_s1: '12',
			lp_s2: '13',
			landing_Page: 'usahealthquotes.com',
			TCPA_Consent: 'Yes',
			TCPA_Language:
				'By clicking Get My Quote I provide my electronic signature and express written consent to telemarketing calls, text messages, emails, and postal mail from this Web site, our marketing and re-marketing network, and up to eight insurance companies or their affiliates or representatives at the phone number (including wireless number), email address, and postal address provided by me. I consent to calls and text messages transmitting insurance quotes, or seeking related additional information from me, using an Automatic Telephone Dialing System or prerecorded or artificial voices. I consent that my signature is not a condition of purchasing any property, goods, or services and that I may revoke my consent at any time.',
			trusted_form_cert_id: '',
			jornaya_lead_id: '',
			// Redirect_URL: "",
			IP_Address: '',
			user_agent: navigator.userAgent,
			//s1 form fields
			desired_coverage: '',
			//S2 form fields
			gender: '',
			dob: '',
			address: '',
			city: '',
			state: '',
			zip_code: '',
			first_name: '',
			last_name: '',
			email_address: '',
			phone_home: '',
			health_insurance_plan: 'ACA Plan',
			coverage_time: '',
			household_income: '',
			tobacco_use: '',
			additional_insured: '',
			weight: '',
			household_size: '2',
			pre_existing_conditions: 'false',
			landing_page: 'usahealthquotes.com'

		},
	};

	callMediaAlpha = () => {

		var tempArray = {
       zip: this.state.zip_code,
}

		window.MediaAlphaExchange = {    
			"data": {       
				  "zip": tempArray.zip,   
			  },   
			"placement_id": "YiPFAJc_r0i9fsZr0uP7vvicsinK3Q",    
			"sub_1": "test sub id",    
			 "type": "ad_unit",   
			   "version": 17 }; 
	  
	  window.MediaAlphaExchange__load('mediaalpha_placeholder'); 
		
	   }


	  UNSAFE_componentWillUpdate  = () => {
		console.log(this.state.postData);
	  };
	
	copyValuesToPostData2 = () => {
		var tempArray = {
			zip: this.state.postData.zip_code,
		};
		this.setState({ postData2: tempArray });
		// var MediaAlphaExchange = { 
		// 	"data": {
		// 	   "zip": "",
		// 	},
		// 	"placement_id": "YiPFAJc_r0i9fsZr0uP7vvicsinK3Q",
		// 	"sub_1": "test sub id",
		// 	"type": "ad_unit",
		// 	"version": 17
		//  };
		 console.log("SetMA");
//MediaAlphaExchange__load('mediaalpha_placeholder');
		return this.state.postData2;
	};


	changeRoute = () => {
		this.setState({
			route: '',
		})
	}

	render() {
		return this.state.route == '/' && this.state.routes.indexOf(window.location.pathname) === -1 ? (
			<Route exact path='/' render={(props) => <LandingPage changeRoute={this.changeRoute} {...props} />} />
		) : (
			<div
				className='container-fluid'
				style={{
					minHeight: '100vh',
					backgroundColor: '#f7f7f7',
					overflow: 'hidden',
				}}>

				<header className='navbar navbar-expand flex-column flex-md-row bd-navbar'>
					<div className='container'>
						<img
							// @ts-ignore
							src={require('./Assets/usahq.png')}
							className='logo'
							alt=''
						/>
						<ul className='nav nav-fill'>
							<li className='nav-item'>
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
							</li>
						</ul>
					</div>
				</header>

				<div className='container'>
					<div className='row'>
						<div className='col'>
							<Switch>
								{/* <Route exact path='/step1'>
									<Plan
										props={this.props}

										healthPlan={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													jornaya_lead_id: document.getElementById('leadid_token').value, 
													trusted_form_cert_id: document.getElementById('trusted_form_cert_id_0').value ,
													health_insurance_plan: v,
												},
											});
										}}
									/>
								</Route> */}

								<Route exact path='/step2'>
									<TimeCoverage

										time={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													jornaya_lead_id: document.getElementById('leadid_token').value, 
													trusted_form_cert_id: document.getElementById('trusted_form_cert_id_0').value ,
													coverage_time: v,
												},
											});
										}}
									/>
								</Route>

								<Route exact path='/step3'>
									<Income
										money={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													household_income: v,
												},
											});
										}}
									/>
								</Route>

								<Route exact path='/step4'>

									<Gender
										chooseGender={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													gender: v,
												},
											});
										}}
									/>
								</Route>

								<Route exact path='/step5'>
									<Birth

										setBirth={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													dob: v,
												},
											});
										}}
									/>
								</Route>

								<Route exact path='/step6'>
									<Tabacco
										tabaccoUse={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													tobacco_use: v,
												},
											});
										}}
									/>
								</Route>

								<Route exact path='/step7'>
									<AddUser
										addSomeone={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													additional_insured: v,
												},
											});
										}}
									/>
								</Route>

								<Route exact path='/step8'>
									<Weight
										userWeight={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													weight: v,

												},
											});
										}}
									/>
								</Route>

								<Route exact path='/step9'>
									<Living
										address={this.state.postData.address}
										city={this.state.postData.city}
										zip_code={this.state.postData.zip_code}
										state={this.state.postData.state}
										setAddress={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													address: v,
												},
											});
										}}
										setCity={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													city: v,
												},
											});
										}}

										setState={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													state: v,
												}
											});
										}}

										setZip={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													zip_code: v,
												}
											});
										}}

									/>
								</Route>

								<Route exact path="/step10">
									<Info
										first_name={this.state.postData.first_name}
										last_name={this.state.postData.last_name}

										setFName={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													first_name: v,
												},
											});
										}}
										setLName={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													last_name: v,
												},
											});
										}}
									/>
								</Route>

								<Route exact path='/step11'>
									<Info2

										email={this.state.postData.email_address}
										phone={this.state.postData.phone_home}

										callMediaAlpha={this.callMediaAlpha}


										setEmail={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													email_address: v,
												},
											});
										}}
										setPhone={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													phone_home: v,
												},
											});
										}}
										postData={this.state.postData}

									/>
								</Route>

								<Route exact path='/thank-you'>
								<ThankYou 
									postData2={this.state.postData} 
									/>
								</Route>


							</Switch>

							{/* </StepWizard> */}
						</div>
					</div>
				</div>

			</div>
		)
	}
}


export default withRouter(App);