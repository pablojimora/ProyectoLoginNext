
export default function App() {


  class Coder {
    name: string;
    age: number;
    email: string;

    constructor(name: string, age: number, email: string) {
      // this me permite acceder a propiedades locales
      this.name = name;
      this.age = age;
      this.email = email;
    }

    saludar() {
      const letras = this.name.length
      return (
      <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-lg space-y-4">
        <h2 className="text-xl font-bold text-gray-800">Hola {this.name}, Bienvenido a Riwi</h2>
        <p className="text-xl font-bold text-gray-800">¿Sabias que tu nombre tiene {letras} letras?</p>
      </div>
      )
    }
  }
  const coder1 = new Coder("Pablo", 20, "pablo@correo.com")

  console.log(coder1.email)
  console.log(coder1.saludar())

  class Vehiculo {
    model: string;
    color: string;
    available: boolean;
    año: number;


    constructor(model: string, color: string, available: boolean, año: number) {
      this.model = model;
      this.color = color;
      this.available = available;
      this.año = año;
    }

    venderCoche() {
      return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-lg space-y-4">
          <h2 className="text-xl font-bold text-gray-800">Especificaciones del vehículo</h2>
          <p className="text-gray-600">
            <span className="font-semibold">Modelo:</span> {this.model}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Color:</span> {this.color}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Disponibilidad:</span>{" "}
            {this.available ? (
              <span className="text-green-600 font-semibold">Sí</span>
            ) : (
              <span className="text-red-600 font-semibold">No</span>
            )}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Año:</span> {this.año}
          </p>
        </div>
      );

    }

  }

  const vehiculo1 = new Vehiculo("X6", "Blue", true, 2025);
  const vehiculo2 = new Vehiculo("X7", "Black", false, 2021);



  return (
    <>
      {
        <div>
          <div>{coder1.saludar()}</div>
          <div> . </div>
          <div>{vehiculo1.venderCoche()}</div>
          <div>{vehiculo2.venderCoche()}</div>
        </div>
      }
    </>
  )
}
