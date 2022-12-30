import './style.css'

export function Sobre(){
    return (
        <div className ='sobre' id='sobre'>
            <div className='text'>
                <h3>Sobre mim!</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry
                     's standard dummy text ever since the 1500s, when an un
                     known printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker .
                     </p>
            </div>
            <img src='' alt='Foto Perfil' className='foto'></img>
        </div>
    )
}