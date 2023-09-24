import '../../App.css'

function Product() {
    const titulo = 'Lenovo Thinkpad'
    const descripcion = 'ThinkPad T14 2da Gen (14, AMD). Lenovo ThinkPad es una línea de computadoras portátiles orientada principalmente a empresas o negocios. Así mismo, las ThinkPad pasaron de la empresa estadounidense IBM al consorcio Lenovo en 2005.'
    const imagen = 'src/Imagenes/Thinkpad.webp'
    const precio = '500.000'

    const estiloImagen = {
        width: '400px',
    }

    const estiloProducto = {
        height: '600px',
        width: '500px',
        backgroundColor: 'white',
        color: 'red',
        border: '5px solid black'
    }

    return (
        <>
            <div style={estiloProducto}>
                <h1>{titulo}</h1>
                <img style={estiloImagen} src={imagen} alt="Imagen de Lenovo Thinkpad" />
                <p style={{marginTop: '30px'}}>{descripcion}</p>
                <h3>Precio: ${precio}</h3>
            </div>
        </>
    )
}
export default Product