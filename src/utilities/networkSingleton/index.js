import axios from 'axios';

class AxiosSingleton {

    static instance = undefined;

    static createInstance = () => {
        return axios.create({})
    };

    static getInstance = () => {
        if (!AxiosSingleton.instance)
            AxiosSingleton.instance = AxiosSingleton.createInstance();
        return AxiosSingleton.instance
    }
}

export default AxiosSingleton
