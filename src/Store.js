import { createStore } from "redux";
import rootReducer from "./reducerss/Rootreducer";

const store = createStore(rootReducer
);

export default store