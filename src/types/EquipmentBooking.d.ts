interface EquipmentBooking {
	id: number;
	equipment_id: number;
	user_id: string;
	start_date: string; 
	end_date: string; 
}

type BookingProp = {
    booking: EquipmentBooking;
	equipment: Equipment[];
}


type BookingWithEquipment = EquipmentBooking & { equipment: Equipment | undefined };