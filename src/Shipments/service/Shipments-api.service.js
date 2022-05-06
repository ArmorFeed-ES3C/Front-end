import http from "../../core/services/http-common";

export class ShipmentsApiService {
    endPoint = 'http://localhost:3001/shipments';
    getAll(){
        return http.get("/shipments");
    }
    create(data){
        return http.post("/shipments",data);
    }
    update(id, updateShipmentStatus) {
        return http.put(`${this.endPoint}/${id}`, updateShipmentStatus);
    }
}