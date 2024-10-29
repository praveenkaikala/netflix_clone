import axios from 'axios';

const AxiosPrivate = axios.create({
  baseURL:'https://extraordinary-donut-659e50.netlify.app', 
  timeout: 2000, 
  headers: { 'Content-Type': 'application/json' 

  },
  withCredentials: true, 
});

export default AxiosPrivate;