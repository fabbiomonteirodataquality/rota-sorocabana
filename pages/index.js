export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-8">
      <h1 className="text-4xl font-bold mb-4">Rota Sorocabana</h1>
      <p className="text-lg mb-6">Conectando bares, músicos e o público de Sorocaba.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a href="/bar" className="p-6 border rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Sou dono de bar</h2>
          <p>Cadastre seu bar com estilo musical, tipo de comida e localização.</p>
        </a>

        <a href="/banda" className="p-6 border rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Sou músico ou banda</h2>
          <p>Divulgue seu trabalho por estilo musical.</p>
        </a>

        <a href="/avaliacoes" className="p-6 border rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Sou público</h2>
          <p>Dê sua opinião sobre os bares e artistas da cidade.</p>
        </a>
      </div>
    </div>
  );
}
