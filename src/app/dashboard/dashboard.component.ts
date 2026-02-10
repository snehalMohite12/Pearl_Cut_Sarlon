import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  activeTab: 'home' | 'users' | 'settings' = 'home';
  activeSubTab: string = '';

  selectTab(tab: 'home' | 'users' | 'settings'): void {
    this.activeTab = tab;

    if (tab === 'users') {
      this.activeSubTab = 'list';
    } else if (tab === 'settings') {
      this.activeSubTab = 'profile';
    } else {
      this.activeSubTab = '';
    }
  }

  selectSubTab(subTab: string): void {
    this.activeSubTab = subTab;
  }
}
