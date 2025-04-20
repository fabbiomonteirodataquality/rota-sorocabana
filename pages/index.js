export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", color: "#333" }}>Rota Sorocabana</h1>
      <p>Conectando bares, músicos e público em Sorocaba.</p>

      <section style={{ marginTop: "2rem" }}>
        <h2>Bares e Restaurantes</h2>
        <p>Cadastre seu estabelecimento por estilo musical, tipo de comida e localização.</p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>Músicos e Bandas</h2>
        <p>Artistas podem se cadastrar e divulgar seu trabalho por estilo musical.</p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>Opinião do Público</h2>
        <p>Clientes avaliam bares e músicos com feedbacks e comentários.</p>
      </section>
    </div>
  );
}
