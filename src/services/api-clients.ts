import axios,{CanceledError} from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key:'8510cc76077c4335bd479f5d0e5f8f74'
    },
})

export {CanceledError};

