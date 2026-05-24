type AirplaneType = "Passenger" | "Cargo" | "Military";

class Airplane {
  model: string;
  maxPassengers: number;
  speed: number;
  type: AirplaneType;

  constructor(
    model: string,
    maxPassengers: number,
    speed: number,
    type: AirplaneType,
  ) {
    this.model = model;
    this.maxPassengers = maxPassengers;
    this.speed = speed;
    this.type = type;
  }

  // Получить скорость
  getSpeed(): number {
    return this.speed;
  }

  // Установить скорость
  setSpeed(newSpeed: number): void {
    this.speed = newSpeed;
  }

  // Информация о самолете
  getInfo(): string {
    return `
Модель: ${this.model}
Пассажиров: ${this.maxPassengers}
Скорость: ${this.speed}
Тип: ${this.type}
`;
  }
}

// Создание объекта
const airplane = new Airplane(
  "Boeing 737",
  180,
  850,
  "Passenger",
);

console.log(airplane.getInfo());

airplane.setSpeed(900);

console.log("Новая скорость:", airplane.getSpeed());