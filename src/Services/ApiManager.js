import axios from 'axios'

const api_endpoint = process.env.REACT_APP_DATA_APIKEY;
const poster_endpoint = process.env.REACT_APP_POSTER_APIKEY;

export const listMovies = async (query) => {
    try {
        const result = await axios.get(`${api_endpoint}s=${query}`)
        console.log("Result =>", result)
        return result.data
    } catch (error) {
        return error
    }
}