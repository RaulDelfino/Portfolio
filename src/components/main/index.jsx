import './style.css'

export function Main(){
    
    

    return(
        <div className='main'>
            <div className = 'name'>
                <h1>Raul Delfino</h1>
                <h2>Developer Full Stack!</h2>
                <a href="./../../public/curriculo.pdf" download>Curriculo</a>
            </div>
            <div className ='img'>
                <img src='imgPC.png' alt='Foto'></img>
                
            </div>
        </div>
    )
}