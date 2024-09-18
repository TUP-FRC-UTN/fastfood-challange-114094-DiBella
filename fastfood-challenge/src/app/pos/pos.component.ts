import { Component } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { Pedido } from '../pedido';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})
export class PosComponent {

  // Variables para almacenar el nombre del cliente y la descripción del pedido
  cliente: string = '';
  descripcion: string = '';
  status: string = 'preparado';

  // Inyectamos el servicio PedidoService en el constructor
  constructor(private pedidoService: PedidoService) {}

  // Método para crear un nuevo pedido
  crearPedido() {
    const pedido: Pedido = {
      number: Math.floor(Math.random() * 1000) + 1,  // Generar número aleatorio de pedido
      name: this.cliente,                            // Nombre ingresado
      description: this.descripcion,                 // Descripción ingresada
      date: new Date(),                               // Fecha actual
      status: this.status
    };

    // Llamamos al servicio para agregar el pedido
    this.pedidoService.agregarPedido(pedido);

    // Limpiamos los campos del formulario
    this.cliente = '';
    this.descripcion = '';
  }
}

