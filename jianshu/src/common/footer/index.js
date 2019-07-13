import React, { Component } from 'react';
import {FooterWrapper,FooterContent} from './style';

class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                <FooterContent>
                <div>关于简书 · 联系我们 · 加入我们 · 简书出版 · 品牌与徽标 · 帮助中心 · 合作伙伴</div>
                <div>©2012-2019 上海佰集信息科技有限公司 / 简书 / 沪ICP备11018329号-5 / 沪公网安备31010402002252号 / 简书网举报电话：021-34770013 / 亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听 /</div>
                </FooterContent>
            </FooterWrapper>
        )
    }
}

export default Footer;