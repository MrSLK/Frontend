import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.page.html',
  styleUrls: ['./admin-landing.page.scss'],
})
export class AdminLandingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public appPages = [
    { title: 'Add a subject', url: '/admin-landing/add-subject', icon: 'mail' },
    { title: 'Remove a subject', url: '/admin-landing', icon: 'trash' },
    { title: 'View all learners', url: '/home', icon: 'heart' },
    { title: 'View all teachers', url: '/home/Archived', icon: 'archive' },
    { title: 'Teacher applications', url: '/home/Trash', icon: 'trash' },
    { title: 'Complaints', url: '/home/Spam', icon: 'warning' },
    { title: 'disable a user', url: '/home/Spam', icon: 'danger' },
  ];

}
