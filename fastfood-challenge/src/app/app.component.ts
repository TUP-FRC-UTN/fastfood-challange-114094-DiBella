import { Component, OnInit } from '@angular/core';
import { PedidoService } from './pedido.service';
import { Pedido } from './pedido';
import { PosComponent } from './pos/pos.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { KitchenComponent } from "./kitchen/kitchen.component";
import { DeliveryComponent } from './delivery/delivery.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PosComponent, FormsModule, CommonModule, KitchenComponent,DeliveryComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pedidos: Pedido[] = [];

  // Inyectamos el servicio PedidoService en el constructor
  constructor(private pedidoService: PedidoService) {}

  // Método que se ejecuta al inicializar el componente
  ngOnInit() {
    // Nos suscribimos al observable de pedidos para recibir actualizaciones
    this.pedidoService.pedidos$.subscribe(pedidos => {
      this.pedidos = pedidos;  // Actualizamos la lista de pedidos en el componente
    });
  }
}
