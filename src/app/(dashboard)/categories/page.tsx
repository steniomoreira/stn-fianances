"use client";

import { ExternalLink, Trash2 } from "lucide-react";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import { useState } from "react";

import Headline from "@/components/headline";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import DialogSearchCategories from "./components/dialog-search-categories";
import FormAddCategories from "./components/form-add-categories";

function CategoriesPage() {
  const [iconName, setIconName] = useState<IconName>("plus");
  const [open, setOpen] = useState(false);

  function handleIconCategories(iconName: IconName) {
    setIconName(iconName);
  }

  function handleOnOpenChange() {
    setOpen((prev) => !prev);
  }

  return (
    <div className="space-y-4">
      <Headline text="Categorias" />

      <div className="grid grid-cols-9 gap-8">
        <div className="col-span-6">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50 text-xs">
                  <TableHead className="w-[60px]">Ícone</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead className="w-[100px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-transparent">
                  <TableCell>
                    <div className="mr-2 flex h-7 w-7 items-center justify-center rounded-sm bg-gray-500/10 p-1">
                      <DynamicIcon
                        name="house"
                        size={18}
                        className="text-gray-500"
                      />
                    </div>
                  </TableCell>
                  <TableCell>Moradia</TableCell>
                  <TableCell>
                    <div className="flex items-center justify-end gap-2">
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
                  <TableCell>
                    <div className="mr-2 flex h-7 w-7 items-center justify-center rounded-sm bg-gray-500/10 p-1">
                      <DynamicIcon
                        name="plane"
                        size={18}
                        className="text-gray-500"
                      />
                    </div>
                  </TableCell>
                  <TableCell>Viagem</TableCell>
                  <TableCell>
                    <div className="flex items-center justify-end gap-2">
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
                  <TableCell>
                    <div className="mr-2 flex h-7 w-7 items-center justify-center rounded-sm bg-gray-500/10 p-1">
                      <DynamicIcon
                        name="plane"
                        size={18}
                        className="text-gray-500"
                      />
                    </div>
                  </TableCell>
                  <TableCell>Viagem</TableCell>
                  <TableCell>
                    <div className="flex items-center justify-end gap-2">
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
                  <TableCell>
                    <div className="mr-2 flex h-7 w-7 items-center justify-center rounded-sm bg-gray-500/10 p-1">
                      <DynamicIcon
                        name="plane"
                        size={18}
                        className="text-gray-500"
                      />
                    </div>
                  </TableCell>
                  <TableCell>Viagem</TableCell>
                  <TableCell>
                    <div className="flex items-center justify-end gap-2">
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

        <div className="col-span-3">
          <FormAddCategories
            iconName={iconName}
            handleOnOpenChange={handleOnOpenChange}
          />
        </div>
      </div>

      <DialogSearchCategories
        open={open}
        onOpenChange={handleOnOpenChange}
        handleIconCategories={handleIconCategories}
      />
    </div>
  );
}

export default CategoriesPage;
