import { combineReducers } from "redux";
import reducers from "../reducers";


const rootReducers = combineReducers({
    data:reducers
})


export default rootReducers