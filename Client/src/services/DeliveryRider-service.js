import { DeliveryRiderHTTP } from "./httpCommon-service";



class DeliveryRiderService {

    // <=========================================Delivery Registration===================================>



    RegisterDeliveryRider(data) {
        return DeliveryRiderHTTP.post("/auth/DriverRegister", data, {

            headers: {
                "Content-Type": "application/json",
            }
        });
    }

    ChooseVehicleType(data) {
        return DeliveryRiderHTTP.put("/vehicle/VehicleTypeRegister", data, {
            headers: {
                "Content-Type": "application/json",
            }
        });
    }
    RegisterVehicleDetails(data) {
        return DeliveryRiderHTTP.put("/vehicle/VehicleDetailsSignUp", data, {
            headers: {
                "Content-Type": "Multipart/form-data",
            }
        });
    }

    // <=========================================Driver Dashboard===================================>

    GetDriverDetails(data) {
        return DeliveryRiderHTTP.get("/driver/getdriver", data, {
            headers: {
                "Content-Type": "application/json",
            }
        });
    }


    DriverProfileImageUpdate(data) {
        return DeliveryRiderHTTP.put("/driver/updatedriverprofileimage", data, {
            headers: {
                "Content-Type": "Multipart/form-data",
            }
        });
    }


    UpdateDriverDetails(data) {
        return DeliveryRiderHTTP.put("/driver/updatedriver", data, {
            headers: {
                "Content-Type": "application/json",
            }
        });
    }
    UpdateVehicleDetails(data) {
        return DeliveryRiderHTTP.put("/vehicle/EditVehicleDetails", data, {
            headers: {
                "Content-Type": "Multipart/form-data",
            }
        });
    }

    GetVehicleDetails() {
        return DeliveryRiderHTTP.get("/vehicle/Get", {
            headers: {
                "Content-Type": "application/json",
            }
        });
    }


    GetDeliveryDetails(data) {
        return DeliveryRiderHTTP.get("/delivery/getDeliveryById", data, {
            headers: {
                "Content-Type": "application/json",
            }
        });
    }

    UpdateDeliveryStatus(data) {
        return DeliveryRiderHTTP.put("/delivery/updateDeliveryStatus", data, {
            headers: {
                "Content-Type": "application/json",
            }
        });
    }

    GetAllDeliveriesForDriver(data) {
        return DeliveryRiderHTTP.get("/delivery/getAllDeliveriesForDriver", data, {
            headers: {
                "Content-Type": "application/json",
            }
        });
    }

    fetchEarningsData(data) {
        return DeliveryRiderHTTP.get("/earnings/summary", data, {
            headers: {
                "Content-Type": "application/json",
            }
        });
    }

    DriversAssign(data) {
        return DeliveryRiderHTTP.post("/orders/DriverAssign", data, {
            headers: {
                "Content-Type": "application/json",
            }
        });
    }

    DriverEarningCalculation(data) {
        return DeliveryRiderHTTP.post("/earnings/record", data, {
            headers: {
                "Content-Type": "application/json",
            }
        });
    }




}


export default new DeliveryRiderService();
