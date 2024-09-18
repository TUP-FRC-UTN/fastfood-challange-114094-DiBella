import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pedido } from './pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  // Lista de pedidos almacenados
  private pedidos: Pedido[] = [];

  // Usamos BehaviorSubject para emitir los cambios en la lista de pedidos
  private pedidosSubject = new BehaviorSubject<Pedido[]>([]);

  pedidos$ = this.pedidosSubject.asObservable();

  constructor() { }

  // Método para agregar un nuevo pedido
  agregarPedido(pedido: Pedido) {
    this.pedidos.push(pedido); // Agregamos el pedido a la lista
    this.pedidosSubject.next(this.pedidos); // Emitimos la lista actualizada de pedidos
  }

  // Método para obtener la lista de pedidos
  obtenerPedidos(): Pedido[] {
    return this.pedidos;
  }

  // Método para actualizar el estado de un pedido
  actualizarEstadoPedido(number: number, status: string) {
    const pedido = this.pedidos.find(p => p.number === number);
    if (pedido) {
      pedido.status = status;
      this.pedidosSubject.next(this.pedidos); // Emitimos la lista actualizada de pedidos
    }
  }
}
