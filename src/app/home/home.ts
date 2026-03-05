import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  sections!: Observable<any[]>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.sections = this.http.get<any[]>('/home.json');
  }
}
