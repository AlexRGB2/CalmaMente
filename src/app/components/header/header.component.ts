import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Component,
  EventEmitter,
  Inject,
  Output,
  PLATFORM_ID,
} from '@angular/core';
import { ThemeService } from '../../shared/services/theme-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() toggleSidenav = new EventEmitter<void>();

  iconTheme: string = 'light_mode';
  isDarkThemeActive: boolean = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.updateIconTheme();
  }

  onToggleSidenav() {
    this.toggleSidenav.emit();
  }

  onChange(newValue: boolean): void {
    this.themeService.toggleTheme();
    this.updateIconTheme();
  }

  private updateIconTheme(): void {
    this.iconTheme = this.themeService.isDarkTheme()
      ? 'dark_mode'
      : 'light_mode';
    this.isDarkThemeActive = this.themeService.isDarkTheme();
  }
}
