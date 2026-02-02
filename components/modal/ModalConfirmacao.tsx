import { twMerge } from "tailwind-merge";

type ModalConfirmacaoProps = {
  titulo: string;
  texto: string;
  aberto: boolean;
  onConfirmar: () => void;
  onCancelar: () => void;
  confirmarTexto?: string;
  cancelarTexto?: string;
  className?: string;
};

export default function ModalConfirmacao({
  titulo,
  texto,
  aberto,
  onConfirmar,
  onCancelar,
  confirmarTexto = "Confirmar",
  cancelarTexto = "Cancelar",
  className,
}: ModalConfirmacaoProps) {
  if (!aberto) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-confirmacao-titulo"
      aria-describedby="modal-confirmacao-texto"
      onClick={onCancelar}
    >
      <div
        className={twMerge(
          "w-full max-w-md rounded-md bg-white p-6 shadow-lg",
          className,
        )}
        onClick={(event) => event.stopPropagation()}
      >
        <h2
          id="modal-confirmacao-titulo"
          className="text-lg font-semibold text-zinc-900"
        >
          {titulo}
        </h2>
        <p id="modal-confirmacao-texto" className="mt-2 text-sm text-zinc-600">
          {texto}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-sm border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100"
            onClick={onCancelar}
          >
            {cancelarTexto}
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary-hover"
            onClick={onConfirmar}
          >
            {confirmarTexto}
          </button>
        </div>
      </div>
    </div>
  );
}
