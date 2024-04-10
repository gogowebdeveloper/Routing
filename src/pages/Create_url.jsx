import axios from "axios"

const URL=axios.create({
    baseURL:"https://fakestoreapi.com"
})

export default URL;