import React from 'react';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, LogoutOutlined, FileOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import actions from "../redux/actions/auth/authAction";
import { isLogin } from '../utility';


const { Header, Content, Footer, Sider } = Layout; 

class LayoutPage extends React.Component {
  constructor(props) {
    super(props);
  }
   
  componentDidMount(){

     const da = isLogin();
            if(da == false){
              window.location = "/login" ;
            }
      }

  logout = () => {
    this.props.deauthenticate();
    window.location = "/login";
    // this.props.history.push("/login");
  };

  render() {

  return (
    <div>
     <Layout style={{ height: "100vh" }}>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        // console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        // console.log(collapsed, type);
      }}
      style={{ height: "100vh" }}
      // collapsible
    >
      <div className="logo" />
      <br/>
      <br/>
      <br/>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
        <Link to="/profile">
        <span>Profile</span>
        </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<FileOutlined />}>
         <Link to="/files">
         <span> Files </span>
         </Link>
         </Menu.Item>
        <Menu.Item key="3" icon={<LogoutOutlined />}>
          <Link onClick={this.logout}><span>Logout</span></Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24}}>
          {this.props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
  <style jsx>{
    `#components-layout-demo-responsive .logo {
      height: 32px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px;
    }
    
    .site-layout-sub-header-background {
      background: #fff;
    }
    
    .site-layout-background {
      background: #fff;
    }
    `
  }
  </style>
    </div>
  )}
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, actions)(LayoutPage);
