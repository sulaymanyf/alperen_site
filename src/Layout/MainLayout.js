import React, {Fragment} from 'react'
import {Layout, Row, Col, Input, Typography, Pagination} from 'antd';
import './index.css'
import NavBar from "../NavBar";
import Article from '../Article'
import Konular from '../Konular'
import MoreLike from "../MoreLike";
import CountDown from "../CountDown";
import Social from "../Social";
import Profile from "../Profile";

const {Header, Footer, Content} = Layout;
const {Search} = Input;
const {Title} = Typography;


function showTotal(total) {
    return `Total ${total} items`;
}

class MainLayout extends React.Component {
    render() {
        return (
            <Fragment>
                <Layout>
                    <Header className={"header"}>
                        <Row align="middle" className={"header"}>
                            <Col span={8}>
                                <div>
                                    Logo
                                </div>
                            </Col>
                            <Col span={8}>
                                <h1>Yapamadıklarım yapacaklarımın teminatıdır</h1>
                            </Col>
                            <Col span={8}>
                                <div className={"search_div"}>
                                    <Search
                                        placeholder="input search text"
                                        onSearch={value => console.log(value)}
                                        style={{width: 200}}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Header>
                    <Content className={"index_content"}>
                        <Row>
                            <div className={"navBar"}>
                                <NavBar/>
                            </div>
                        </Row>

                        <Row>
                            <Col span={5} className={"konular"}>
                                <Profile />
                                <Konular/>
                                <CountDown  />
                            </Col>
                            <Col span={14}>
                                <Article/>
                                <div>
                                    <Pagination size="small" total={50}   style={{marginTop: 24}}/>
                                </div>
                            </Col>
                            <Col span={5}>
                                <MoreLike/>
                            </Col>
                        </Row>
                    </Content>
                    <Footer className={"footer"}>
                        <Row>
                            <Col span={8} offset={16}>
                                <Social/>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12} offset={6}>
                                <span style={{fontSize:14}}>©2019 Alperen Danışmanlık İletişim  Hakkı Saklıdır. &nbsp;&nbsp; design by <a style={{color:"white"}}>抉择的权利</a></span>
                            </Col>
                        </Row>
                    </Footer>
                </Layout>
            </Fragment>
        )
    }
}

export default MainLayout;