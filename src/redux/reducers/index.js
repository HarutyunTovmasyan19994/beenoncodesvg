import {POPUP_OPEN_CLOSE,DATA_INFO} from "../action/index"

const defaultState ={
    data:[],
    popup:false,
}



const reducers = (state = defaultState,action)=>{
    switch(action.type){
        case POPUP_OPEN_CLOSE:
            return {...state,popup:action.payload}
        case DATA_INFO:
            return {...state,data:[...state.data,action.payload]}
        default:
            return state
    }
}


export default reducers