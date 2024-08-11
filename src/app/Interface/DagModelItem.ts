import { DagModelItem as Model }  from '@ngneat/dag' ;

export interface DagModelItem extends Model {
  stepId: number;
  parentIds: number[];
  branchPath: number;
}