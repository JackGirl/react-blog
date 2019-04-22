import React, { Component } from 'react';
import HeaderImg from '../../assert/images/header.jpg'
import { Divider, Tag } from 'antd'
import '../../assert/css/MySider.css'

const axios = require('axios')

class MySider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blog: [],
            tag: []
        };
    }
    componentDidMount() {
        axios.get('/static/data/blog.json').then(res => {
            this.setState({ blog: res.data })
        });
        axios.get('/static/data/tag.json').then(res => {
            this.setState({ tag: res.data })
        });
    }
    render() {
        return (
            <div className="sider-wrapper" id="sider-wrapper">
                <img src={HeaderImg} className="avatar" alt="" />
                <h2 className="name">潇潇</h2>
                <div className="customTitle">java后端</div>
                <div className="link">
                    <a target="blank" href="https://gitee.com/xiaoxiaofans/projects">码云 </a>
                    <a target="blank" href="https://www.zhihu.com/people/xiaoxiao1997/activities">知乎 </a>
                </div>
                <Divider orientation="left"><span className="sider-card-title">最近文章</span></Divider>
                <ul className="recentList">
                    {this.state.blog.map((blog, key) => {
                        return <li key={key}> <a href="/">{blog.title}</a></li>
                    })}
                </ul>
                <Divider orientation="left"><span className="sider-card-title">标签</span></Divider>
                <div className="tagWrapper" align="center">
                    {this.state.tag.map((tag, key) => {
                        return <Tag key={key} color={tag.color} ><a href="/">{tag.text}</a> </Tag>
                    })}
                </div>
            </div>
        );
    }
}

export default MySider;