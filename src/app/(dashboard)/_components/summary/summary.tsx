import {
  ArrowDownUp,
  PiggyBank,
  Smile,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

import CardSummary from "@/components/card-summary";
import { Button } from "@/components/ui/button";

function Summary() {
  return (
    <div className="space-y-4">
      <CardSummary
        label="Saldo"
        icon={
          <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-yellow-500/10 p-1">
            <Smile size={18} className="text-yellow-500" />
          </div>
        }
        amount={2850}
        actionButton={
          <Button className="rounded-full">
            Adicionar Transação <ArrowDownUp />
          </Button>
        }
      />

      <div className="grid grid-cols-9 gap-4">
        <div className="col-span-3">
          <CardSummary
            label="Receita"
            icon={
              <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-green-500/10 p-1">
                <TrendingUp size={18} className="text-lime-500" />
              </div>
            }
            amount={3800}
          />
        </div>
        <div className="col-span-3">
          <CardSummary
            label="Despesa"
            icon={
              <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-red-500/10 p-1">
                <TrendingDown size={18} className="text-red-500" />
              </div>
            }
            amount={2500}
          />
        </div>
        <div className="col-span-3">
          <CardSummary
            className="bg-yellow-800/5"
            label="Investimentos"
            icon={
              <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-yellow-500/10 bg-opacity-10 p-1">
                <PiggyBank size={18} className="text-yellow-500" />
              </div>
            }
            amount={5400}
          />
        </div>
      </div>
    </div>
  );
}

export default Summary;
