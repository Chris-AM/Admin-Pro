import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public currentTheme = document.querySelector('#theme');

  constructor() { 
    console.log('Settings Service init')
  }
  getTheme(){
    const theme = localStorage.getItem('theme') || './assests/css/colors/purple-dark.css'
    this.currentTheme.setAttribute('href', theme);
  }
  changeTheme(theme: string){
    const url = `./assets/css/colors/${theme}.css`;
    this.currentTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);
  }
  public checkCurrentTheme(): void{
    const classes = document.querySelectorAll('.selector');
    classes.forEach(element => {
      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.currentTheme.getAttribute('href');
      if(btnThemeUrl === currentTheme){
        element.classList.add('working');
      }
    });
  }
}
