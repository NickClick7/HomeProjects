import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';
import 'rxjs/add/operator/map';


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
})


export class ProfileComponent {

	currentUser = {};
	repos = [];
	username: String;

	constructor(private githubService:GithubService){
		this.currentUser = false;
	}
	searchUser(){
		this.githubService.updateUser(this.username);
		this.githubService.getUser()
		.subscribe(user => {
			this.currentUser = user;
			
			
		});
		this.githubService.getRepos()
		.subscribe(repos => {
			this.repos = repos;
			
		})
	}
  
}