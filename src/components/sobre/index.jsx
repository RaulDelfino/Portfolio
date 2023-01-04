import './style.css'
import { CSSTransition } from 'react-transition-group'

export function Sobre(){
    return (
        
        <div className ='sobre' id='sobre'>
            <div className='text'>

                    <h3>Sobre mim!</h3>
                    <p>Me chamo Raul, tenho 19 anos e estou cursando ciência da computação (3° semestre).
                    Sou apaixonado por tecnologia e venho aprendendo muito, tanto em minha faculdade, quanto por conta própria na internet.
                    Gosto de me relacionar com outras pessoas para aprender com elas e passar o meu ponto de vista sobre muitos assuntos,
                    assim tendo um ambiente seja cada vez melhor.
                    </p>

            </div>
                <div>
                    <img src='Raulfoto.jfif' alt='Foto Perfil' className='fotoPerfil'></img>
                </div>
        </div>
    )
}