// import 'rc-scroll-anim/assets/index.css';
import ScrollAnim from 'rc-scroll-anim';
import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
// import Animate from 'rc-animate';

import './Animation.css';
const ScrollOverPack = ScrollAnim.OverPack;

class ScrollAnimation extends React.Component {
    render() {
        return (
            <div>
                <ScrollOverPack
                    id="page1"
                    className="section page1" replay
                    playScale="50vh"
                >
                    <TweenOne className="tween-one" key="0" animation={{ opacity: 1 }}>
                        默认进入与出场, 顶部出场
                    </TweenOne>
                    <QueueAnim key="1">
                        <div key="0" className="section-anim demo"></div>
                        <div key="1" className="section-anim demo" style={{ backgroundColor: '#F38EAD' }}></div>
                        <div key="2" className="section-anim demo"></div>
                        <div key="3" className="section-anim demo"></div>
                    </QueueAnim>
                </ScrollOverPack>
            </div>
        );
    }
}

export default ScrollAnimation;