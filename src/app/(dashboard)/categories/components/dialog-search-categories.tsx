import { IconName } from "lucide-react/dynamic";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import SearchIcons from "./search-icons";

interface DialogSearchCategoriesProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  handleIconCategories: (icon: IconName) => void;
}

function DialogSearchCategories({
  open,
  onOpenChange,
  handleIconCategories,
}: DialogSearchCategoriesProps) {
  function onCloseDialog() {
    onOpenChange(false);
  }
  function selectIconCategory(name: IconName) {
    handleIconCategories(name);
    onCloseDialog();
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Lista de ícones</DialogTitle>
          <DialogDescription>
            Selecione um ícone para representar a categoria
          </DialogDescription>
        </DialogHeader>

        <SearchIcons selectIconCategory={selectIconCategory} />
      </DialogContent>
    </Dialog>
  );
}

export default DialogSearchCategories;
