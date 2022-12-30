import './style.css'
import { LinkedinLogo } from "phosphor-react";
import { GithubLogo } from "phosphor-react";
import { Envelope } from "phosphor-react";
export function Footer(){
    return(
        <div className='footer' id='contatos'>
            <h3>Contatos</h3>
            <div className='icons-contatos'>
                <strong>
                    <a href='https://www.linkedin.com/in/raul-delfino-6963461a2/' target="_blank">
                        <LinkedinLogo size={32} />
                        <p>Linkedin</p>
                    </a>
                </strong>
                <strong>
                    <a href='https://github.com/RaulDelfino' target="_blank">
                        <GithubLogo size={32} />
                        <p>Github</p>
                    </a>
                </strong>
                <strong>
                    <a href='mailto:rauldossantoss@gmail.com' target="_blank">
                        <Envelope size={32} />
                        <p>Gmail</p>
                    </a>
                </strong>
            </div>
        </div>
    )
}