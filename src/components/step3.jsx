import React, {Component} from 'react';
import {Form, Button, Input, Progress, Select, Row, Col} from "antd";
import CommonComponents from "./CommonComponents"; 
import {Link,withRouter} from "react-router-dom"; 
import { ArrowLeftOutlined } from '@ant-design/icons';

class Income extends Component {

    onFinish = (values) => {

        var time = values.currentTarget.dataset.value;

        console.log(values.currentTarget.dataset.value);

        this.props.money(values.currentTarget.dataset.value);
        
        console.log("Success: ", time)

        this.props.history.push("/step4")
    

    };

    onFinishFailed = (errorInfo) => {
        console.log("Failed: ", errorInfo);
    };

    render() {
        return(
            <div className="card shadow-lg" style={{borderRadius: "25px"}}>
                <Progress percent={20} status="active" showInfo={true} className="pbar" />

                <CommonComponents
          currentStep={this.props.currentStep}
          totalSteps={this.props.totalSteps}
          previousStep={this.props.previousStep}
        />

<div className='p-2'>
					<Link to='/step2'>
						<Button type='primary' shape='circle'>
							<ArrowLeftOutlined className='anticon' />
						</Button>
					</Link>
				</div>
        

				<div className='d-flex' style={{ minHeight: '50vh' }}>
					<div className='card-body d-xl-flex justify-content-center align-items-center' align='center'>
					<Form
              name="household_income"
              className="mywidth"
              onFinish={this.onFinish}
              initialValues={{
                household_income: this.props.household_income,
              }}
              onFinishFailed={this.onFinishFailed}
            >
              <h3> What is your total household income?</h3>
              <br />
              <Form.Item
                name="household_income"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Select an option ",
                  }
                ]}
              >
                 <Button size="large" name="household_income" className="chooseButton" id="50000" data-value="50000" value={"50000"} onClick={(values) => this.onFinish(values)}>$47,000+</Button>

                 <Button size="large" name="household_income" className="chooseButton" id="47000" data-value="47000" value={"47000"} onClick={(values) => this.onFinish(values)}>$30,000 - $47,000</Button>

                 <Button size="large" name="household_income" className="chooseButton" id="30000" data-value="30000" value={"30000"} onClick={(values) => this.onFinish(values)}>$16,000 - $30,000</Button>

                 <Button size="large" name="household_income" className="chooseButton" id="16000" data-value="16000" value={"16000"} onClick={(values) => this.onFinish(values)}>$0 - $16,000</Button>

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

export default withRouter(Income)