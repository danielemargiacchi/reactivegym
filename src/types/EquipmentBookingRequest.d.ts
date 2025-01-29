interface EquipmentBookingRequest {
	duration: number;
}

type RequestBody = {
    duration: number;
}

type BookProp = {
    id: number;
    requestBody: requestBody;
}