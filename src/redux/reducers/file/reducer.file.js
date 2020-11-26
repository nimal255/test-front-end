
import * as Types from '../../type'

const initialState = {
    loading: false,
    loaded: false
}
export const fileData = ( state = initialState, action) =>{
    switch (action.type){
        case Types.GET_FILE_DETAILS:
            return { ...state, loading: true };
        case Types.GET_FILE_DETAILS_SUCCESS: 
            return { ...state, loading: false, loaded: true, payload: action.payload }
        case Types.GET_FILE_DETAILS_FAILURE:
            return { ...state, loading: false, loaded: false, error: action.payload }
        case Types.ADD_FILE_DATA: 
            state.payload[0].files.unshift({...action.payload})
            console.log("state.payload",state.payload[0].files);
            return { ...state, loading: false, loaded: true, payload: [...state.payload]}

            case Types.FILTER_FILE_DATA:
                let value = action.value;
                let filteredData = [];
                if (value.length) {
                  filteredData = state.payload[0].files
                    .filter(item => {
                      console.log("item",item);
                      let startsWithCondition =
                        item.fileName.toLowerCase().toString().startsWith(value.toLowerCase())

                      let includesCondition =
                        item.fileName.toLowerCase().toString().includes(value.toLowerCase())

                      if (startsWithCondition) {
                        return startsWithCondition
                      } else if (!startsWithCondition && includesCondition) {
                        return includesCondition
                      } else return null
                    });
                  return { ...state, filteredData: [...filteredData] }
                } else {
                  filteredData = state.payload
                  return { ...state, filteredData:[...filteredData] }
                }    
        default: 
            return state
    }
}