import React, {Component} from 'react';
import {Form, Button, Input, Progress, Select, Row, Col} from "antd";
import CommonComponents from "./CommonComponents"; 
import {Link,withRouter} from "react-router-dom"; 
import { ArrowLeftOutlined } from '@ant-design/icons';

class Tabacco extends Component {

    onFinish = (values) => {

        var tab = values.currentTarget.dataset.value;

        console.log(values.currentTarget.dataset.value);

        this.props.tabaccoUse(values.currentTarget.dataset.value);
        
        console.log("Success: ", tab)

        this.props.history.push("/step7")
    

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
					<Link to='/step5'>
						<Button type='primary' shape='circle'>
							<ArrowLeftOutlined className='anticon' />
						</Button>
					</Link>
				</div>
        

				<div className='d-flex' style={{ minHeight: '50vh' }}>
					<div className='card-body d-xl-flex justify-content-center align-items-center' align='center'>
					<Form
              name="tobacco_use"
              className="mywidth"
              onFinish={this.onFinish}
              initialValues={{
                tobacco_use: this.props.tobacco_use,
              }}
              onFinishFailed={this.onFinishFailed}
            >
              <h3> Have you used tabacco products within the last 12 months?</h3>
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
                 <Button size="large" name="tobacco_use" className="chooseButton" id="yes" data-value="yes" value={"yes"} onClick={(values) => this.onFinish(values)}>Yes</Button>

                 <Button size="large" name="tobacco_use" className="chooseButton" id="No" data-value="No" value={"No"} onClick={(values) => this.onFinish(values)}>No</Button>


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

export default withRouter(Tabacco)