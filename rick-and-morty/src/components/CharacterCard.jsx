
function CharacterCard( { personajeData }) {
    
    const { image, name, species, status, gender } = personajeData

    return(
        <div className="character-card">
            <div className="avatar">
                <img src={image} alt="" />
            </div>
            <h5>{name}</h5>
            <p><span>Especie:</span> { species }</p>
            <p><span>Status:</span> { status }</p>
            <p><span>Genero:</span> { gender }</p>
        </div>
    )
}

export default CharacterCard