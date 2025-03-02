import axios from 'axios';

const AxiosPrivate = axios.create({
  baseURL:'http://localhost:8000', 
  timeout: 100000, 
  headers: { 'Content-Type': 'application/json' 

  },
  withCredentials: true, 
});

export default AxiosPrivate;