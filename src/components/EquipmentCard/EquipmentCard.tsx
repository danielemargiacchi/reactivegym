import './EquipmentCard.css';

const EquipmentCard = ({equipment, onClick}:EquipmentProp) =>{
    const svgString = equipment.icon;
    
    return <>
    <div className='equipment-card' onClick={onClick} style={{backgroundImage: `url(${equipment.image})`}} >
        <div className="equipment-info">

        <h3 className='equipment-name'>{equipment.name}</h3>
        <span className='equipment-claim' >{equipment.claim}</span>
        </div>
        <div className='equipment-card-footer'>
        <div className='equipment-icon' dangerouslySetInnerHTML={{__html: svgString}}></div>
        <span className='equipment-price'>{equipment.pricePerMinute} €/min.</span>
        </div>


    </div>
    </>
}

export default EquipmentCard;