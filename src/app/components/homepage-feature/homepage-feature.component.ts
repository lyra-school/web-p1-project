import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetCollectionApiService } from '../../services/met-collection-api.service';
import { IArtObject } from '../../interfaces/art-object';
import { IObjectList } from '../../interfaces/object-list';

@Component({
  selector: 'app-homepage-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage-feature.component.html',
  styleUrl: './homepage-feature.component.css'
})
export class HomepageFeatureComponent {
  private _featuredId = 36084;
  featuredArt:IArtObject | any;
  artpieces:IArtObject[];

  constructor(private _service:MetCollectionApiService) {
    this.artpieces = [];
  }

  ngOnInit() {
    this.getFeatured();
    this.getRandomArt();
  }

  getFeatured() {
    this._service.getIndividualObject(this._featuredId).subscribe(
      objectData => {
        this.featuredArt = objectData;
      }
    )
    return false;
  }

  getRandomArt() {
    this._service.getDepartmentDefinition(6).subscribe(
      result => {
        for(let i = 0;i < 6;i++) {
          let index = this.randomInt(0, result["total"]);
          let objList = result["objectIDs"];
          this._service.getIndividualObject(objList[index]).subscribe(
            result2 => {
              this.artpieces.push(result2);
            }
          )
        }
      }
    )
    return false;
  }

  private randomInt(lower: number, higher: number): number {
    // based on https://forkful.ai/en/typescript/numbers/generating-random-numbers/
    return Math.floor(Math.random() * (higher - lower + 1)) + lower;
  }
}
