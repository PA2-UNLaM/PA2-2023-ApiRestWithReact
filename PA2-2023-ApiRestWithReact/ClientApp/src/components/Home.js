import React, { Component } from 'react';
import IconImage from '../assets/Icon.PNG'
export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
        <div>
            <meta charSet="utf-8" />
        <h1>Bienvenidos a Programaci&oacute;n Avanzada II</h1>
            <p>Vamos a estar retomando de avanzada I conocimientos de programaci&oacute;n estructurada y nociones de programaci&oacute;n orientada a objetos, es deseable tener nociones sobre el funcionamiento de una aplicaci&oacute;n Web: html &minus; cliente (browser) &minus; Servidor. Se har&aacute; foco en lograr tener los conocimientos suficientes en lo que supone la construcci&oacute;n de una aplicaci&oacute;n web ASP.NET web desde cero en el lenguaje c#, con buenas pr&aacute;cticas referentes a patrones de arquitectura de aplicaciones y tecnolog&iacute;as vigentes. </p>
            <img src={IconImage} alt="icon image" style={{ width: '400px', }} />
            <p>Esta asignatura es de importancia, dado que realiza grandes aportes al desarrollo profesional con respecto a&#58; relevar requerimientos, analizar, dise&ntilde;ar, planificar, dirigir, desarrollar, implementar y probar sistemas web basados en .net framework. Se abordar&aacute;n los t&oacute;picos y sus contenidos de una forma te&oacute;rica y pr&aacute;ctica utilizando metodolog&iacute;as agiles. Esta pr&aacute;ctica ser&aacute; realizada en clase en acompa&ntilde;amiento del profesor en laboratorio, a los efectos de afianzar su conocimiento en cada tema tratado.</p>
        <h1>Readme</h1>
            <p>Al momento de iniciar un desarrollo de software debemos preguntarnos que valor agregamos al cliente o usuario, con base en los requerimientos, y si este es verificable. Sobre este tema, Stiwart Alvarado Z&uacute;&ntilde;iga (Scrum Master en el BCCR) nos introduce de esta manera&#58;</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/AwdF8e1DeTk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>Dado este video introductorio, podemos avanzar con un nuevo entregable del trabajo practico principal.
                    Consigna&#58; Agregar en readme del repositorio del proyecto, la historia de usuario o caso de uso con criterios de aceptaci&oacute;n.
            </p>
        </div>
    );
  }
}
