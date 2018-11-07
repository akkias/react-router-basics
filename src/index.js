import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Post from './components/post'
import Profile from './components/profile'
import Navbar from './components/navbar'
import PostsItem from './components/post_item'

class App extends React.Component {
    render() {
        return (
            <>
                <h1>Home</h1>
            </>
            )
        }
}

ReactDOM.render(
    <BrowserRouter>
        <>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route path="/profile" component={Profile}></Route>
                    <Route path="/posts/:id" component={PostsItem} />
                    <Route path="/posts" component={Post}></Route>
                    <Route path="/" component={App} exact></Route>
                </Switch>
            </div>
        </>
    </BrowserRouter>
    , document.querySelector('#root'));