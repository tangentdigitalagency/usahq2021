import React, { Component } from "react";
import { Form,  Button,Input, Progress, Select, Row, Col} from "antd";
import CommonComponents from "./CommonComponents"; 
import {Link,withRouter} from "react-router-dom"; 
import { ArrowLeftOutlined } from '@ant-design/icons';
const {Option} = Select;


class Living extends Component {
  onFinish = (values) => {
    // this.props.nextStep();
    this.props.setAddress(values.address);
    this.props.setCity(values.city);
    this.props.setZip(values.zip_code)
    this.props.setState(values.state)
    
    console.log("Success:", values);
    this.props.history.push("/step10")
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  render() { 
    return (
      <div className="card shadow-lg" style={{ borderRadius: "25px" }}>
                <Progress percent={80} status="active" showInfo={true} className="pbar"/>

        <CommonComponents
          currentStep={this.props.currentStep}
          totalSteps={this.props.totalSteps}
          previousStep={this.props.previousStep}
        />
         <div className="p-2">
           <Link to="/step8">
                    <Button  type="primary" shape="circle"  >
                        <ArrowLeftOutlined className="anticon" />
                    </Button>
                    </Link>
                </div>
        <div className="d-flex" style={{ minHeight: "60vh" }}>
          <div
            className="card-body d-xl-flex justify-content-center align-items-center"
            align="center"
            style={{ paddingTop:"0px" }}
          >
            <Form
              name="basic"
              className="mywidth"
              onFinish={this.onFinish}
              initialValues={{
                address: this.props.address,
                city: this.props.city,
                state: this.props.state,
                zip_code: this.props.zip_code
              }}
              onFinishFailed={this.onFinishFailed}
            >
              <h3>Where are you located?</h3>
              <br />
              <h5>Addess</h5>
              <Form.Item
                name="address"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Enter Your Home Address",
                  },
                  {
                      max:100, message:'Max Length Of Home Address Is 100 Characters'
                  }
                ]}
              >
                <Input  
                  size="large"
                  placeholder="Address"
                />
              </Form.Item>

              <Row gutter={[16, 16]}>
    <Col xs={24} xl={8}>
              <Form.Item
                name="city"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Enter Your city",
                  },
                  
                ]}
              >
                <Input
                  size="large"
                  placeholder="City"
                  type="text"
                />
              </Form.Item>
    </Col>
    <Col xs={24} xl={8}>


    <Form.Item
                name="state"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Enter Your State Name",
                  },
                  {
                    max: 2, message: 'Max Length Of State Name Is 2 Characters'
                  }
                ]}
              >
                <Select size="large" name="state" >
                  <Option disabled="" selected="" value=""> -- select a state -- </Option>
                  <Option value="AL">AL</Option>
                  <Option value="AK">AK</Option>
                  <Option value="AR">AR</Option>
                  <Option value="AZ">AZ</Option>
                  <Option value="CA">CA</Option>
                  <Option value="CO">CO</Option>
                  <Option value="CT">CT</Option>
                  <Option value="DC">DC</Option>
                  <Option value="DE">DE</Option>
                  <Option value="FL">FL</Option>
                  <Option value="GA">GA</Option>
                  <Option value="HI">HI</Option>
                  <Option value="IA">IA</Option>
                  <Option value="ID">ID</Option>
                  <Option value="IL">IL</Option>
                  <Option value="IN">IN</Option>
                  <Option value="KS">KS</Option>
                  <Option value="KY">KY</Option>
                  <Option value="LA">LA</Option>
                  <Option value="MA">MA</Option>
                  <Option value="MD">MD</Option>
                  <Option value="ME">ME</Option>
                  <Option value="MI">MI</Option>
                  <Option value="MN">MN</Option>
                  <Option value="MO">MO</Option>
                  <Option value="MS">MS</Option>
                  <Option value="MT">MT</Option>
                  <Option value="NC">NC</Option>
                  <Option value="NE">NE</Option>
                  <Option value="NH">NH</Option>
                  <Option value="NJ">NJ</Option>
                  <Option value="NM">NM</Option>
                  <Option value="NV">NV</Option>
                  <Option value="NY">NY</Option>
                  <Option value="ND">ND</Option>
                  <Option value="OH">OH</Option>
                  <Option value="OK">OK</Option>
                  <Option value="OR">OR</Option>
                  <Option value="PA">PA</Option>
                  <Option value="RI">RI</Option>
                  <Option value="SC">SC</Option>
                  <Option value="SD">SD</Option>
                  <Option value="TN">TN</Option>
                  <Option value="TX">TX</Option>
                  <Option value="UT">UT</Option>
                  <Option value="VT">VT</Option>
                  <Option value="VA">VA</Option>
                  <Option value="WA">WA</Option>
                  <Option value="WI">WI</Option>
                  <Option value="WV">WV</Option>
                  <Option value="WY">WY</Option>
                </Select>
              </Form.Item>
    </Col>
    <Col xs={24} xl={8}>
  
              <Form.Item
                name="zip_code"
                id="zip"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Enter Your zip code",
                  },
                  {
                    max: 5, message: 'Max Length Of zip code Is 5 Characters'
                  },
                  
                ]}
              >
                <Input
                  size="large"
                  placeholder="Zip code"
                  type="number"
                />
              </Form.Item>
    </Col>
  </Row>


              <Form.Item>


              </Form.Item>
              {/* <Link to="/step5"> */}
              <Form.Item>
                <Button type="primary" htmlType="submit" block size="large">
                  Next
                </Button>
              </Form.Item>
              {/* </Link> */}
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Living);