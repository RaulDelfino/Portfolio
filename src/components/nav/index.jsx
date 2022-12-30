import { useState } from 'react'
import "./style.css"
import { AddressBook } from "phosphor-react";
import { List } from "phosphor-react";


export function Nav(){

    const [menu, setMenu] = useState(false)

    const renderizarMenu = () => {

        if (menu === false){
            setMenu(true)
        }else{
            setMenu(false)
        }
    }

    const Menu= ()=> {
        return (
            <div className='menu'>
                <ul>
                        <li><a href="#sobre">Sobre</a></li>
                        
                        <li><a href="#tecnologias">Tecnologias</a></li>
                        <li><a href="#projetos">Projetos</a></li>
                        <li><a href="#contatos">Contatos</a></li>
                        
                </ul>
            </div>
        )
    }

    return (
        <div>
            <nav> 
                <strong> Meu Portfólio 
                    <AddressBook size={24} className='icon'/>
                </strong>
  
                <ul>
                        <li><a href="#sobre">Sobre</a></li>
                        
                        <li><a href="#tecnologias">Tecnologias</a></li>
                        <li><a href="#projetos">Projetos</a></li>
                        <li><a href="#contatos">Contatos</a></li>
                        
                </ul>

                <div className="listBar"> 
                    
                    <List size={32} onClick={renderizarMenu}/>
                    {menu ? <Menu/> : null}
                    
                </div>

            </nav>
        </div>
    )

}