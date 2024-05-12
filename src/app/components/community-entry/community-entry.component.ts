import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SubmissionsService } from '../../services/submissions.service';
import { ISubmission } from '../../interfaces/submission';

@Component({
  selector: 'app-community-entry',
  standalone: true,
  imports: [],
  templateUrl: './community-entry.component.html',
  styleUrl: './community-entry.component.css'
})
export class CommunityEntryComponent {
  @Input() submissionData?:ISubmission;
  imageWidth:number = 200;
  constructor(private _service:SubmissionsService) {}
}
