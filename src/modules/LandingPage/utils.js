import {AxiosSingleton} from "../../components";

export const fetchProducts = async (query, page = 1) => {
    try {
        let response = await AxiosSingleton.getInstance().get(`https://kpr84j7mce.execute-api.ap-south-1.amazonaws.com/Prod/?query=${query}&page=${page}`)
        if (response.status === 200)
            return response.data
    } catch (e) {

    }
};
