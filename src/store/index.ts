import { createStore } from "redux";
import AllUsers from "./modules/reducer";

const store = createStore(AllUsers);

export default store;