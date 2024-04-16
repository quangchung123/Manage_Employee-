import request from "../utils/request";
import {endpoint} from "../config/api";
export const getListCity = async () => {
    try {
        const response = await request.get(endpoint);
        return response.data
    }
    catch (err) {
        console.log(err)
    }
}
export const createCity = async (payload: any) => {
    try {
        const response = await request.post(endpoint, payload);
        return response.status;
    }
    catch (err) {
        console.log(err)
    }
}
export const deleteCity = async (index: any) => {
    try {
        const response = await request.delete(`${endpoint}/${index}`);
        return response.status;
    } catch (err) {
        console.log(err)
    }
}
export const updateCity = async (index: number, payload: any) => {
    try {
        const response = await request.put(`${endpoint}/${index}`, payload);
        return response.status;
    } catch (err) {
        console.log(err)
    }
}
export const detailCity = async (index: any) => {
    try {
        const response = await request.get(`${endpoint}/${index}`);
        return response.data;
    } catch (err) {
        console.log(err)
    }
}