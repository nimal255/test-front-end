import React from 'react';
import { CardBody ,Card,Button} from "reactstrap";
import { Form, Input } from "antd";
import { connect } from "react-redux";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link ,withRouter} from "react-router-dom";
import actions from "../../redux/actions/auth/authAction";
import {authService} from "../../services"

class LoginPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: "",
        // submitted: false
      };
    }
  
    onSubmit = (values) => {
      const data = { email: values.email, password: values.password };
  
      authService()
        .userLogin(data)
        .then((res) => {
          console.log("mmmmmmmm", res.data);
          this.props.login(res.data);
          this.props.history.push("/dashboard");
        })
        .catch((err) => {
          console.log("ppppppppppp",err);
        });
    };
  
render(){
  return (
    <div style={{ height: "970px" }}>
        <div
          style={{ margin: "auto", width: "20%", paddingTop: "250px" }}
          className="form-login"
        >
          <React.Fragment>
          <Card>
            <Form onFinish={this.onSubmit}>
              <h4 style={{ marginLeft: "155px", marginTop:"20px" }}>Login</h4>
              <CardBody>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
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
                    { required: true, message: "Please input your Password!" },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    width="600px"
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    color="primary"
                    size="md"
                    htmlType="submit"
                    style={{ width: "100%" }}
                  >
                    Login
                  </Button>
                </Form.Item>
              </CardBody>{" "}
              <div style={{marginLeft:"50px",marginBottom:"20px"}}>
              <text>
                {" "}
                Don't have an account ? Please
                </text>{" "}
              <Link
                to="/register"
              >
                <b>Signup</b>
              </Link>
              </div>
            </Form>
            </Card>
          </React.Fragment>
        </div>
      </div>
  )}
}

const mapStateToProps = (state) => state;

export default withRouter(connect(mapStateToProps, actions)(LoginPage));