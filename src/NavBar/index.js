import { Menu, Icon } from 'antd';
import React, {Fragment} from 'react'
import './index.less'
const { SubMenu } = Menu;

class NavBar extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="mail" className={"ant-menu-item"}>
                    <Icon type="mail" />
                    Girisemedim
                </Menu.Item>
                <Menu.Item key="app" disabled className={"ant-menu-item"}>
                    <Icon type="appstore" />
                    Onlar da Girisemedi
                </Menu.Item>
                <Menu.Item key="app" disabled className={"ant-menu-item"}>
                    <Icon type="appstore" />
                    Röportaj
                </Menu.Item>

                <Menu.Item key="alipay" className={"ant-menu-item"}>
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        Kıtap Inceleme
                    </a>
                </Menu.Item>
            </Menu>
        );
    }
}

export default NavBar;