import React, {Component} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Nav from './components/Nav.jsx'
import Link from './components/link/Link.jsx'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [
                {
                    url: "https://www.theverge.com/2019/3/9/18257965/elizabeth-warren-break-up-apple-monopoly-antitrust"
                }
            ]
        }

    }

    render() {
        return (
            <div className="App">
                <Nav/>
                <div className={"container"}>
                    {this.state.links.map((link) => <Link link={link}/>)}
                </div>
            </div>
        )
    }
}
