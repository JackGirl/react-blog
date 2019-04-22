import React, { Component } from "react";
import { Timeline, Icon } from "antd";
import '../../assert/css/Placefile.css'

const axios = require('axios');

class PlaceFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        blog:[]
    };
  }
componentDidMount(){
    axios.get('/static/data/blog.json').then(res=>{
        this.setState({
            blog:res.data
        })
    });
}

  render() {
    return (
      <div className="placefile-warpper">
        <Timeline>
          <Timeline.Item>Nice! this hava {this.state.blog.length} data from webServer</Timeline.Item>
          <Timeline.Item
            dot={<Icon type="clock-circle-o"  />}
            color="red"
          >
            <h2>2019</h2>
          </Timeline.Item>
          {this.state.blog.map((blog,key)=>{
              return <Timeline.Item key={key}><span className="file-time">{blog.time}</span><a className="blog-file-title" href="/">{blog.title}</a></Timeline.Item>
          })}
        </Timeline>
      </div>
    );
  }
}

export default PlaceFile;
