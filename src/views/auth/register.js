import React,{Component} from 'react';
import { Link ,withRouter } from "react-router-dom";
import { Button,Input,Form,Row,Col,Card,message} from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import actions from "../../redux/actions/auth/authAction";
import { authService } from '../../services';

class RegisterPage extends Component {
    constructor(props) {
        super(props);
      }
      onFinish = (values) => {
        const data = { email: values.email, username:values.username, password: values.password };
    
        authService()
          .userRegister(data)
          .then((res) => {
            message.success(res.data.message)
            this.props.history.push("/login");
          })
          .catch((err) => {
              console.log("errrrrrrr",err)
            message.error(err.response.data.message)
            this.props.history.push("/register")
          });
      };
      render(){
    return (
        <div>
            <Row align="middle" style={{minHeight: "calc(100vh - 134px)"}}>
              <Col span={8} offset={8} style={{textAlign: "center"}}>
                  <Card>
                  <h3>Sign-up</h3>
                <Form
                  name="register"
                  className="register-form"
                  onFinish={this.onFinish}
                >
                    <Form.Item
                    name="username"
                    rules={[
                      { required: true, message: "Please input your username!" }
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="username"
                    />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: "Please input your email!" }
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="email"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      { required: true, message: "Please input your Password!" }
                    ]}
                  >
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password" width="600px"
                    />
                  </Form.Item>  
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{width: "100%"}}
                    >
                      Sign up
                    </Button>
                  </Form.Item>
                </Form>
                <text>
                {" "}
                Already have an account ? Please
                </text>{" "}
              <Link
                to="/login"
              >
               <b>Login</b> 
               
              </Link>
              </Card>
              </Col>
            </Row>
        </div>
    )}
}

const mapStateToProps = (state) => state;

export default withRouter(connect(mapStateToProps, actions)(RegisterPage));

