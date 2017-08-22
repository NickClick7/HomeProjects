import {Injectable} from '@angular/core';
import {Http, Headers, HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
	private username : String;
	private clientId : String;
	private clientSecret : String;


	constructor(private http:Http){
		this.clientId = "c03d312afed980df313f";
		this.clientSecret = "46ad64c8df4d730a45688c5a378a9bfa2d847e92";
	}

	getUser() {
		return this.http.get("https://api.github.com/users/"+ this.username +
		 "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret)
		.map(res => res.json());
	}
	getRepos() {
		return this.http.get("https://api.github.com/users/" + this.username +
		 "/repos" + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret)
		.map(res => res.json());
	}
	updateUser( str:String) {
		this.username = str;
	}
}