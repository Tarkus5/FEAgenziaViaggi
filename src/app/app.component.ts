import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showForm = false;
  id: number = 1;
  value: any;
  travels: any = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.fetchTravels();
  }

  private fetchTravels() {
    this.http.get<any>('http://localhost:9002/api/viaggi')
      .subscribe((travels) => {
       this.travels = travels;
      });
  }

  onFetchTravel() {
    this.fetchTravels();
  }

  openForm() {
    this.showForm = true;
  }

  getValueById(id: number) {
    this.http.get('http://localhost:9002/api/viaggi/' + id).subscribe((response) => {
      this.value = response;
    });
  }
}
