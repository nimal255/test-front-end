import React, { Component } from 'react'
import { connect } from "react-redux";
import { Card, CardBody } from 'reactstrap';
import Layout from '../../layout/layout';
import actions from "../../redux/actions/auth/authAction";
import { isLogin } from '../../utility';


 class ProfilePage extends Component {
     constructor(props){
        super(props);

     }

     componentDidMount(){
        const da = isLogin()
        if(da == false){
            window.location = "/login" ;
        }
     }

    render() {
        return (
           
                <Layout>
                <Card>
                    <CardBody>
                        <h5> Username : {this.props.token.user.username} </h5>
                    </CardBody>
                    <CardBody>
                        <h5> Email : {this.props.token.user.email} </h5>
                    </CardBody>
                </Card>
                </Layout>
        )
    }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, actions)(ProfilePage);
