import React from "react";
import styles from "./titulos.module.css";
import Header from "../components/header";
import Card from "../components/cards";
import Footer from "../components/footer";
import Section from "../components/section";

export default function Titulos() {
  return (
    <div className={styles.container}>

      <Header />

      <main className={styles.main}>

        <Section titulo={"Conquistas Principais"}>
          <Card ano={2012} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"} detalhes={"Corinthias 1 X 0 Chelsea"} textoAlt={"Imagem do troféu do mundial de clubes de 2012"} titulo={"Mundial de clubes "} />
          <Card ano={2012} capa={"https://cdn.meutimao.com.br/fotos-do-corinthians/w614/2020/05/27/taca_libertadores_6oik.jpg"} detalhes={"Corinthians 2 x 0 Boca Juniors"} textoAlt={"Imagem do troféu da Copa Libertadores da América 2012"} titulo={"Copa Libertadores da América "} />
          <Card ano={2000} capa={"https://live.staticflickr.com/1233/1368635733_c03e1a5e96_z.jpg"} detalhes={"Corinthians 0(4) x 0(3) Vasco"} textoAlt={"Imagem do troféu da Copa Libertadores da América 2000"} titulo={"Mundial de clubes"} />

        </Section>

        <Section titulo={"Campeonatos Brasileiros"}>
          <Card ano={2017} capa={"https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2017/05/13105454/ta%C3%A7a-campeonato-brasileiro.jpeg"}
            detalhes={"7º título brasileiro"} textoAlt={"Imagem do troféu do campeonato brasileiro de 2017"} titulo={"Campeonato Brasileiro"} />

          <Card ano={2015} capa={"https://s2.glbimg.com/XDy3QbqqWkC6ZYfmelsOQU0YnM0=/560x350/e.glbimg.com/og/ed/f/original/2015/11/04/20150922181217_1.jpeg"}
            detalhes={"6º título brasileiro"} textoAlt={"Imagem do troféu do Campeonato Brasileiro 2015"} titulo={"Campeonato Brasileiro"} />

          <Card ano={2011} capa={"https://s2.glbimg.com/XDy3QbqqWkC6ZYfmelsOQU0YnM0=/560x350/e.glbimg.com/og/ed/f/original/2015/11/04/20150922181217_1.jpeg"}
            detalhes={"5º título brasileiro"} textoAlt={"Imagem do troféu do Campeonato Brasileiro 2011"} titulo={"Campeonato Brasileiro"} />

        </Section>

        <Section titulo={"Campeonatos Estaduais"}>

          < Card ano={2019} capa={"https://conteudo.imguol.com.br/c/esporte/93/2019/03/28/trofeu-do-campeonato-paulista-de-2019-1553785004249_v2_450x450.jpg"}
            detalhes={"30º título estadual"} textoAlt={"Imagem do troféu do Campeonato Paulista 2019"} titulo={"Campeonato Paulista"} />

          < Card ano={2018} capa={"https://conteudo.imguol.com.br/c/esporte/93/2019/03/28/trofeu-do-campeonato-paulista-de-2019-1553785004249_v2_450x450.jpg"}
            detalhes={"29º título estadual"} textoAlt={"Imagem do troféu do Campeonato Paulista 2018"} titulo={"Campeonato Paulista"} />

          < Card ano={2017} capa={"https://conteudo.imguol.com.br/c/esporte/93/2019/03/28/trofeu-do-campeonato-paulista-de-2019-1553785004249_v2_450x450.jpg"}
            detalhes={"28º título estadual"} textoAlt={"Imagem do troféu do Campeonato Paulista 2017"} titulo={"Campeonato Paulista"} />


        </Section>

        <Section titulo={"Outras conquistas"}>

        <Card ano={2009} capa={"https://jpimg.com.br/uploads/2017/04/I_20090702_013338.jpg"}
              detalhes={"Corinthians 2 x 0 Internacional"} textoAlt={"Troféu da Copa do Brasil 2009"} titulo={"Copa do Brasil"} />

            <Card ano={2013} capa={"https://veja.abril.com.br/wp-content/uploads/2016/06/esporte-final-recopa-corinthians-sao-paulo20130718-2779-original.jpeg?quality=70&strip=info&w=928"}
              detalhes={"Corinthians 3 x 1 São Paulo"} textoAlt={"Troféu da Recopa Sul-Americana 2013"} titulo={"Recopa Sul-Americana"} />

            <Card ano={2002} capa={"https://s2-ge.glbimg.com/ns4D28rFD0LoJX4ACDWvgqnm55A=/203x0:413x377/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/I/z/kBgcjAR8ayXwg7Wn7XSA/corinthians2002.jpg"}
              detalhes={"Corinthians 3 x 2 Brasiliense"} textoAlt={"Troféu da Copa do Brasil 2002"} titulo={"Copa do Brasil"} />

        </Section>

      </main>

      <Footer />

    </div>
  );
};

