import React, { Component } from "react";
import { Card, Row, Col, Divider, Icon, Tag, Pagination,BackTop } from "antd";
import "../../assert/css/Home.css";

const axios = require("axios");

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: []
    };
  }

  componentDidMount() {
    axios.get("/static/data/blog.json").then(res => {
      this.setState({
        blog: res.data
      });
    });
  }

  getTarget = ()=>document.getElementById('home-wrapper')

  render() {
    return (
      <div className="home-wrapper" id="home-wrapper">
      <Row>
        <Col span={24} >
          {this.state.blog.map((blog, key) => {
            return (
              <Card className="card" key={key}>
                <div className="blog-header">
                  <Divider orientation="left">
                    <span className="blog-title">{blog.title}</span>
                    <span className="blog-time">{blog.time}</span>
                  </Divider>
                </div>
                <div className="blog-discription">
                  <h2>{blog.header}</h2>
                  <Divider />
                  <pre>
                    {blog.content}
                    <code>{blog.code}</code>
                  </pre>
                </div>
                <div className="blog-footer">
                  <Icon type="message" /> {blog.talk}
                  <Divider type="vertical" /> <Icon type="tag" />
                  {blog.tag.map((tag, key) => {
                    return (
                      <Tag className="blog-tag" key={key} color={tag.color}>
                        {tag.text}
                      </Tag>
                    );
                  })}
                </div>
              </Card>
            );
          })}
          <div className="page">
            {this.state.blog.length>0&&<Pagination class="page" defaultCurrent={3} total={500} />}
          </div>
        </Col>
      </Row>   
      <BackTop target={this.getTarget}/>  
    </div>
    );
  }
}

export default Home;
