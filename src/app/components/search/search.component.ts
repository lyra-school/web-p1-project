import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetCollectionApiService } from '../../services/met-collection-api.service';
import { IArtObject } from '../../interfaces/art-object';
import { IObjectList } from '../../interfaces/object-list';
import { DummyDepartment, Department } from '../../interfaces/department';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent {
  anyDept:DummyDepartment;
  deptList:Department[];
  results:IArtObject[];
  searchres:number;

  constructor(private _service:MetCollectionApiService) {
    this.anyDept = new DummyDepartment(0, "Any");
    this.deptList = [];
    this.results = [];
    this.generateDeptList();
    this.searchres = 0;
  }

  generateDeptList() {
    this._service.getDepartments().subscribe(
      depts => {
        for(let dept of depts.departments) {
          this.deptList.push(dept);
        }
      }
    )
  }

  getSearchResults(departmentId:string,searchQ:string) {
    this.results = [];
    this._service.getSearchResults(departmentId,searchQ).subscribe(
      result => {
        this.searchres = result.total;
        for(let i = 0; i < 12; i++) {
          this._service.getIndividualObject(result.objectIDs[i]).subscribe(
            obj => {
              this.results.push(obj);
            }
          )
        }
      }
    )
  }
}
