import Botao from "@/components/botao/Botao";
import SairIcone from "@/components/icone/SairIcone";
import Input from "@/components/input/Input";

export default function page() {
  return (
    <main className="p-20">
      <div className="bg-white w-full h-100 rounded-md flex flex-col p-6 shadow-md ">
        <div className="flex gap-3">
          <Botao icon={<SairIcone />}>Sair</Botao>
          <Input placeholder="Digite algo..." />
        </div>
      </div>
    </main>
  );
}
