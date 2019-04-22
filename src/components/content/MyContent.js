import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import  { Routers }  from '../config/Router'


class MyContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Switch>
                {Routers.map((route,key)=>{
                if(route.exact){
                    return <Route key={key} path={route.path} exact component={route.component}/>
                }
                return <Route key={key} path={route.path}  component={route.component}/>
                })}
                </Switch>
            </div>
        );
    }
}

export default MyContent;