import { Component, OnInit } from '@angular/core';
import { DagManagerService } from '@ngneat/dag';
import { WorkflowItem } from '../../Interface/WorkflowItem';

@Component({
  selector: 'app-family-graph',
  templateUrl: './family-graph.component.html',
  styleUrls: ['./family-graph.component.css'],
  providers: [DagManagerService],
})
export class FamilyGraphComponent implements OnInit {
  constructor(private _dagManager: DagManagerService<WorkflowItem>) {}
  startingItems: WorkflowItem[] = [
    {
      id: 1,
      name: 'Step 1',
      stepId: 1,
      parentIds: [0],
      branchPath: 1,
      map: function (arg0: (i: any) => any): number[] {
        throw new Error('Function not implemented.');
      },
    },
  ];
  ngOnInit() {
    const nextItemNumber =
      this.startingItems && this.startingItems.length
        ? this.getMaxItemNumber(this.startingItems[0])
        : 1;
    this._dagManager.setNextNumber(nextItemNumber);
  }

  getMaxItemNumber(arr: WorkflowItem) {
    return (
      Math.max.apply(
        Math,
        arr.map((i) => i.stepId)
      ) + 1
    );
  }

  // addStep would be called when a button in this component is clicked, or something similar, signalling the need to add a new step
  addStep(parentIds: number[], numberOfChildren: number = 1) {
    this._dagManager.addNewStep(parentIds, numberOfChildren, 1, {
      id: null,
      name: '',
      map: function (arg0: (i: any) => any): number[] {
        throw new Error('Function not implemented.');
      },
    });
  }

  // this method will be called when a remove button in the UI is clicked
  removeItem(stepId: number) {
    this.startingItems = this._dagManager.removeItem(
      stepId,
      [...this.startingItems],
      false
    );
  }

  //  This will update the dagModel$ observable
  addRelationForChildNode(childNodeId: number, parentNodeId: number) {
    try {
      this._dagManager.addNewRelation(childNodeId, parentNodeId);
    } catch (err) {
      // handle error
    }
  }
}
