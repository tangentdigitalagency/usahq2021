import React, {Component} from 'react';
import {Form, Button, Input, Progress, Select, Row, Col} from "antd";
import CommonComponents from "./CommonComponents"; 
import {Link,withRouter} from "react-router-dom"; 
import { ArrowLeftOutlined } from '@ant-design/icons';

class Gender extends Component {

    onFinish = (values) => {

        var gender = values.currentTarget.dataset.value;

        console.log(values.currentTarget.dataset.value);

        this.props.chooseGender(values.currentTarget.dataset.value);
        
        console.log("Success: ", gender)

        this.props.history.push("/step5")
    

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
					<Link to='/step3'>
						<Button type='primary' shape='circle'>
							<ArrowLeftOutlined className='anticon' />
						</Button>
					</Link>
				</div>
        

				<div className='d-flex' style={{ minHeight: '50vh' }}>
					<div className='card-body d-xl-flex justify-content-center align-items-center' align='center'>
					<Form
              name="gender"
              className="mywidth"
              onFinish={this.onFinish}
              initialValues={{
                gender: this.props.gender,
              }}
              onFinishFailed={this.onFinishFailed}
            >
              <h3> What is your Gender?</h3>
              <br />
              <Form.Item
                name="gender"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Select an option ",
                  }
                ]}
              >
                 <Button size="large" name="gender" className="chooseButton" id="male" data-value="male" value={"male"} onClick={(values) => this.onFinish(values)}>Male</Button>

                 <Button size="large" name="gender" className="chooseButton" id="female" data-value="female" value={"female"} onClick={(values) => this.onFinish(values)}>Female</Button>


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

export default withRouter(Gender)