import React, {Component} from "react";

class LinkPreview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article className="container p-0 card">
                {
                    this.props.state.previewImageUrl ? (
                        <a
                            href={this.props.state.url}
                            className="text-muted card-img-top"
                            target="_blank"
                        >
                            <img src={this.props.state.previewImageUrl} className={'d-block card-img-top'}/>
                            <div className="ogimage-badge clearfix">
                                <a
                                    className="badge badge-light p-2 text-muted float-right"
                                    href={this.props.state.url}
                                >
                                    <i className="fa fa-clock-o pr-1" aria-hidden="true"/>
                                    {"today"}
                                </a>
                            </div>
                        </a>
                    ) : (
                        ''
                    )
                }

                <div className="card-header oglink-title">
                    <a href={this.props.state.url} className="">
                        <div className="h3 mb-0">
                            {this.props.state.title}
                        </div>
                        {this.props.state.publisher ? (
                            <div className="text-muted" style={{fontSize: '1rem'}}>
                                <small>
                                    <i
                                        className="fa fa-external-link mr-1"
                                        style={{fontSize: '.75rem'}}
                                        aria-hidden="true"
                                    />
                                </small>
                                {this.props.state.publisher}
                            </div>
                        ) : (
                            ''
                        )}
                    </a>
                </div>
                <div
                    className="card-body">
                    {this.props.state.description ? (
                        <blockquote className="p-3 rounded-right">
                            {this.props.state.description}
                        </blockquote>
                    ) : (
                        ''
                    )
                    }

                </div>
            </article>
        )
    }
}

class LinkInformation extends Component {
    constructor(props) {
        super(props);
    }
}


export default class Link extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUpdating: false,

            url: this.props.link.url,
            title: null,
            publisher: null,
            description: null,
            previewImageUrl: null

        };
        this.changeUrl = this.changeUrl.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.changePreviewImageUrl = this.changePreviewImageUrl.bind(this);
        this.changePublisher = this.changePublisher.bind(this);


        this.getOpengraphData(this.props.link.url)


    }

    getOpengraphData(url) {
        fetch("/api/opengraph-metadata?url=" + url)
            .then(response => response.json())
            .then(data => {
                if (data.title) {
                    this.setState({
                        title: data.title
                    })
                }
                if (data.image) {
                    this.setState({
                        previewImageUrl: data.image
                    })
                }
                if (data.publisher) {
                    this.setState({
                        publisher: data.publisher
                    })
                }
                if (data.description) {
                    this.setState({
                        description: data.description
                    })
                }
            })
    }

    changeUrl(e) {
        this.setState({
            url: e.target.value
        });
        this.getOpengraphData(e.target.value)
    }

    changeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    changePublisher(e) {
        this.setState({
            publisher: e.target.value
        });
    }

    changePreviewImageUrl(e) {
        this.setState({
            previewImageUrl: e.target.value
        });
    }

    changeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    render() {
        return (
            <div className={"card p-4 my-4"}>
                <form>
                    <div className={"form-group row"}>
                        <label className={"col-3 col-form-label"} htmlFor="url">Url</label>
                        <textarea onChange={this.changeUrl}
                                  readOnly={this.state.isUpdating}
                                  value={this.state.url}
                                  className={"form-control form-control-sm col-9"}>
                        </textarea>
                    </div>

                    <div className={"form-group row"}>
                        <label className={"col-3 col-form-label"} htmlFor="title">Title</label>
                        <textarea onChange={this.changeTitle}
                                  readOnly={this.state.isUpdating}
                                  value={this.state.title}
                                  className={"form-control form-control-sm col-9"}>
                        </textarea>
                    </div>
                    <div className={"form-group row"}>
                        <label className={"col-3 col-form-label"} htmlFor="title">Publisher</label>
                        <input onChange={this.changeTitle}
                               readOnly={this.state.isUpdating}
                               value={this.state.publisher}
                               className={"form-control form-control-sm col-9"}>
                        </input>
                    </div>
                    <div className={"form-group row"}>
                        <label className={"col-3 col-form-label"} htmlFor="title">Preview Image
                            Url</label>
                        <textarea onChange={this.changePreviewImageUrl}
                                  readOnly={this.state.isUpdating}
                                  value={this.state.previewImageUrl}
                                  className={"form-control form-control-sm col-9"}>
                        </textarea>
                    </div>
                    <div className={"form-group row"}>
                        <label className={"col-3 col-form-label"} htmlFor="title">Description</label>
                        <textarea onChange={this.changeDescription}
                                  readOnly={this.state.isUpdating}
                                  value={this.state.description}
                                  className={"form-control form-control-sm col-9"}>
                        </textarea>
                    </div>
                </form>

                <form>

                </form>

                <label htmlFor="preview">Preview</label>
                <LinkPreview state={this.state}/>

            </div>
        )
    }
}