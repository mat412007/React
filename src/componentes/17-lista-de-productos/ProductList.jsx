import '../../App.css'

function ProductList() {
    const titulo = 'Lenovo Thinkpad'
    const descripcion = 'ThinkPad T14 2da Gen (14, AMD). Lenovo ThinkPad es una línea de computadoras portátiles orientada principalmente a empresas o negocios. Así mismo, las ThinkPad pasaron de la empresa estadounidense IBM al consorcio Lenovo en 2005.'
    const imagen = 'src/Imagenes/Thinkpad.webp'
    const precio = '500.000'

    const estiloImagen = {
        width: '400px',
    }

    const estiloProducto = {
        height: '700px',
        width: '500px',
        backgroundColor: 'white',
        color: 'red',
        border: '5px solid black',
        marginLeft: '3px',
        marginRight: '3px'
    }

    const estiloLista = {
        display: 'flex',
        overflowX: 'auto',
        width: '900px',
        height: '600px'
    }

    return (
        <>
            <div style={estiloLista}>
                <div style={estiloProducto}>
                    <h1>{titulo}</h1>
                    <img style={estiloImagen} src={imagen} alt="Imagen de Lenovo Thinkpad" />
                    <p style={{marginTop: '30px'}}>{descripcion}</p>
                    <h3>Precio: ${precio}</h3>
                </div>
                <div style={estiloProducto}>
                <h1>{titulo}</h1>
                <img style={estiloImagen} src={imagen} alt="Imagen de Lenovo Thinkpad" />
                <p style={{marginTop: '30px'}}>{descripcion}</p>
                <h3>Precio: ${precio}</h3>
                </div><div style={estiloProducto}>
                <h1>{titulo}</h1>
                <img style={estiloImagen} src={imagen} alt="Imagen de Lenovo Thinkpad" />
                <p style={{marginTop: '30px'}}>{descripcion}</p>
                <h3>Precio: ${precio}</h3>
                </div>
                <div style={estiloProducto}>
                <h1>{titulo}</h1>
                <img style={estiloImagen} src={imagen} alt="Imagen de Lenovo Thinkpad" />
                <p style={{marginTop: '30px'}}>{descripcion}</p>
                <h3>Precio: ${precio}</h3>
                </div>
            </div>
        </>
    )
}
export default ProductList