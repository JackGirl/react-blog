import React, { Component } from 'react';
import { Row, Col, Avatar, Divider, Icon } from 'antd'
import '../../assert/css/About.css'
import HeaderImg from '../../assert/images/header.jpg'


const axios = require('axios')

class About extends Component {
    constructor(props) {
        super(props);
        this.state = { user: {} };
    }

    componentDidMount() {
        axios.get('static/data/about.json').then(res => {
            this.setState({
                user: res.data
            });
        })
    }
    render() {
        return (
            <div>
                <Row>
                    <Col span={24} className="about-wrapper">
                        <div>
                            <Avatar src={HeaderImg} />
                            <span className="author-title">{this.state.user.authorTitle}</span>
                            <Divider orientation="left">博客简述</Divider>
                            {this.state.user.description && this.state.user.description.map((des, key) => {
                                return <p key={key} dangerouslySetInnerHTML={{ "__html": des }}></p>
                            })}
                            <Divider orientation="left">关于我</Divider>
                            {
                                this.state.user.about && <ul className="about-list">
                                    <li>{this.state.user.about.name}</li>
                                    <li>
                                        联系方式 <Icon type="qq" /> {this.state.user.about.concat.QQ}
                                        <Divider type="vertical" /> <a href={'mailto:' + this.state.user.about.concat.email}>{this.state.user.about.concat.email}</a>
                                    </li>
                                    <li>坐标:   {this.state.user.about.address}</li>
                                    <li>技能:
                                        <ul>
                                            {this.state.user.about.skill.map((skill,key)=>{
                                                return <li key={key}>{skill}</li>
                                            })}
                                        </ul>
                                    </li>
                                    <li>个人:
                                        <ul>
                                            {this.state.user.about.me.map((me,key)=>{
                                                return <li key={key}>{me}</li>
                                            })}
                                        </ul>
                                    </li>
                                </ul>
                            }


                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default About;