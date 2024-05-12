import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private githubUrl = 'https://api.github.com';
  constructor(private http: HttpClient) {}

  getUserData(username: string) {
    return this.http.get(`${this.githubUrl}/users/${username}`);
  }
}
