import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';


const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'ea8501e4ebmshb4575357b875c3bp11d6ddjsnccb622c6ff12',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchApi = async(url) => {
   const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}

