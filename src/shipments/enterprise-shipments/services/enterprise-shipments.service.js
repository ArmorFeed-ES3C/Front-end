import http from "../../../shared/services/http-common.js";

export class EnterpriseShipmentsService {
  getShipmentsById(id) {
    return http.get(`/shipments?enterpriseId=${id}`);
  }
  getCustomerById(id) {
    return http.get(`/customers/${id}`);
  }
  getShipmentById(id) {
    return http.get(`/shipments/${id}`);
  }
}
