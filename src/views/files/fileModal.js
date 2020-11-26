import React from "react";
import { Modal, Button } from 'antd';
import axios from "axios";
import { fileData } from "../../redux/reducers/file/reducer.file";

const UPLOAAAAD_FILE = "http://localhost:3001/upload"

class  FileModal extends React.Component {

    constructor(props){
        super(props);

        this.state={
          fileData:{}
        }
    }




    handleUpload = (e)=>{
      
      const files = e.target.files[0];
      console.log(files)
      var formData = new FormData();
     formData.append('image', files);
    //  var options = { content: formData };
      axios.post(UPLOAAAAD_FILE,
        // method:"POST",
        formData
      ).then((res)=>{
        // response.json().then((result) => {
          this.setState({fileData:res.data})
          console.log("result",fileData)
        // }
       })
      
    }


  render() {
    let { visible,onCancel,onOk,showModal} = this.props;
    return (
      <>
        <Button type="primary" onClick={showModal}>
          Upload File
        </Button>
        <Modal
          title="Upload your file"
          visible={visible}
          onOk={()=>this.props.onOk({fileUrl:this.state.fileData.fileUrl,fileName:this.state.fileData.fileName})}
          onCancel={onCancel}
          maskClosable
        >
         <input type="file" name="image" onChange={(e)=>this.handleUpload(e)}/>
        </Modal>
      </>
    );
  }
}

export default FileModal;