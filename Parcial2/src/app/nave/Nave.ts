export class Nave {
    id: number;
    nombre: string;
    empresa_fabricacion: string;
    raza_origen : string;
    imagen : string;
    costo : string;
    descripcion :string ;
    bando: string;

    public constructor(id: number, name: string, empresa_fabricacion: string,raza_origen : string,imagen : string, costo : string , descripcion : string, bando: string) {
        this.id = id;
        this.nombre = name;
        this.empresa_fabricacion = empresa_fabricacion;
        this.raza_origen = raza_origen;
        this.imagen = imagen;
        this.costo = costo;
        this.descripcion = descripcion;
        this.bando = bando;
      }
    
}
