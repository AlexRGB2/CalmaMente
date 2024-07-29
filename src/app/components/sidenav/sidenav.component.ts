import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  menus: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.generateMenu();
  }

  private generateMenu(): void {
    this.menus.push(
      ...[
        { icon: 'home', name: 'Inicio', route: '/' },
        { icon: 'psychology', name: 'Test', route: 'test' },
        { icon: 'dataset', name: 'Exportar Set de Datos', route: 'dataset' },
      ]
    );
  }
}
