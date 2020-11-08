import axios from 'axios'
export const get = async (url) => {
    console.log(process.env.REACT_APP_API_URL)
    return await axios.get("http://localhost:4000" + url)
    .then(res => res)
    .catch(err => err)
    
}