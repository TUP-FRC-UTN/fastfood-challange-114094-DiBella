import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.css'
})
export class DeliveryComponent {
  deliveryPoint = {
    address: '',
    deliveryTime: ''
  };

  onSubmit() {
    console.log('Punto de entrega guardado:', this.deliveryPoint);
    // Aquí puedes agregar lógica para enviar la información a un servidor o servicio.
  }
}
