import React, {Component} from "react";

export default class Nav extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                <div className="container px-0">
                    <a className="text-center" to="/">
                        <h1 className="navbar-brand mb-0">Link Blogger</h1>
                    </a>
                    <button
                        className="navbar-toggler border-0"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" to="/posts">
                                    Home
                                    <i
                                        className="fa fa-file-text d-md-none ml-2"
                                        aria-hidden="true"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }


}
