import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/service/github.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private githubService: GithubService) {}

  ngOnInit() {}

  fetchGithubData() {
    // this.githubService.getUserData(this.githubUsername).subscribe((data) => {
    //   this.githubUserData = data;
    // });
  }
}
