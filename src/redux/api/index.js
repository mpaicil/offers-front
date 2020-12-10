import axios from 'axios'

const baseurl = `http://localhost:3000/`

export const apiCall = async (url, data, headers, method) => {
    console.log(`url: ${url} | headers: ${headers} | method: ${method}`)

    return axios({
        method,
        url: baseurl + url,
        data,
        headers,
        crossDomain: true
    })
}