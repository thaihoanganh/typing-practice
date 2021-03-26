import thunk from "redux-thunk";
import logger from "redux-logger";

const middlewares: any[] = [thunk];

if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
}

export default middlewares;
