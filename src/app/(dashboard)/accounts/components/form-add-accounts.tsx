import { useState } from "react";

import PickerColor from "@/components/picker-color";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function FormAddAccounts() {
  const [color, setColor] = useState("#414141");

  function handleOnChangeColor(color: string) {
    setColor(color);
  }
  return (
    <Card>
      <CardHeader>Adicionar uma nova conta</CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4">
          <Input placeholder="Número da conta" />
          <Input placeholder="Nome da conta" />

          <div className="flex w-fit items-center gap-2 rounded-md bg-black px-3 py-1">
            <PickerColor color={color} handleOnChange={handleOnChangeColor} />
            <p className="text-muted-foreground">{color}</p>
          </div>

          <Button className="self-end">Adicionar categoria</Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default FormAddAccounts;
