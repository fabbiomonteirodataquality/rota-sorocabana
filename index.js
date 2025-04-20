export default function Home() {
  return (
    <div>
      <h1>Bem-vindo ao Rota Sorocabana!</h1>
      <p>Esse é um site para bares, restaurantes e músicos.</p>
    </div>
  );
}

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function RotaSorocabana() {
  const [section, setSection] = useState("home");

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Rota Sorocabana</h1>
      <div className="flex gap-4 mb-6">
        <Button onClick={() => setSection("bares")}>Bares & Restaurantes</Button>
        <Button onClick={() => setSection("musicos")}>Músicos & Bandas</Button>
        <Button onClick={() => setSection("opinioes")}>Opiniões</Button>
      </div>

      {section === "home" && (
        <p className="text-lg">Descubra, compartilhe e conecte-se com a cena musical e gastronômica de Sorocaba.</p>
      )}

      {section === "bares" && (
        <Card className="mb-4">
          <CardContent className="space-y-3">
            <h2 className="text-xl font-semibold">Cadastrar Bar ou Restaurante</h2>
            <Input placeholder="Nome do Estabelecimento" />
            <Input placeholder="Estilo de Música (ex: Rock, MPB)" />
            <Input placeholder="Tipo de Comida (ex: Pizza, Feijoada)" />
            <Input placeholder="Localização (bairro, rua)" />
            <Textarea placeholder="Descrição ou Informações adicionais" />
            <Button>Cadastrar</Button>
          </CardContent>
        </Card>
      )}

      {section === "musicos" && (
        <Card className="mb-4">
          <CardContent className="space-y-3">
            <h2 className="text-xl font-semibold">Cadastrar Músico ou Banda</h2>
            <Input placeholder="Nome do Músico ou Banda" />
            <Input placeholder="Estilo Musical (ex: Sertanejo, Jazz)" />
            <Textarea placeholder="Descrição, redes sociais, contatos..." />
            <Button>Cadastrar</Button>
          </CardContent>
        </Card>
      )}

      {section === "opinioes" && (
        <Card className="mb-4">
          <CardContent className="space-y-3">
            <h2 className="text-xl font-semibold">Opiniões do Público</h2>
            <Input placeholder="Seu nome" />
            <Input placeholder="Sobre qual bar ou músico?" />
            <Textarea placeholder="Escreva sua opinião aqui" />
            <Button>Enviar Opinião</Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
