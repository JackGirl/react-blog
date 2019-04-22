import React, { Component } from 'react';
import {Row,Col,BackTop } from 'antd'
import MySider from '../sider/MySider';
import MyContent from '../content/MyContent';


import '../../assert/css/Wrapper.css'

class MyWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    getTarget = ()=>document.getElementById('wrapper')
    render() {
        return (
            <div className="wrapper">
                <Row>    
                    <Col span={4}  >
                        <MySider/>
                    </Col>
                    <Col span={20} id="wrapper">
                        <MyContent />
                    </Col>
            </Row>
            <BackTop target={this.getTarget}/>
          </div>
         
        );
    }
}

export default MyWrapper;