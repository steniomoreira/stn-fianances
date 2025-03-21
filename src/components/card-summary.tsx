"use client";

import { Eye, EyeClosed } from "lucide-react";
import { ReactNode, useState } from "react";

import { formatCurrency } from "@/utils/formatter";

import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface CardSummaryProps {
  label: string;
  amount: number;
  icon: ReactNode;
  actionButton?: ReactNode;
  className?: string;
}

function CardSummary({
  label,
  icon,
  amount,
  actionButton,
  className,
}: CardSummaryProps) {
  const [showAmount, setShowAmount] = useState(true);

  function handleShowAmount() {
    setShowAmount((prev) => !prev);
  }

  return (
    <Card className={className}>
      <div className="flex flex-col gap-2 p-6">
        <div className="flex items-center gap-2">
          {icon}
          <p className="mr-4 text-xs text-muted-foreground">{label}</p>

          <Button variant="ghost" size="icon" onClick={handleShowAmount}>
            {showAmount ? (
              <Eye size={16} className="opacity-50" />
            ) : (
              <EyeClosed size={16} className="opacity-50" />
            )}
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">
            {showAmount ? formatCurrency(amount) : "R$ ..."}
          </h2>

          {actionButton}
        </div>
      </div>
    </Card>
  );
}

export default CardSummary;
