import React, {Component} from 'react';
import {Form, Button, Input, Progress, Select, Row, Col} from "antd";
import CommonComponents from "./CommonComponents"; 
import {Link,withRouter} from "react-router-dom"; 
import { ArrowLeftOutlined } from '@ant-design/icons';

class TimeCoverage extends Component {

    onFinish = (values) => {

        var time = values.currentTarget.dataset.value;

        console.log(values.currentTarget.dataset.value);

        this.props.time(values.currentTarget.dataset.value);
        
        console.log("Success: ", time)

        this.props.history.push("/step3")
    

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
					<Link to='/step1'>
						<Button type='primary' shape='circle'>
							<ArrowLeftOutlined className='anticon' />
						</Button>
					</Link>
				</div>
        

				<div className='d-flex' style={{ minHeight: '50vh' }}>
					<div className='card-body d-xl-flex justify-content-center align-items-center' align='center'>
					<Form
              name="coverage_time"
              className="mywidth"
              onFinish={this.onFinish}
              initialValues={{
                coverage_time: this.props.coverage_time,
              }}
              onFinishFailed={this.onFinishFailed}
            >
              <h3> When would you like coverage?</h3>
              <br />
              <Form.Item
                name="coverage_time"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Select an option ",
                  }
                ]}
              >
                 <Button size="large" name="coverage_time" className="chooseButton" id="Immediately" data-value="Immediately" value={"Immediately"} onClick={(values) => this.onFinish(values)}>Immediately</Button>

                 <Button size="large" name="coverage_time" className="chooseButton" id="2 Months" data-value="2 Months" value={"2 Months"} onClick={(values) => this.onFinish(values)}>2 Months</Button>

                 <Button size="large" name="coverage_time" className="chooseButton" id="Not Sure" data-value="Not Sure" value={"Not Sure"} onClick={(values) => this.onFinish(values)}>Not Sure</Button>

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

export default withRouter(TimeCoverage)