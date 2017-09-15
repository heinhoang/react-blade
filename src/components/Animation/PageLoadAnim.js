import React, { PureComponent } from 'react';
import { Button } from 'reactstrap';
import QueueAnim from 'rc-queue-anim';

class PageLoadAnim extends PureComponent {
    constructor(props) {
        super(props);
        this.toggleShow = this.toggleShow.bind(this);
        this.state = {
            show: true
        };
    }

    toggleShow() {
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        return (
            <div className="queue-demo2">
                <p className="buttons" style={{ marginBottom: 20 }}>
                    <Button type="primary" onClick={this.toggleShow}>Load/Unload</Button>
                </p>
                <QueueAnim type={['right', 'left']} className="demo-content">
                    {this.state.show ? [
                        <div className="demo-header" key="header">
                            <div className="logo">
                            </div>
                            <ul>
                                <li key="0"></li>
                                <li key="1"></li>
                                <li key="2"></li>
                            </ul>
                        </div>,
                        <div className="demo-banner" key="banner">
                            <div className="point">
                                <ul>
                                    <li />
                                    <li />
                                    <li />
                                </ul>
                            </div>
                        </div>,
                        <QueueAnim className="demo-page" key="page" type="bottom">
                            <h4 key="h1">Child Loading</h4>
                            <p key="p" />
                            <div key="box" className="box">
                                <QueueAnim type="bottom" component="ul">
                                    <li key="0" />
                                    <li key="1" />
                                    <li key="2" />
                                </QueueAnim>
                            </div>
                        </QueueAnim>,
                        <div className="demo-footer" key="footer" />,
                    ] : null}
                </QueueAnim>
            </div>
        );
    }
}

export default PageLoadAnim;