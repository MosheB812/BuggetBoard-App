import { Component } from "@angular/core";
import { Bug } from "../Models/bug.model";

@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.css']
})
export class BugListComponent {
  storedBugs: Bug[] = [];

  buglist = [
    // {
    //   id: '258369',
    //   description: 'Brief issue description will be posted here1',
    //   summary: 'dummy summary 1',
    //   status: 'Open',
    //   owner: 'Moshe B.',
    //   createdBy: 'John S.',
    //   createdOn: 'Mar 28, 2020'
    // },
    // {
    //   id: '147285',
    //   description: 'Brief issue description will be posted here2',
    //   summary: 'dummy summary 2',
    //   status: 'Closed',
    //   owner: 'Moshe B.',
    //   createdBy: 'John S.',
    //   createdOn: 'Mar 28, 2020'
    // },
    // {
    //   id: '123456',
    //   description: 'Brief issue description will be posted here3',
    //   summary: 'dummy summary 3',
    //   status: 'Cancelled',
    //   owner: 'Moshe B.',
    //   createdBy: 'John S.',
    //   createdOn: 'Mar 28, 2020'
    // },
    // {
    //   id: '987654',
    //   description: 'Brief issue description will be posted here4',
    //   summary: 'dummy summary 4',
    //   status: 'Rejected',
    //   owner: 'Moshe B.',
    //   createdBy: 'John S.',
    //   createdOn: 'Mar 28, 2020'
    // },
  ];
}
