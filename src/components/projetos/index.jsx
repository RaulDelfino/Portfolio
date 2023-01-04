import './style.css'
import { useState } from 'react'
import { X } from "phosphor-react";


export function Projetos(){
        const [isOpen, setIsOpen] = useState(false);
      
        const openModal = () => {
          setIsOpen(true);
        };
      
        const closeModal = () => {
          setIsOpen(false);
       
        };
        const stopPropagation = (e) => {
            e.stopPropagation();
          };

        const [titulo, setTitulo] = useState('')
        const [descricao, setDescricao] = useState('')
        const [imagem , setImagem] = useState('')
        const [links , setLinks] = useState([])

        function handleClick(titulo, descricao, img, links){
            openModal()
            setTitulo(titulo)
            setDescricao(descricao)
            setImagem(img)
            setLinks(links)
        }

        const modalTitles= {
            rocketPay: 'Projeto RocketPay',
            listaDePresença:'Projeto Lista De Presença',
            controleFinanceiro: 'Projeto Controle Financeiro',
            churrascometro:'Projeto Churrascometro',
            calculadoraIMC: 'Projeto Calculadora de IMC'
        }

        const modalDesc = {
            rocketPay: `Projeto realizado em um evento proporcionado pela RocketSeat. Aonde podemos realizar o cadastro de um cartão de Crédito. As Tecnologias utilizadas foram : HTML, CSS, JavaScript. E tive a oportunidade de aprender sobre Mascaras e Expressões Regulares.`,
            listaDePresença:'Esse projeto traz um input aonde podemos escrever um Nome para ser adicionado na lista de presença em conjunto a o horário do envio. Tecnologias ultilizadas para o desenvolvimento: ReactJs , CSS e API.',
            controleFinanceiro: 'Projeto realizado para um Controle Financeiro, aonde podemos escrever o nome do lucro ou da dispesa, apos isso é calculado o saldo final de sua conta. Tecnologias utilizadas: HTML, CSS e JavaScript. Além de aprimorar meus conhecimentos em armazenamento local, com o LocalStorage. ',
            churrascometro:'Precisa fazer um Churrasco e não sabe o quanto de comida e bebida comprar? o Churrascometro pode te ajudar. Informe o quanto de adultos, crianças e a duração do evento que ele calculará o quanto de comida você precisa para o seu Churrasco. Tecnologias: HTML, CSS e JavaScript.',
            calculadoraIMC: 'Precisa saber quanto é o seu IMC ( Índice de Massa Corpórea )? Este projeto calcula e apresenta as informações do seu estado corporal. Tecnologias utilizadas: HTML, CSS, JavaScript'
        }

        const modalImagens = {
            rocketPay: 'Project-Rocketpay.jpg',
            listaDePresença:'Project-ListaDePresença.jpg',
            controleFinanceiro: 'Project-Control.jpg',
            churrascometro:'Project-Churrascometro.png',
            calculadoraIMC: 'Project-CalculadoraIMC.png'
        }

        const modalLinks ={
            rocketPay: ['https://explorer-lab-gamma.vercel.app/','https://github.com/RaulDelfino/Explorer-lab'],
            listaDePresença:['https://lista-de-presenca-pi.vercel.app/','https://github.com/RaulDelfino/ListaDePresenca'],
            controleFinanceiro: ['https://rauldelfino.github.io/Controlefinaceiro/','https://github.com/RaulDelfino/Controlefinaceiro'],
            churrascometro:['https://rauldelfino.github.io/Churrascometro/','https://github.com/RaulDelfino/Churrascometro'],
            calculadoraIMC: ['https://rauldelfino.github.io/Calculadora-IMC/','https://github.com/RaulDelfino/Calculadora-IMC']
        }




        function Modal(props){
            return(

                <div className='modal-overlay' onClick={closeModal}>
                    <div className='modal-content' onClick={stopPropagation}>
                        <h1> {props.title} </h1>
                        <img src={props.imagem}/>
                        <p>{props.descricao}</p>
                        <div>
                            <a href={props.linkRepo} target="_blank">Repositorio</a>
                            <a href={props.linkSite} target="_blank">Visite</a>
                        </div>
                        <button onClick={closeModal}><X size={32} /></button>
                    </div>
                </div>
            )
        }



    return (

        <div className='projetos' id='projetos'>
            <h3>Projetos</h3>

            <ul className='listProjects'>
                {isOpen ? <Modal title ={titulo}
                descricao={descricao}
                imagem = {imagem}
                linkSite={links[0]}
                linkRepo = {links[1]}
                /> : null }
                <li><img src='Project-Rocketpay.jpg' onClick={() => handleClick(modalTitles.rocketPay, modalDesc.rocketPay, modalImagens.rocketPay, modalLinks.rocketPay)}/></li>

                <li><img src='Project-ListaDePresença.jpg'  onClick={() => handleClick(modalTitles.listaDePresença, modalDesc.listaDePresença, modalImagens.listaDePresença, modalLinks.listaDePresença)}/></li>

                <li><img src='Project-Control.jpg' onClick={() => handleClick(modalTitles.controleFinanceiro, modalDesc.controleFinanceiro, modalImagens.controleFinanceiro, modalLinks.controleFinanceiro)} /></li>
                
                <li><img src='Project-Churrascometro.png' onClick={() => handleClick(modalTitles.churrascometro, modalDesc.churrascometro, modalImagens.churrascometro, modalLinks.churrascometro)}/></li>

                <li><img src='Project-CalculadoraIMC.png' onClick={() => handleClick(modalTitles.calculadoraIMC, modalDesc.calculadoraIMC, modalImagens.calculadoraIMC, modalLinks.calculadoraIMC)}/></li>

                <li><p>Em Breve</p></li> 
            </ul>
            
        </div>
    )


}