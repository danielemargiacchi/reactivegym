interface Equipment {
	id: number;
	name: string;
	claim: string;
	icon: string; 
	image: string; 
	pricePerMinute: number;
}

type EquipmentProp = {
    equipment: Equipment;
    onClick?: () => void;
}