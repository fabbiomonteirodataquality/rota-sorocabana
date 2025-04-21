import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 text-gray-800 font-sans">
      <header className="sticky top-0 bg-white shadow z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-600">Rota Sorocabana</h1>
          <nav className="space-x-4 text-sm font-medium">
            <a href="#bares" className="hover:text-purple-500">Bares</a>
            <a href="#musicos" className="hover:text-purple-500">Músicos</a>
            <a href="#avaliacoes" className="hover:text-purple-500">Avaliações</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Encontre o som e o sabor de Sorocaba</h2>
          <p className="text-gray-600">Descubra bares por estilo musical, culinária e localização. Conecte-se com músicos locais e compartilhe suas experiências.</p>
        </section>

        <section id="bares" className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Bares em destaque</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow p-4">
              <Image src="/bar1.jpg" alt="Bar 1" width={400} height={200} className="rounded-lg" />
              <h4 className="font-bold mt-2">Bar do Rock</h4>
              <p className="text-sm text-gray-500">Rock • Petiscos • Centro</p>
            </div>
            <div className="bg-white rounded-xl shadow p-4">
              <Image src="/bar2.jpg" alt="Bar 2" width={400} height={200} className="rounded-lg" />
              <h4 className="font-bold mt-2">Samba e Sabor</h4>
              <p className="text-sm text-gray-500">Samba • Feijoada • Zona Norte</p>
            </div>
            <div className="bg-white rounded-xl shadow p-4">
              <Image src="/bar3.jpg" alt="Bar 3" width={400} height={200} className="rounded-lg" />
              <h4 className="font-bold mt-2">Jazz Lounge</h4>
              <p className="text-sm text-gray-500">Jazz • Massas • Campolim</p>
            </div>
          </div>
        </section>

        <section id="musicos" className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Músicos populares</h3>
          <div className="flex gap-6 overflow-x-auto pb-4">
            <div className="flex-shrink-0 w-48 bg-white rounded-xl shadow p-4">
              <Image src="/musico1.jpg" alt="Musico 1" width={180} height={180} className="rounded-full mx-auto" />
              <h4 className="text-center font-bold mt-2">Ana Jazz</h4>
              <p className="text-center text-sm text-gray-500">Jazz & Bossa Nova</p>
            </div>
            <div className="flex-shrink-0 w-48 bg-white rounded-xl shadow p-4">
              <Image src="/musico2.jpg" alt="Musico 2" width={180} height={180} className="rounded-full mx-auto" />
              <h4 className="text-center font-bold mt-2">DJ Leo</h4>
              <p className="text-center text-sm text-gray-500">Eletrônico & Funk</p>
            </div>
            <div className="flex-shrink-0 w-48 bg-white rounded-xl shadow p-4">
              <Image src="/musico3.jpg" alt="Musico 3" width={180} height={180} className="rounded-full mx-auto" />
              <h4 className="text-center font-bold mt-2">Banda Raiz</h4>
              <p className="text-center text-sm text-gray-500">Sertanejo Universitário</p>
            </div>
          </div>
        </section>

        <section id="avaliacoes">
          <h3 className="text-xl font-semibold mb-4">Avaliações recentes</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl shadow">
              <p className="text-sm text-gray-600 italic">"Adorei o ambiente do Jazz Lounge, ótima música ao vivo e comida excelente."</p>
              <p className="text-right text-xs text-gray-400 mt-2">— Camila, cliente</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow">
              <p className="text-sm text-gray-600 italic">"DJ Leo animou a noite! Perfeito pro meu bar!"</p>
              <p className="text-right text-xs text-gray-400 mt-2">— João, dono do Bar Neon</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-12 py-6 text-center text-xs text-gray-400">
        © 2025 Rota Sorocabana. Todos os direitos reservados.
      </footer>
    </div>
  );
}
