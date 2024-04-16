import {useContext} from "react";
import Context from "../store/Context";

export const useStore = () => {
    const [state, dispatch] = useContext(Context);
    return [state, dispatch]
}