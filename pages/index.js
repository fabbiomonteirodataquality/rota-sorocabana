export default function Home() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Rota Sorocabana</h1>
      <p>Descubra bares, restaurantes, músicos e bandas em Sorocaba!</p>

      <section>
        <h2>Bares e Restaurantes</h2>
        <p>Encontre lugares por tipo de comida, estilo musical e localização.</p>
        <ul>
          <li>🍕 Pizzarias com música ao vivo</li>
          <li>🍔 Hamburguerias com rock</li>
          <li>🍣 Japoneses com jazz</li>
        </ul>
      </section>

      <section>
        <h2>Músicos e Bandas</h2>
        <p>Conheça artistas locais por estilo musical. Donos de bares podem encontrá-los aqui!</p>
        <ul>
          <li>🎸 Rock</li>
          <li>🎤 Sertanejo</li>
          <li>🎹 MPB</li>
        </ul>
      </section>

      <section>
        <h2>Avaliações</h2>
        <p>Veja o que o público está dizendo sobre os locais e músicos!</p>
        <ul>
          <li>⭐⭐⭐⭐ - Bar do João: “Melhor samba da cidade”</li>
          <li>⭐⭐⭐ - Banda XYZ: “Som bom, mas atrasaram”</li>
        </ul>
      </section>
    </div>
  );
}
