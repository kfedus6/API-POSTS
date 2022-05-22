import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreatorsTs from "../store/action-creators.ts";

export const useAction = () => bindActionCreators(actionCreatorsTs, useDispatch());