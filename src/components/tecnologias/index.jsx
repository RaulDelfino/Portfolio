import './style.css'
import { Cpu } from "phosphor-react";
export function Tecnologias(){
    return (

        <div className='tec' id='tecnologias'>

            <h3> Tecnologias <Cpu size={20} className='iconTec' /> </h3>

            <ul className='list'>
                <li>
                    
                    <img src='./../../public/html-svgrepo-com.svg'/>
                    <p>Html</p>
                </li>
                <li>   
                 
                    <img src='./../../public/css3-svgrepo-com.svg'/>
                    <p>CSS</p>
                 
                </li>
                <li>
               
                    <img src='./../../public/js-svgrepo-com.svg'/>
                    <p>Javascript</p>
                   
                </li>
                <li>
             
                    <img src='./../../public/nodejs-icon-svgrepo-com.svg'/>
                    <p>Nodejs</p>

                </li>
                <li>
               
                    <img src='./../../public/react-svgrepo-com.svg'/>
                    <p>React</p>
              
                </li>
                <li>
                    
                    <img src='./../../public/bootstrap-svgrepo-com.svg'/>
                    <p> Bootstrap</p>
                   
                </li>
            </ul>

        </div>
    )
}
