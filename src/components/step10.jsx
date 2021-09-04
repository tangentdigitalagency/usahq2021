
import React, { Component, useState} from "react";
import { Form, Button, Input, Select, Progress, Col, Row } from "antd";
import CommonComponents from "./CommonComponents";
import { Link, withRouter } from "react-router-dom";
import { ArrowLeftOutlined } from '@ant-design/icons';
import Axios from "axios";
import XMLParser from 'react-xml-parser';
class Info extends Component {


  onFinish = (values) => {

    // this.props.nextStep();
    this.props.setFName(values.first_name);
    this.props.setLName(values.last_name);

    console.log("Success:", values);

    this.props.history.push('/step11');
   
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    
    return (
      <div className="card shadow-lg" style={{ borderRadius: "25px" }}>
        <Progress percent={99} status="active" showInfo={true} className="pbar" />
        <CommonComponents
          currentStep={this.props.currentStep}
          totalSteps={this.props.totalSteps}
          previousStep={this.props.previousStep}
        />
        <div className="p-2">
          <Link to="/step9">
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
                first_name: this.props.first_name,
                last_name: this.props.last_name,
              }}
              onFinishFailed={this.onFinishFailed}
            >
              <h3>What is your Name?</h3>
              <br />

              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Form.Item
                    name="first_name"
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please Enter Your First Name",
                      },
                      {
                        min: 2, message: 'Please enter your name'
                      }
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="First name"
                    />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    name="last_name"
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please Enter Your Last Name",
                      },
                      {
                        min: 2, message: 'Please enter your name'
                      }
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Last Name"
                    />
                  </Form.Item>
                </Col>
              </Row>

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

export default withRouter(Info);