import React, { Component, useState} from "react";
import { Form, Button, Input, Select, Progress, Col, Row } from "antd";
import CommonComponents from "./CommonComponents";
import { Link, withRouter } from "react-router-dom";
import { ArrowLeftOutlined } from '@ant-design/icons';
import Axios from "axios";
import XMLParser from 'react-xml-parser';
class Info2 extends Component {

  state = { 
    error: '',
    loading: false,
    response: ''
  }

  onFinish = (values) => {


    this.props.setEmail(values.email)
    this.props.setPhone(values.phone)

    console.log("Success:", values);
    this.setState({
      loading: true 
    }, this.PostDataOfLifeInsurance(this.props.postData));

    this.props.callMediaAlpha();
    this.props.history.push("/thank-you");

  };

  PostDataOfLifeInsurance = (postData) => {
    console.log(postData);

    Axios.post("https://quotehound.leadspediatrack.com/post.do", null, {
      params: postData,
    })

    .then((res) => {
      console.log(res)

      console.log("Successfully posted, : ", postData)

      if (res.status === 200) {
        this.setState({
          loading: false, 
        },() =>{
                    
        });
      }
    })

    .catch((err) => {
      if(err) throw err;
    });
  };


  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    
    const {response, loading} = this.state
    return (
      <div className="card shadow-lg" style={{ borderRadius: "25px" }}>
        <Progress percent={99} status="active" showInfo={true} className="pbar" />
        <CommonComponents
          currentStep={this.props.currentStep}
          totalSteps={this.props.totalSteps}
          previousStep={this.props.previousStep}
        />
        <div className="p-2">
          <Link to="/step10">
            <Button type="primary" shape="circle"  >
              <ArrowLeftOutlined className="anticon" />
            </Button>
          </Link>
        </div>
        <div className="d-flex" style={{ minHeight: "60vh" }}>
          <div
            className="card-body d-xl-flex justify-content-center align-items-center"
            align="center"
            style={{ paddingTop: "0px" }}
          >
            <Form
              name="basic"
              className="mywidth"
              onFinish={this.onFinish}
              initialValues={{
            
                email: this.props.email,
                phone: this.props.phone
              }}
              onFinishFailed={this.onFinishFailed}
            >
              <h3>Last Step to Saving!</h3>
              <br />

              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Form.Item
                    name="email"
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please Enter a valid email",
                      }
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Email"
                      type="email"
                    />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    name="phone"
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please Enter A Valid Phone",
                      },
                      {
                        max: 12, message: 'Please enter a valid phone'
                      }
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Phone Number"
                      type='text'
                      id="phone"
                    > 
      
                    </Input>
                  </Form.Item>
                </Col>
              </Row>

              <p className="tcpa"><input type="hidden" id="leadid_tcpa_disclosure" />By hitting <b> Next </b> below, I provide my express written consent to the following. Telemarketing calls, text messages, emails, and postal mail from this Web site, our <a href="https://www.quotehound.com/partners">marketing </a> and re-marketing network, and up to eight insurance companies or their affiliates or representatives at the phone number (including wireless number), email address, and postal address provided by me. Telemarketing calls, text messages, emails, and postal mail (including wireless number), email address, and postal address provided by me. Calls and text messages transmitting insurance quotes, or seeking related additional information from me, using an Automated Telephone Dialing System or prerecorded or artificial voices. Electronic video monitoring and recordation of my activities on this Site; and I acknowledge that I may revoke my consent at any time by Calling<a href="tel:1883161350">1 888-316-1350 </a> or emailing “STOP” to<a href="mailto:optout@quotehound.com"> optout@quotehound.com</a>.<b>I AGREE TO ALL OF THE ABOVE AND SEND MY QUOTE</b></p>



              {/* <Link to="/step6"> */}
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

export default withRouter(Info2);