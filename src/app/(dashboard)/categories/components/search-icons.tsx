import debounce from "lodash.debounce";
import { DynamicIcon, IconName, iconNames } from "lucide-react/dynamic";
import { useMemo, useState } from "react";
import { FixedSizeGrid as Grid } from "react-window";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  COLUMN_COUNT,
  GRID_HEIGHT,
  GRID_WIDTH,
  ICON_SIZE,
} from "../constants/grid-icons-constants";

interface SearchIconsProps {
  selectIconCategory: (iconName: IconName) => void;
}

function SearchIcons({ selectIconCategory }: SearchIconsProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredIcons = useMemo(
    () =>
      iconNames.filter((iconName) =>
        iconName.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [searchTerm],
  );

  const rowCount = Math.ceil(filteredIcons.length / COLUMN_COUNT);

  const debouncedSetSearchTerm = debounce((value) => setSearchTerm(value), 300);

  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="Buscar ícone..."
        defaultValue={searchTerm}
        onChange={(e) => debouncedSetSearchTerm(e.target.value)}
      />
      <TooltipProvider>
        <div className="w-full rounded-md border p-2">
          <Grid
            width={GRID_WIDTH}
            height={GRID_HEIGHT}
            columnCount={COLUMN_COUNT}
            columnWidth={ICON_SIZE}
            rowCount={rowCount}
            rowHeight={ICON_SIZE}
          >
            {({ columnIndex, rowIndex, style }) => {
              const index = rowIndex * COLUMN_COUNT + columnIndex;

              if (index >= filteredIcons.length) return null;

              const iconName = filteredIcons[index];

              return (
                <div style={style}>
                  <Tooltip key={iconName}>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        className="h-[56px] w-[56px] border-0 bg-gray-500/10 p-0"
                        onClick={() => selectIconCategory(iconName)}
                      >
                        <DynamicIcon name={iconName} size={48} />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>{iconName}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              );
            }}
          </Grid>
        </div>
      </TooltipProvider>
    </div>
  );
}

export default SearchIcons;
