

import Home from '../content/Home'
import About from "../content/About"
import Classify from "../content/Classify"
import PlaceFile from "../content/PlaceFile"
import Blog from "../content/Blog"
import PageNotFound from '../error/404'



export const Routers = [
    {path:"/",exact:true,component:Home,description:"主页"},
    {path:"/about",exact:false,component:About,description:"关于"},
    {path:"/classify",exact:false,component:Classify,description:"分类"},
    {path:"/placefile",exact:false,component:PlaceFile,description:"归档"},
    {path:"/blog",exact:false,component:Blog,description:"博客内容"},
    {component:PageNotFound,description:"博客内容"}
]

