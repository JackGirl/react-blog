import React, { Component } from 'react';
import { Row, Col, Menu, Divider, Icon, Dropdown } from 'antd'
import MenuItem from 'antd/lib/menu/MenuItem';
import '../../assert/css/MyHeader.css'
import { Link } from 'react-router-dom'

const menus = [
    {path:"/",text:"主页",icon:"home"},
    {path:"/classify",text:"分类",icon:"book"},
    {path:"/placefile",text:"归档",icon:"bars"},
    {path:"/about",text:"关于",icon:"user"}
]
 var  Menus = 
        <Menu>
               {menus.map((menu,key)=>{
                return <MenuItem className="header-menu-item" key={key} ><Link to={menu.path}> <Icon type={menu.icon} />{menu.text}</Link></MenuItem>
            })}
        </Menu>;




class MyHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="header">
                <Row  >
                    <Col className="header-left" id="header-left" span={4}>
                        <Icon type="smile" /><span>潇潇的博客</span> <Divider type="vertical" />
                        <Dropdown overlay={Menus} placement="topCenter" className="drop-menu">
                           <Icon type="menu-fold" />
                        </Dropdown>
                    </Col>
                    <Col className="header-right" id="header-right" span={20}>
                    <Menu style={{ "border": "none" }} mode="horizontal" >
                    {menus.map((menu,key)=>{
                return <MenuItem className="header-menu-item" key={key} ><Link to={menu.path}> <Icon type={menu.icon} />{menu.text}</Link></MenuItem>
            })}
                       </Menu>
                    </Col>
                </Row>
            </div>

        );
    }
}

export default MyHeader;