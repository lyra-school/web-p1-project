import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SubmissionsService } from '../../services/submissions.service';
import { ISubmission } from '../../interfaces/submission';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-community-entry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './community-entry.component.html',
  styleUrl: './community-entry.component.css'
})
export class CommunityEntryComponent {
  @Input() submissionData?:ISubmission;
  constructor(private _service:SubmissionsService) {}
}
