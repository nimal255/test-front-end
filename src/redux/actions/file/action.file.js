import {fileService } from '../../../services';
import * as Types from "../../type";

const initialize = () => ({
    type: Types.GET_FILE_DETAILS
})

const messageSuccess = data =>({
    type: Types.GET_FILE_DETAILS_SUCCESS,
    payload: [...data]

});

const messageFailure = error => ({
    type: Types.GET_FILE_DETAILS_FAILURE,
    payload:{
        error
    }
});

export function getFileDetails() {
    return dispatch =>{
        dispatch(initialize());
        fileService().getFileList()
            .then(res =>{
                dispatch(messageSuccess(res.data.data));
            })
            .catch(err =>{
                dispatch(messageFailure(err));
            });
    };
}



export function addNewData(data) {
console.log("dataaaaaaaaaa action",data)
    return dispatch => dispatch({ type: Types.ADD_FILE_DATA, payload: data })
}

export function filterData(value) {
    console.log(value);
    return dispatch => dispatch({ type: Types.FILTER_FILE_DATA, value: value })
  }