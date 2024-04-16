import axios from "axios";
import {baseUrl} from "../config/api";

const request = axios.create({
    baseURL: baseUrl
})
export default request;