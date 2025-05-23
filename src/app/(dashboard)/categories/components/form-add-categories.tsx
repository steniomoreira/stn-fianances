import { DynamicIcon, IconName } from "lucide-react/dynamic";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface FormAddCategoriesProps {
  iconName: IconName;
  handleOnOpenChange: () => void;
}

function FormAddCategories({
  iconName,
  handleOnOpenChange,
}: FormAddCategoriesProps) {
  return (
    <Card>
      <CardHeader>Adicionar uma nova categoria</CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4">
          <div className="flex gap-2">
            <Button
              type="button"
              variant="secondary"
              onClick={handleOnOpenChange}
              className="h-9 w-9"
            >
              <DynamicIcon name={iconName} size={18} />
            </Button>

            <Input placeholder="Digite o nome da categoria" />
          </div>

          <Button className="self-end">Adicionar categoria</Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default FormAddCategories;
