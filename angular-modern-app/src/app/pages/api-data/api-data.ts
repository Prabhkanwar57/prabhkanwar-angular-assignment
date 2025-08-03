// src/app/pages/api-data/api-data.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  standalone: true,
  selector: 'app-api-data',
  imports: [CommonModule],
  templateUrl: './api-data.html',
  styleUrls: ['./api-data.css'],
})
export class ApiDataComponent implements OnInit {
  users: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getUsers().subscribe((data: any) => {
      this.users = data.player; // 'player' is the array from API
    });
  }
}
