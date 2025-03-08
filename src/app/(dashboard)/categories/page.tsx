"use client";

import { DynamicIcon, iconNames } from "lucide-react/dynamic";
import { useEffect, useState } from "react";

import Headline from "@/components/headline";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  // Debounce: Espera 3 segundos antes de atualizar o termo de busca
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 2000); // 3 segundos

    return () => clearTimeout(timeoutId); // Limpa o timeout quando o termo mudar
  }, [searchTerm]);

  // Filtra os ícones com o termo de busca "debounced"
  const filteredIcons = iconNames.filter((icon) =>
    icon.includes(debouncedSearchTerm),
  );

  return (
    <div>
      <Headline text="Categorias" />

      <Input
        type="text"
        placeholder="Buscar ícone..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="my-4"
      />

      <div className="flex flex-wrap gap-2">
        {filteredIcons.map((name) => {
          return (
            <TooltipProvider key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    key={name}
                    variant="outline"
                    className="h-[56px] w-[56px] border-0 bg-gray-500/10 p-0"
                  >
                    <DynamicIcon name={name} size={48} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </div>
  );
}

export default CategoriesPage;
