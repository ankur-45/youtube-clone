import axios from 'axios';

const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params: {
        key: 'AIzaSyAGANnrRY2sbdUZP-iiIDGSg2vbyZEEqi8',
    }
})

export default request;