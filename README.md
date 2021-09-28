<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/levimurici/suricato-iot">
    <img src="images/SuricatoLogoWhite.png" alt="Logo" width="400" height="80">
  </a>

  <h3 align="center">Suricato-IOT</h3>

  <p align="center">
    Faça um sistema home-IOT do seu jeito!
    <br />
    <a href="https://github.com/levimurici/suricato-iot"><strong>Explore a doc »</strong></a>
    <br />
    <br />
    <a href="https://www.khmersubtitles.com/">View Demo (in dev)</a>
    ·
    <a href="https://github.com/levimurici/suricato-iot/issues">Report Bug (in dev)</a>
    ·
    <a href="https://github.com/levimurici/suricato-iot/issues">Request Feature (in dev)</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#sobre-o-suricato-iot">Sobre o projeto</a>
      <ul>
        <li><a href="#plataforma-baseada-em">Plataforma</a></li>
      </ul>
    </li>
    <li>
      <a href="#iniciando">Instalação</a>
      <ul>
        <li><a href="#iniciando">Pré-requisitos</a></li>
        <li><a href="#iniciando">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#customize">Customize</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">Licença</a></li>
    <li><a href="#fale-com-a-gente">Fale conosco</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Sobre o Suricato-IOT

[![Product Name Screen Shot][product-screenshot]](https://raw.githubusercontent.com/levimurici/suricato-docker/main/project-structure.drawio.png)

O projeto Suricato-IOT visa integrar dispositivos ESP/Wemos (microcontroladores com dispositivos Wifi) em uma interface central de controle onde todo o sistema é dividido em microsserviços. O objetivo central é colher dados analógicos do ambiente, controle de alarmes e integração bluetooth e subir em uma rest API. Todos esses dados serão lidos e controlados pela plataforma web chamada Suricato.

O objetivo central do projeto é trabalhar a cultura do DIY baseada na construção dos dispositivos eletrônicos e adiciona-los genericamente a plataforma web. 

### Plataforma baseada em

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
* [Docker](https://www.docker.com/)
* [Node-red](https://nodered.org/)
* [MQTT](https://mqtt.org/)
* [Express-RestAPI](https://expressjs.com/pt-br/api.html)


<!-- GETTING STARTED -->
## Iniciando

Esse é um exemplo de como baixar as imagens e começar a rodar o projeto em containers via *docker-compose*

* [Install Docker - Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
* [Install Docker - Windows](https://docs.docker.com/desktop/windows/install/)

### Instalação

1. Clone o repositório
   ```sh
   git clone https://github.com/levimurici/suricato-iot
   ```
2. Acesse o a pasta do repositório
   ```sh
   cd suricato-iot
   ```
3. Inicie os containers com o `docker-compose`
   ```sh
   docker-compose up
   ```

### Customize a imagem (In development)


<!-- USAGE EXAMPLES -->
## Usage (In development)

<!-- Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also
Link to more resources.
_For more examples, please refer to the [Documentation](https://example.com)_  -->


<!-- ROADMAP -->
## Roadmap (In development)
<!-- See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a list of proposed features (and known issues). -->


<!-- LICENSE -->
## License (In development)
<!-- Distributed under the MIT License. See `LICENSE` for more information. -->

<!-- CONTACT -->
## Fale com a gente

Levi Murici- [@Levimurici](https://twitter.com/levimurici) - levismurici@gmail.com

Wesley Decote- [@MDecote](https://twitter.com/MDecote) - wesleydecote@live.com

Link do Projeto: [https://github.com/levimurici/suricato-iot](https://github.com/levimurici/suricato-iot)



[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/levimurici/suricato-iot/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/levimurici/suricato-iot/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/levimurici/suricato-iot/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/levi-nogueira-61694ab3/
[product-screenshot]: https://github.com/levimurici/suricato-docker/blob/main/project-structure.drawio.png
