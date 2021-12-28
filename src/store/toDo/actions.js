import { ADD_TODO } from "./constants";
import { DELETE_TODO } from "./constants";
import { TOGGLE_TODO } from "./constants";
import { simpleActionGenerator} from "../utils"

export const addToDoAction = (payload) => (simpleActionGenerator(ADD_TODO, payload));
export const deleteToDoAction = (payload) => (simpleActionGenerator(DELETE_TODO, payload));
export const toggleToDoAction = (payload) => (simpleActionGenerator(TOGGLE_TODO, payload));
