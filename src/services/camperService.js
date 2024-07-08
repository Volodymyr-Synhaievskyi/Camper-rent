import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const camperService = {
    getAll:()=>apiService.get(urls.campers.base),
    getById:(id)=>apiService.get(urls.campers.byId(id))
}
export {camperService}