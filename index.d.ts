declare module "d3-lasso" {
  import { Selection } from "d3-selection";

  interface LassoObj {
    items(): Selection<any, any, any, any>;
    items(selection: Selection<any, any, any, any>): Lasso;
    possibleItems(): Selection<any, any, any, any>;
    notPossibleItems(): Selection<any, any, any, any>;
    selectedItems(): Selection<any, any, any, any>;
    notSelectedItems(): Selection<any, any, any, any>;
    hoverSelect(): boolean;
    hoverSelect(select: boolean): Lasso;
    closePathSelect(): boolean;
    closePathSelect(select: boolean): Lasso;
    closePathDistance(): number;
    closePathDistance(distance: number): Lasso;
    targetArea(): Selection<any, any, any, any>;
    targetArea(area: Selection<any, any, any, any>): Lasso;
    on(event: "start" | "draw" | "end", handler: () => void): Lasso;
  }

  type Lasso = LassoObj & ((selection: Selection<any, any, any, any>) => void);

  export function lasso(): Lasso;
}
