import React from 'react'
import './styles.css';
import { Button } from '@material-ui/core';
import img1 from './8401.jpg'
import img2 from './imgp.png'
import img3 from './reven.png'
import FadeIn from 'react-fade-in';
import Typing from 'react-typing-animation';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';
import {faFacebookSquare, faInstagram , faLinkedin, faWhatsapp} from '@fortawesome/free-brands-svg-icons'

function Info (){

    const Nav = () => {
        return(
            
           <div className="nav">
            <p> <FadeIn delay='100'>Jonhatan Anaya</FadeIn></p>
            <Button className='btn' variant="outlined" style={{color:'lightGreen', borderColor:'lightGreen'}} href="#contained-buttons">
            <FadeIn delay='100'> $ Payment</FadeIn>
            </Button>
        </div> 

        )
        
    }
    const AnimatedTypingComponent = (<p className="txtIntro"> 
        <Typing cursorClassName="text-light" speed={2}> 
               Web developer Lead <br/>
            <strong>HTML5  ·  MySQL  ·  Workbeanch  ·  Flexbox  ·  Node.js  ·  JavaScript  ·  CSS3  ·  Bootstrap  ·
            Responsive Design<br/>  version control system  ·  Github  ·  React.js  ·  Ofimatica  ·  React-Bootstrap <br/> 
            Heroku · UI/UX Design</strong> 
        </Typing> 
    </p>
    )
    const Intro = () => {
        return(
            <span><div className="title">
            <h1>UX Developer</h1>
            {AnimatedTypingComponent}
        </div></span>
        )
    }
    const About = () => {
        return(
            <FadeIn delay='800'>
                <div className="main">                        
                    <div className="card">
                        <div className="row">
                            <img 
                                src={img2}
                                alt="Imagen"/>
                        </div>
                        <div className="txt">
                            <p>
                                Amante de la tecnología, diseño y desarrollo de interfaces; 
                                procuro siempre la mejor interactividad entre los usuarios 
                                para así brindar una experiencia singular.
                            </p><br/>   
                            <p> Team player, creo firmemente que los objetivos grandes y 
                                significativos se logran en conjunto, sabiendo aportar de
                                manera asertiva habilidades y valores humanos.
                            </p><br/>
                            <p> Autodidacta, comprometido con el crecimiento profesional y personal.
                                Team player (Barranquilla - Colombia)
                            </p>
                        </div>
                    </div>
                
                    <div className="card2">

                        <div className="txt">
                            <p> Actualmente soy desarrollador web frontend con conocimientos en Backend y el manejo
                                de bases de datos SQL; También soy Técnico profesional en Mantenimiento de sistemas 
                                informáticos y estudiante de Ingeniería Telemática. Mi experiencia como desarrollador
                                web empezó desde el año 2016 cuando empecé a estudiar de manera virtual las tecnologías.
                            </p><br/>
                            <p>Uno de mis proyectos de <b>turnos</b> realizado y desplegado en la web 
                                donde empleo tecnologías  como <b>JavaScript</b>, <b>React.js</b>, React-Bootstrap, <b>Node js</b>, bases de datos <b>SQL</b> y <b>API REST</b>  llamado <a style={{textDecoration:'none', color:'blue'}} href="https://turnos.now.sh/">Iturn</a>;
                                El apartado de administrativo del mismo proyecto <a style={{textDecoration:'none', color:'blue'}} href="https://admon-8arxh7g35.now.sh/">aquí</a>
                            </p><br/>
                        </div>
                        <div className="row">
                            <img 
                            src={img1}
                            alt="Imagen"
                            />
                        </div>
                    </div>
                  
                    <div className="card3">
                        <div className="row">
                            <img 
                                src={img3}
                                alt="Imagen"/>
                        </div>
                        <div className="txt">
                            <p>
                                He trabajado como desarrollador web frontend de manera independiente realizando trabajos para empresas como 
                                <a style={{textDecoration:'none', color:'blue'}} href="https://edwik.github.io/corvata/">Corvata</a> & <b>EApixel</b>;
                                También diseñe una página con responsive Desing para una empresa de mensajería llamada <a style={{textDecoration:'none', color:'blue'}} href="https://mensajeros.vercel.app/">Mensajeros Urbanos</a>.
                            </p><br/>   
                            <p> Realice múltiples voluntariados, tanto en la universidad con un grupo de estudiantes desarrollando aplicativos web para mejoras en la institución, 
                                como también en una escuela local danto clases de ofimática y programación web básica.
                            </p><br/>
                            <p> Actualmente me encuentro realizando cursos en <a style={{textDecoration:'none', color:'blue'}} href="https://mensajeros.vercel.app/">platzi</a> de Mongo DB y en <a style={{textDecoration:'none', color:'blue'}} href="https://mensajeros.vercel.app/">Udemy</a> de React Native.
                                Adicional anexo mi repositorio de <a style={{textDecoration:'none', color:'blue'}} href="https://github.com/JDanaya">Github</a>
                            </p>
                        </div>
                    </div>
                </div>  

                <div className="foother">
                    <div className="first">
                       <p style={{fontFamily:'monospace', fontSize:'15px'}}>© 2016 - 2020  </p> 
                    </div>
                    <div className="second">
                        <div className="face">
                            <a href="https://www.facebook.com/jonathan.anaya.39"><FontAwesomeIcon icon={faFacebookSquare}/></a>
                        </div>
                        <div className="insta">
                            <a href="https://www.instagram.com/anayajonhatan/"><FontAwesomeIcon icon={faInstagram}/></a>
                        </div>
                        <div className="link">
                            <a href="https://www.linkedin.com/in/jonhatan-anaya-henriquez-9812a118b/"><FontAwesomeIcon icon={faLinkedin}/></a>
                        </div>
                        <div className="wsp">
                            <a href="https://wa.link/lp7gww"><FontAwesomeIcon icon={faWhatsapp}/></a>
                        </div>
                    </div>
                </div>  
            </FadeIn>
            
        )
    }

    
    return(
        <div className='padre'>
            <Nav/>
            <Intro/> 
            <About/>
        </div>
    )
  }


export default Info