import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-guage',
      subMenu: [
        { title: 'Main', url: '/' },
        { title: 'Your Progress', url: 'progress' },
        { title: 'Your Graphycs', url: 'graphycs1' },
      ],
    },
  ];

  constructor() {}
}
