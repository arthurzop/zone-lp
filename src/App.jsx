import React, { useState, useEffect } from "react";
import "./App.css";

// importando as imagens
import discord from "./assets/discord.png";
import footerLogo from "./assets/footer-logo.png";
import github from "./assets/github.png";
import left from "./assets/left.png";
import right from "./assets/right.png";
import logo from "./assets/logo.png";
import headerLogo from "./assets/header-logo.png";
import heroImage from "./assets/hero-image.png";
import holoStar from "./assets/holo-star.png";
import phoneMockup from "./assets/phone-mockup.png";
import cylinder from "./assets/purple-cylinder.png";
import helix from "./assets/purple-helix.png";
import diamond from "./assets/purple-diamond.png";
import donut from "./assets/purple-torus.png";
import instagram from "./assets/instagram.png";

function App() {
  return (
    <>
      <header>
        <img src={headerLogo} alt="logo zone" />
        <nav>
          <li>
            <a href="">Nossa Solução</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="" className="link-variant">
              Se Increva!
            </a>
          </li>
        </nav>
      </header>
      <section className="hero-section">
        {/* <img src={heroImage} alt="imagem de festa" /> */}
        <div className="hero-text">
          <h6>Festas, bares, clubes ou eventos musicais</h6>
          <h1>Hoje é onde?</h1>
          <h3>Encontre sua melhor zona, tudo em um só lugar!</h3>
        </div>
      </section>
      <Divider />
      <section className="zone-section">
        <div className="title-container">
          <h1 className="h11">
            Cansado de sempre perder os <br /> melhores eventos?
          </h1>
          <p>ou</p>
          <h1 className="h12">
            Descobrir pelas redes sociais <br /> que um evento já aconteceu?
          </h1>
        </div>
        <h3 className="subtitle">
          Nós sabemos que ter que procurar em várias plataformas o que tem hoje
          pode ser bem frustante
        </h3>
        <p>
          Por isso, <br /> apresentamos:
        </p>
        <img src={logo} alt="logo zone" />
        <p>
          Mais do que uma busca! Nosso app enende o que você quer, antes de você
          saber!
        </p>
        <div className="grid">
          <div className="card">
            <img src={donut} alt="donut elemento grafico" />
            <h2>Recomendações Exclusivas</h2>
            <p>
              Descubra eventos baseados nos seus interesses e nas preferências
              de seus amigos.
            </p>
          </div>
          <div className="card">
            <img src={diamond} alt="diamante 3d elemento grafico" />
            <h2>Tudo em um só lugar</h2>
            <p>
              Eventos qde todos os tipos e nichos, reunidos em apenas uma
              palataforma.
            </p>
          </div>
          <div className="card">
            <img src={helix} alt="mola elemento grafico" />
            <h2>Atualização em Tempo Real</h2>
            <p>
              Fique sempre por dentro dos eventos próximos de você à medida que
              eles surgem.
            </p>
          </div>
          <div className="card">
            <img src={cylinder} alt="cilindro elemento grafico" />
            <h2>Descoberta Social</h2>
            <p>
              Veja onde seus amigos frequentam e participe de eventos juntos.
            </p>
          </div>
        </div>
      </section>
      <img src={right} alt="adereço direito" />

      <Divider />
      <img src={left} alt="adereço esquerdo" />
      <section className="features">
        <h1>Mas o que vai ter no App?</h1>
        <h3 className="subtitle">
          Tudo o que você precisa! Basta escolher seus interesses e deixar o
          resto com a gente.
        </h3>
        <div className="bento-grid">
          <div className="top-row">
            <div className="large-card">
              <div className="stars">
                <img src={holoStar} alt="3d estrela elemento grafico" />
                <img src={holoStar} alt="3d estrela elemento grafico" />
                <img src={holoStar} alt="3d estrela elemento grafico" />
                <img src={holoStar} alt="3d estrela elemento grafico" />
                <img src={holoStar} alt="3d estrela elemento grafico" />
              </div>
              <div className="card-text-container">
                <h1>Descubra e Compartilhe eventos com amigos</h1>
                <p>
                  Veja o que seus amigos estão curtindo, participe de
                  comunidades ou convide eles para os eventos que você gostou!
                </p>
              </div>
            </div>
            <div className="square-card">
              <h1>Veja e Confirme presença</h1>
              <p>
                Com base nos seus interesses, aparecerão eventos que combinam
                com você. Lembre-se de confirmuar sua presença.
              </p>
            </div>
          </div>
          <div className="bottom-row">
            <div className="square-card purple-card">
              <h1>Confira seus próximos eventos</h1>
              <p>
                Salve os eventos que tem interesse e eles serão destacados, para
                você não esquecer o que vem aí.
              </p>
            </div>
            <div className="large-card">
              <div className="card-text">
                <h1>Mapa com eventos próximos a você</h1>
                <p>
                  Utilize o mapa dentro do aplicativo para ver o que está
                  acontecendo ao seu redor. Assim descobrindo novas festas ou
                  bares para ir com seus amigos.
                </p>
              </div>
              <img src={phoneMockup} alt="mockup celular mapa" />
            </div>
          </div>
        </div>
      </section>
      <Divider />
      <section className="inscricao">
        <h1>Ficou Interessado?</h1>
        <h3 className="subtitle">
          Se inscreva para receber todas as atualizações, e, quando começarmos
          os testes, seja o primeiro a participar da nossa zona!
        </h3>
        <div className="bottom">
          <form action="">
            <div className="input-container">
              <label htmlFor="nome">Nome:</label>
              <input type="text" name="nome" />
            </div>
            <div className="input-container">
              <label htmlFor="email">E-mail:</label>
              <input type="text" name="email" />
            </div>
            <button>Enviar</button>
          </form>
          <img src={heroImage} alt="imagem festa " />
        </div>
      </section>
      <footer>
        <div className="middle">
          <img src={footerLogo} alt="logo zone" />
          <div className="socials-container">
            <img src={discord} alt="discord" />
            <img src={github} alt="github" />
            <img src={instagram} alt="instagram" />
          </div>
          <nav>
            <li>
              <a href="">Nossa Solução</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Se Increva!</a>
            </li>
          </nav>
        </div>
        <div className="credits">
          <p>© 2024. All Rights Reserved</p>
          <p>
            Designed and Constructed by{" "}
            <a
              href="https://bento.me/arthurzop"
              target="_blank"
              className="link-variant"
            >
              arthurzop
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;

export function Divider() {
  return (
    <div className="divider-container">
      <div className="divider"></div>
    </div>
  );
}
