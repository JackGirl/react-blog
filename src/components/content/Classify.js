import React, { Component } from 'react';
import { Row, Col, Tag, Badge } from 'antd'
import '../../assert/css/Classify.css'
const axios = require('axios')

class Classify extends Component {
    constructor(props) {
        super(props);
        this.state = { tag: [] };
    }
    componentDidMount() {
        axios.get('/static/data/tag.json').then(res => {
            this.setState({ tag: res.data })
        });
    }

    render() {
        return (
            <div className="classify-wrapper">
                <Row>
                    <Col span={24} id="classify-wrapper">
                        <div className="classify-title">
                            <h2>
                                Categories
                            </h2>
                            <p>this have {this.state.tag.length} tags</p>
                            <div >
                                {this.state.tag.map((tag, key) => {
                                    return <Badge className="classify-tag-wrapper" count={tag.count} key={key} ><Tag color={tag.color} ><a href="/">{tag.text}</a> </Tag></Badge>
                                })}
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Classify;