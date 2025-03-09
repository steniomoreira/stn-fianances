import {
  ArrowDownUp,
  CircleCheck,
  CircleIcon,
  ExternalLink,
  ListFilter,
  Search,
  Smile,
  Trash2,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

import CardSummary from "@/components/card-summary";
import Headline from "@/components/headline";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function TransactionsPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Headline text="Transações" />

        <Button className="rounded-full">
          Adicionar Transação <ArrowDownUp />
        </Button>
      </div>

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
            label="Saldo"
            icon={
              <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-yellow-500/10 p-1">
                <Smile size={18} className="text-yellow-500" />
              </div>
            }
            amount={5400}
          />
        </div>
      </div>

      <div className="flex h-9 items-center gap-4">
        <div className="flex flex-1 items-center gap-2">
          <Input placeholder="Busque uma transação" />
          <Button variant="outline">
            <Search />
          </Button>
        </div>

        <Separator orientation="vertical" />

        <ListFilter />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50 text-xs">
              <TableHead>Descrição</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Valor</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Conta</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[150px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-transparent">
              <TableCell>Aluguel</TableCell>

              <TableCell>
                <div className="flex items-center gap-2 text-muted-foreground">
                  Despesa <TrendingDown size={18} className="text-red-500" />
                </div>
              </TableCell>
              <TableCell>R$ 1.250,00</TableCell>
              <TableCell className="text-muted-foreground">
                10 Mar, 2025
              </TableCell>
              <TableCell>Moradia</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <CircleIcon
                    className="fill-muted-foreground text-transparent"
                    size={10}
                  />
                  Carteira
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <CircleCheck size={14} className="text-primary" />
                  Pago
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground"
                  >
                    <ExternalLink />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground"
                  >
                    <Trash2 />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell>Freelacing</TableCell>

              <TableCell>
                <div className="flex items-center gap-2 text-muted-foreground">
                  Receita <TrendingUp size={18} className="text-lime-500" />
                </div>
              </TableCell>
              <TableCell>R$ 10.000,00</TableCell>
              <TableCell className="text-muted-foreground">
                15 Mar, 2025
              </TableCell>
              <TableCell>Trabalho</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <CircleIcon
                    className="fill-violet-900 text-transparent"
                    size={10}
                  />
                  Nubank
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <CircleCheck
                    size={14}
                    className="text-muted-foreground opacity-30"
                  />
                  Pago
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground"
                  >
                    <ExternalLink />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground"
                  >
                    <Trash2 />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default TransactionsPage;
