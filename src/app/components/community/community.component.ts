import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmissionsService } from '../../services/submissions.service';
import { ISubmission, CreatedSubmission } from '../../interfaces/submission';
import { CommunityEntryComponent } from '../community-entry/community-entry.component';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [CommonModule, CommunityEntryComponent],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css'
})
export class CommunityComponent {
  submissions:ISubmission | any;
  show:boolean = false;
  constructor(private _service:SubmissionsService) {}

  ngOnInit() {
    this.fetchSubmissions();
  }

  fetchSubmissions() {
    this._service.getSubmissions().subscribe(submissions =>
      { this.submissions = submissions }
    );
  }

  enterSubmission(name:string,author:string,imageURL:string):boolean {
    let submissionToEnter:ISubmission;
    submissionToEnter = new CreatedSubmission(name,author,imageURL);
    this._service.enterSubmission(submissionToEnter).subscribe(submissions =>
      { this.submissions = submissions }
    );
    this.fetchSubmissions();
    return false;
  }
}
