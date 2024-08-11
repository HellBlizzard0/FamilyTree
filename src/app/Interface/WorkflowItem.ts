import { DagModelItem } from './DagModelItem';

export interface WorkflowItem extends DagModelItem {
  map(arg0: (i: any) => any): number[];
  name: string;
  id: number | null;
}
