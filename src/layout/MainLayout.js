import React, {Fragment} from 'react'
import {Layout, Row, Col, Input} from 'antd';
import './index.css'
import NavBar from "../NavBar";
const {Header, Footer, Content} = Layout;
const {Search} = Input;

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
                            <div >
                                <Col span={22} offset={1}>
                                    <div className={"navBar"}>
                                      <NavBar/>
                                    </div>
                                </Col>
                            </div>
                        </Row>

                        <Row>
                            <Col span={8}>col-8</Col>
                            <Col span={8}>col-8</Col>
                            <Col span={8}>col-8</Col>
                        </Row>
                    </Content>
                    <Footer className={"footer"}>Footer</Footer>
                </Layout>
            </Fragment>
        )
    }
}

export default MainLayout;