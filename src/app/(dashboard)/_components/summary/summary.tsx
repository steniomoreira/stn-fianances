import { ArrowDownUp } from "lucide-react";

import CardSummary from "@/components/card-summary";
import IconWrapper from "@/components/icon-wrapper";
import { Button } from "@/components/ui/button";

function Summary() {
  return (
    <div className="space-y-4">
      <CardSummary
        label="Saldo"
        icon={<IconWrapper icon="smile" color="yellow" size="sm" />}
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
            icon={<IconWrapper icon="trending-up" color="lime" size="sm" />}
            amount={3800}
          />
        </div>
        <div className="col-span-3">
          <CardSummary
            label="Despesa"
            icon={<IconWrapper icon="trending-down" color="red" size="sm" />}
            amount={2500}
          />
        </div>
        <div className="col-span-3">
          <CardSummary
            className="bg-yellow-800/5"
            label="Investimentos"
            icon={<IconWrapper icon="piggy-bank" color="yellow" size="sm" />}
            amount={5400}
          />
        </div>
      </div>
    </div>
  );
}

export default Summary;
