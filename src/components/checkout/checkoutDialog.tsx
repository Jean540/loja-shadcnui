"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { StepUser } from "./step-user";
import { Steps } from "@/types/steps";
import { StepAddress } from "./step-address";
import { StepFinish } from "./step-finish";

type Props = {
  open: boolean;
  onOpenChange: (arg: boolean) => void;
};

export const CheckoutDialog = ({ open, onOpenChange }: Props) => {
  const [step, setStep] = useState<Steps>("user");

  const Content = {
    user: {
      title: "Dados Pessoas",
      progress: 1,
      step: <StepUser setStep={setStep} />,
    },
    address: {
      title: "Endereço de entrega",
      progress: 2,
      step: <StepAddress setStep={setStep} />,
    },
    finish: {
      title: "Envio para o Whatsapp",
      progress: 3,
      step: <StepFinish setStep={setStep} />,
    },
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{Content[step].title}</DialogTitle>
        </DialogHeader>
        <Progress
          value={(Content[step].progress / Content["finish"].progress) * 100}
        />
        <div className="flex flex-col gap-3">{Content[step].step}</div>
      </DialogContent>
    </Dialog>
  );
};
