import { Component, OnInit } from '@angular/core';
import { Pedido } from '../pedido';
import { PedidoService } from '../pedido.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  pedidos: Pedido[] = [];
  pedidosEnPreparacion: Pedido[] = [];
  pedidosListos: Pedido[] = [];

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.pedidoService.pedidos$.subscribe((pedidos: Pedido[]) => {
      this.pedidos = pedidos;
      this.actualizarSecciones();
    });
  }

  actualizarSecciones() {
    this.pedidosEnPreparacion = this.pedidos.filter(pedido => pedido.status === 'preparado');
    this.pedidosListos = this.pedidos.filter(pedido => pedido.status === 'listo');
  }

  prepararPedido(pedido: Pedido) {
    this.pedidoService.actualizarEstadoPedido(pedido.number, 'preparado');
    alert(`El pedido #${pedido.number} está en preparación`);
  }

  completarPedido(pedido: Pedido) {
    this.pedidoService.actualizarEstadoPedido(pedido.number, 'listo');
    alert(`El pedido #${pedido.number} está listo para ser entregado`);
  }
}
