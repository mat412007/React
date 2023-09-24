function Header({texto, imagen}){
    return (
        <>
            <div className="ColorDeTexto">
                <h1><u>FireFox</u></h1>
                <p style={{fontSize: '25px'}}>{texto}</p>
                <img src={imagen} alt="Imagen de iono de FireFox" style={{width: '400px'}}/> 
            </div>
        </>
    )
}

export default Header