"use client";

import { useState } from "react";
import Botao from "@/components/botao/Botao";
import SairIcone from "@/components/icone/SairIcone";
import Input from "@/components/input/Input";
import ModalConfirmacao from "@/components/modal/ModalConfirmacao";

export default function page() {
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <main className="p-20">
      <div className="bg-white w-full h-100 rounded-md flex flex-col p-6 shadow-md ">
        <div className="flex gap-3">
          <Botao icon={<SairIcone />}>Sair</Botao>
          <Input placeholder="Digite algo..." />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-sm bg-primary px-4 py-2 text-sm text-primary-foreground transition hover:bg-primary-hover"
            onClick={() => setModalAberto(true)}
          >
            Abrir modal
          </button>
        </div>
      </div>
      <ModalConfirmacao
        titulo="Confirmar ação"
        texto="Tem certeza de que deseja continuar? Essa ação não poderá ser desfeita."
        aberto={modalAberto}
        onConfirmar={() => setModalAberto(false)}
        onCancelar={() => setModalAberto(false)}
      />
    </main>
  );
}
