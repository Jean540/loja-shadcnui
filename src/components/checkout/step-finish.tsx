import { useChekoutStore } from "@/stores/checkout-store";
import { Steps } from "@/types/steps";
import { Button } from "../ui/button";
import Link from "next/link";
import { generateMessage } from "@/lib/generate-message";

type Props = {
  setStep: (step: Steps) => void;
};

export const StepFinish = ({ setStep }: Props) => {
  const { name } = useChekoutStore((state) => state);

  const message = generateMessage();
  const linkZap = `https://wa.me//${
    process.env.NEXT_PUBLIC_ZAP
  }?text=${encodeURI(message)}`;

  return (
    <div className="text-center flex flex-col gap-5">
      <p>
        Perfeito <strong>{name}</strong>!
      </p>
      <p>
        Agora envie seu pedido ao nosso WhatsApp para concluir. Nosso atendente
        irá te guiar sobre o andamento do pedido.
      </p>
      <Button>
        <Link href={linkZap} target="_blank">
          Enviar para o WhatsApp
        </Link>
      </Button>
    </div>
  );
};
