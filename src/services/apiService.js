import axios from "axios";
import {mockApiEndPoint} from "../constants/urls";

let apiService = axios.create({baseURL:mockApiEndPoint});

export {
    apiService
}
