import {
  ArrowDownUp,
  Eye,
  PiggyBank,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function Summary() {
  return (
    <div className="space-y-6 pr-6 pt-7">
      <Card>
        <div className="flex flex-col gap-2 p-6">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-yellow-500/10 p-1">
              <Wallet size={14} className="text-yellow-500" />
            </div>
            <p className="text-xs text-muted-foreground">Receita</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-semibold">R$ 2.700</h2>
              <Button variant="ghost" size="icon">
                <Eye size={16} className="opacity-50" />
              </Button>
            </div>
            <Button className="rounded-full">
              Adicionar Transação <ArrowDownUp />
            </Button>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-9 gap-6">
        <div className="col-span-3">
          <Card>
            <div className="flex flex-col gap-2 p-6">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-green-500/10 p-1">
                  <TrendingUp size={14} className="text-lime-500" />
                </div>
                <p className="text-xs text-muted-foreground">Receita</p>
              </div>

              <h2 className="text-xl font-semibold">R$ 2.700</h2>
            </div>
          </Card>
        </div>
        <div className="col-span-3">
          <Card>
            <div className="flex flex-col gap-2 p-6">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-red-500/10 p-1">
                  <TrendingDown size={14} className="text-red-500" />
                </div>
                <p className="text-xs text-muted-foreground">Despesa</p>
              </div>

              <h2 className="text-xl font-semibold">R$ 2.700</h2>
            </div>
          </Card>
        </div>
        <div className="col-span-3">
          <Card>
            <div className="flex flex-col gap-2 p-6">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-yellow-500/10 p-1">
                  <PiggyBank size={14} className="text-yellow-500" />
                </div>
                <p className="text-xs text-muted-foreground">Investimentos</p>
              </div>

              <h2 className="text-xl font-semibold">R$ 2.700</h2>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Summary;
