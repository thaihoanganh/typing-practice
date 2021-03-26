import { combineReducers } from "redux";
import displayReducer from "@stores/reducers/displayReducer";
import lessonsReducer from "@stores/reducers/lessonsReducer";
import practiceReducer from "@stores/reducers/practiceReducer";
import statisticalReducer from "@stores/reducers/statisticalReducer";

const rootReducer = combineReducers({
    display: displayReducer,
    lessons: lessonsReducer,
    practice: practiceReducer,
    statistical: statisticalReducer,
});

export default rootReducer;
