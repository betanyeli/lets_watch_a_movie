import axios from 'axios'

const api_endpoint = process.env.REACT_APP_DATA_APIKEY;


export const listMovies = async (query) => {
    try {
        const result = await axios.get(`${api_endpoint}s=${query}&page=100`)
        console.log("Result =>", result)
        return result.data
    } catch (error) {
        return error
    }
}

export const moreDetails = async (id) => {
    try {
        const result = await axios.get(`${api_endpoint}t=${id}&plot=full`)
       console.log("moreDetails =>", result)
        return result.data
    } catch (error) {
        return error
    }
}