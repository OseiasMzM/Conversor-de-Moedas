import axios from "axios"

//baseURL: 'https://free.currconv.com/api/v7/convert?q=USD_BRL&compact=ultra&apiKey=8d71548276b0f34e87e8'

// > convert?q=USD_BRL&compact=ultra&apiKey=8d71548276b0f34e87e8

const api = axios.create({
    baseURL: 'https://free.currconv.com/api/v7'
})
export default api;