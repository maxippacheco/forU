import axios from "axios";

const foroApi = axios.create({
	baseURL: 'http://localhost:3000/api'
});

export default foroApi;
