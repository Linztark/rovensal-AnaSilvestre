import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginModalComponent } from '../loginModal/login-modal';
import { CompanionPickerComponent } from '../companionPicker/companion-picker';
import { ZeldaCompanionService } from '../../service/zeldaCompanion-service';
import { ZeldaCompanion } from '../../model/zeldaCompanionInterface';


@Component({
  selector: 'app-silvestre',
  standalone: true,
  imports: [RouterModule, CommonModule, LoginModalComponent, CompanionPickerComponent],
  templateUrl: './silvestreComponent.html',
  styleUrls: ['./silvestreComponent.css'],
})
export class SilvestreComponent {
  showLogin = false;
  showPicker = false;
  companions: ZeldaCompanion[] = [];
  selectedUser: null | { nombre: string; email: string; companionFav: string } = null;
  selectedCompanion: ZeldaCompanion | null = null;

  constructor(private companionService: ZeldaCompanionService) {
    this.loadCompanions();
  }

  loadCompanions() {
    this.companionService.getAllCompanions().subscribe(list => (this.companions = list));
  }

  onLoginClose(payload: any) {
    this.showLogin = false;
    if (payload) {
      this.selectedUser = payload;
      this.selectedCompanion = this.companions.find(c => c.id === payload.companionFav) ?? null;
    }
  }

  onPickerClose(c: ZeldaCompanion | null) {
    this.showPicker = false;
    if (c) this.selectedCompanion = c;
  }
}



