import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkThemeActive: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.loadTheme();
  }

  isDarkTheme(): boolean {
    return this.isDarkThemeActive;
  }

  toggleTheme(): void {
    this.isDarkThemeActive = !this.isDarkThemeActive;
    this.updateTheme();
  }

  private loadTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('isDarkThemeActive');
      if (savedTheme) {
        this.isDarkThemeActive = JSON.parse(savedTheme);
        this.updateTheme();
      }
    }
  }

  private updateTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.isDarkThemeActive) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
      localStorage.setItem(
        'isDarkThemeActive',
        JSON.stringify(this.isDarkThemeActive)
      );
    }
  }
}
