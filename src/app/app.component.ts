import { Component } from '@angular/core';
import { Node, Options } from 'ng-material-treetable';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  treeOptions: Options<Report> = {
    capitalisedHeader: true,
    customColumnOrder: ['owner', 'name', 'backup', 'protected']
  };

  singleRootTree: Node<Report> = {
    value: {
      name: 'Reports',
      owner: 'Eric',
      protected: true,
      backup: true
    },
    children: [
      {
        value: {
          name: 'Charts',
          owner: 'Stephanie',
          protected: false,
          backup: true
        },
        children: []
      }
    ]
  };

  logNode(node: Node<Report>) {
    console.log(node);
  }
}

export interface Report {
  name: string;
  owner: string;
  protected: boolean;
  backup: boolean;
}

export interface Task {
  name: string;
  completed: boolean;
  owner: string;
}
