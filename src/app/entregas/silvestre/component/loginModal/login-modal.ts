import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ZeldaCompanion } from '../../model/zeldaCompanionInterface';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-modal.html',
  styleUrls: ['./login-modal.css'],
})
export class LoginModalComponent {
  @Input() visible = false;
  @Input() usuarioInicial: string | null = null;
  @Input() companions: ZeldaCompanion[] = [];
  @Output() close = new EventEmitter<null | { nombre: string; email: string; companionFav: string }>();

  nombre = '';
  email = '';
  companionFav = '';
  error = '';

  ngOnInit() {
    if (this.usuarioInicial) this.nombre = this.usuarioInicial;
  }

  validarEmail(email: string) {
    const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return re.test(email);
  }

  submit() {
    if (this.nombre.trim().length < 2) {
      this.error = 'El nombre debe tener al menos 2 caracteres.';
      return;
    }
    if (!this.validarEmail(this.email)) {
      this.error = 'Introduce un email válido.';
      return;
    }

    this.close.emit({ nombre: this.nombre.trim(), email: this.email.trim(), companionFav: this.companionFav });
    this.resetAndClose();
  }

  cancel() {
    this.close.emit(null);
    this.resetAndClose();
  }

  private resetAndClose() {
    this.nombre = '';
    this.email = '';
    this.companionFav = '';
    this.error = '';
  }
}
