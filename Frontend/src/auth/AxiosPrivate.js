import axios from 'axios';

const AxiosPrivate = axios.create({
  baseURL:'https://netflix-clone-4idd.onrender.com', 
  timeout: 10000, 
  headers: { 'Content-Type': 'application/json' 

  },
  withCredentials: true, 
});

export default AxiosPrivate;