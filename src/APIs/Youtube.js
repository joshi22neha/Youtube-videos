import axios from 'axios';

const KEY = 'AIzaSyDgVF23JuX5LrXE56d6PQlrxiSvrJVNnCk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key : KEY,
    }
});