import axios from 'axios'

//const baseurl = 'http://192.168.1.10/data'  -> Deberia ser la URL Final
const baseurl = 'http://localhost:3000/'

export const apiCall = async (url, data, headers, method) => {
    console.log(`url: ${url} | headers: ${headers} | method: ${method}`)

    const myheaders = { "Content-Type":"application/json", 'Access-Control-Allow-Origin': '*','Access-Control-Allow-Methods': 'GET' }

    const axiosConfig = {
        method,
        url: baseurl + url,
        data,
        headers
    }
    /*
    const client = axios.create(axiosConfig)

    return await client.get(axiosConfig.url, { crossDomain: true })
        .then(response => {
            console.log(response)
        })
        .catch(error => console.log(error))*/
    return axios({
        method,
        url: baseurl + url,
        data,
        headers,
        crossDomain: true
    })
}