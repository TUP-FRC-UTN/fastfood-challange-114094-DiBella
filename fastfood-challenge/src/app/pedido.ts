// pedido.model.ts
export class Pedido {
    constructor(
      public number: number,
      public name: string,
      public description: string,
      public date: Date,
      public status: string

    ) {}
  }
  