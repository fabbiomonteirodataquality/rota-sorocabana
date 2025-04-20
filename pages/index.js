import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">
          Rota Sorocabana
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Sou um músico</h2>
              <p className="mb-4 text-gray-600">
                Cadastre seu perfil com estilo musical, vídeos e localização.
              </p>
              <Button className="w-full">Cadastrar</Button>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Tenho um bar</h2>
              <p className="mb-4 text-gray-600">
                Registre seu bar por tipo de comida, música e localização.
              </p>
              <Button className="w-full">Cadastrar</Button>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg col-span-1 md:col-span-2">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Sou público</h2>
              <p className="mb-4 text-gray-600">
                Veja músicos, avalie bares e encontre o rolê ideal!
              </p>
              <Button className="w-full">Explorar</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
