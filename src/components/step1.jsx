import React, {Component} from 'react';
import {Form, Button, Input, Progress, Select, Row, Col} from "antd";
import CommonComponents from "./CommonComponents"; 
import {Link,withRouter} from "react-router-dom"; 
import { ArrowLeftOutlined } from '@ant-design/icons';

import '../App.css'

class Plan extends Component {

    onFinish = (values) => {
        
        var plan = values.currentTarget.dataset.value;

        console.log(values.currentTarget.dataset.value);

        this.props.healthPlan(values.currentTarget.dataset.value);
        
        console.log("Success: ", plan)

        this.props.history.push("/step2")

    };

    onFinishFailed = (errorInfo) => {
        console.log("Failed: ", errorInfo);
    };

    render() {
        return(
            <div className="card shadow-lg" style={{borderRadius: "25px"}}>
                <Progress percent={10} status="active" showInfo={true} className="pbar" />

                <CommonComponents
          currentStep={this.props.currentStep}
          totalSteps={this.props.totalSteps}
          previousStep={this.props.previousStep}
        />
        

				<div className='d-flex' style={{ minHeight: '50vh' }}>
					<div className='card-body d-xl-flex justify-content-center align-items-center' align='center'>
					<Form
              name="health_insurance_plan"
              className="mywidth"
              onFinish={this.onFinish}
              initialValues={{
                healthPlan: this.props.health_insurance_plan,
              }}
              onFinishFailed={this.onFinishFailed}
            >
              <h3> What type of Health Insurance plan are you looking for?</h3>
              <br />
              <Form.Item
                name="health_insurance_plan"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Select an option ",
                  }
                ]}
              >
                 <Button size="large" name="health_insurance_plan" className="chooseButton" id="ACA PLAN" data-value="ACA Plan" value={"ACA Plan"} onClick={(values) => this.onFinish(values)}>ACA Plan</Button>

              </Form.Item>
            
              {/* <Link to="/step2">  */}
              <Form.Item>
        
               
                {/* <Button type="primary" htmlType="submit" block size="large" 
                
                // onClick= {() => this.props.history.push("/step2")}
                 
                >
            
                
               Next  
                </Button> */}
              
               
              </Form.Item>
            {/* </Link> */}
            </Form>
					</div>
				</div>
            </div>
                
        )
    }
}

export default withRouter(Plan)