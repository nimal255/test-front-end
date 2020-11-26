import React, { Component } from 'react'
import {connect} from "react-redux";
import { Button } from 'reactstrap';
import SearchBar from '../../components/searchBar';
import DataTable from '../../components/table';
import {
    getFileDetails,
    addNewData,
    filterData
} from "../../redux/actions/file/action.file";
import Layout from '../../layout/layout';
import FileModal from './fileModal';
import "./fileUpload.css";
import { message, Tooltip } from 'antd';
import { fileService } from '../../services';
import { isLogin } from '../../utility';

 class FilePage extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log("props",props);
        if (
          props.filesList.loaded === true &&
          props.filesList.payload &&
          props.filesList.payload.length > 0
        ) {
          return {
            data: [...props.filesList.payload[0].files],
            filteredData: props.filesList.filteredData
              ? props.filesList.filteredData
              : [],
          };
        }

        // Return null if the state hasn't changed
        return null;
    }
     constructor(props){
         super(props)
         this.state={
             columns:[
                {
                    name: <h5 style={{ fontSize: "15px", fontWeight: "bold" }}>File</h5>,
                    selector: "fileName",
                    sortable: true,
                    width: "45%",
                    cell: (row) => (
                        <p title={row.fileName} className="text-truncate text-bold-500 mb-0">
                            {row.fileName}
                        </p>
                    ),
                },
                {
                    name: <h5 style={{ fontSize: "15px", fontWeight: "bold" }}>Download</h5>,
                    selector: "",
                    sortable: true,
                    width: "15%",
                    cell: (row) => (
                      console.log(row),
                        <div className="ml-2">
                          <Tooltip placement="right" title="download">
                      
                        
                        <a href={row.fileUrl} download>
                        {/* <Upload /> */}
                        download
                        </a>
                        </Tooltip>
                        </div>
                    ),
                },
                ],
             visible:false,
             value:'',
             data: [],
             currentData:null,
             modalItem:{},     
         }
     }
         

     componentDidMount(){
         this.props.getFileDetails();

         const da = isLogin()
         if(da == false){
          window.location = "/login" ;
         }
     }
     showModal = () => {
        this.setState({
          visible: true,
        });
      };

      addNewData =(obj) => {
        console.log(" add obj >>>>>",obj)
       fileService().uploadFile(obj,'POST')
       .then((res)=>{
        console.log("res", res);
        this.props.addNewData(obj);
        message.success({
          content: res.data.message,
        });
        this.setState({ visible: false });
       })
        .catch((err)=>{
          console.log("err", err);
        message.error({
          content: "failed to upload",
        });
        this.setState({ visible: false });
        })
      };
    
      handleCancel = () => {
        this.setState({ visible: false });
      };


      handleFilter = (e) => {
        console.log("eeeeeeeeeee",e.target)
        this.setState({ value: e.target.value });
        this.props.filterData(e.target.value);
    };

     
    render() {
        let { columns, data, currentData, visible, addNew, filteredData, value } = this.state;

        return (
            <div>
                <Layout >
                <div className="main_header">
              <div className="button_addnew">
                <FileModal
                 showModal={this.showModal}
                 onOk={this.addNewData}
                 visible={visible}
                 onCancel={this.handleCancel}
                 modalItem={this.state.modalItem}
                />
              </div>
              <div>
                <SearchBar handleFilter ={this.handleFilter}/>
              </div>
              </div>
                <br/>
                <DataTable
                columns={columns}
                data={value.length > 0 ? filteredData : data}
                />
                </Layout>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      filesList: state.file.fileData,
    };
};

export default connect(mapStateToProps, {
    getFileDetails,addNewData,filterData
})(FilePage);