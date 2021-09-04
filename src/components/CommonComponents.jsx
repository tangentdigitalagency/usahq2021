import React, { Component } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Progress } from 'antd';

class CommonComponents extends Component {

    
        // // Update if new step is added / this is for stepper to divide for perc of completion
        // var current = this.props.currentStep;
        // var totalStep = 8;
        // var progress = this.props.currentStep / totalStep * 100; // divides current by total by 100 for %

        // console.log(this.props);
    render() {

        return (          
            <div className="flex-row d-inline-flex justify-content-between">
                {/* <div className="p-2">
                    <Button type="primary" shape="circle" onClick={this.props.previousStep}  >
                        <ArrowLeftOutlined className="anticon" />
                    </Button>
                </div> */}
                <div className="p-2">
                </div>
            </div>
        );
    }
}

export default CommonComponents;

export class Heading extends Component {
    render() {
        return (
            <div className="flex-row d-inline-flex justify-content-center">
                <div className="p-2">
                    <h2>{this.props.heading}</h2>
                </div> 
            </div>
        );
    }
}