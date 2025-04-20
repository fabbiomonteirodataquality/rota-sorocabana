// pages/index.js

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <h1>Rota Sorocabana</h1>
      <p>
        Conectando <strong>bares</strong>, <strong>músicos</strong> e <strong>público</strong> em Sorocaba.
      </p>

      <section style={{ marginTop: '2rem' }}>
        <h2>Para Bares e Restaurantes</h2>
        <ul>
          <li>Cadastre seu estabelecimento</li>
          <li>Informe o tipo de comida, estilo musical e localização</li>
          <li>Encontre músicos para apresentações ao vivo</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Para Músicos e Bandas</h2>
        <ul>
          <li>Divulgue seu trabalho</li>
          <li>Informe o estilo musical</li>
          <li>Conecte-se com bares interessados</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Para o Público</h2>
        <ul>
          <li>Descubra bares por música e comida</li>
          <li>Dê sua opinião sobre músicos e lugares</li>
        </ul>
      </section>

      <footer style={{ marginTop: '4rem', fontSize: '0.9rem', color: '#666' }}>
        © {new Date().getFullYear()} Rota Sorocabana
      </footer>
    </div>
  );
}
