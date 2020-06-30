import axios from 'axios'

const api = axios.create({
    baseURL: 'http://[MY_IP]:3333' // URL DA API
})

export default api