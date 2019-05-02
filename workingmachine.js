//practicing use of objects.

const cars = [
  {
    model: 'Tacoma',
    fuelType: 'gasoline',
    year: 1994,
    brand: 'Toyota',
    speed: 115,
    fuelLevel: 100,
    fuelPerRound: 15
  },
  {
    model: 'Roadster',
    fuelType:'electric',
    year: 2019,
    brand: 'Tesla',
    speed: 250,
    fuelLevel: 100,
    fuelPerRound: 5
  },
  {
    model: 'Beetle',
    fuelType: 'gasoline',
    year: 1970,
    brand: 'Volkswagen',
    speed: 99,
    fuelLevel: 100,
    fuelPerRound: 10
  }
]
//practicing arrow function and metod forEach.
const displayModel = cars.forEach(element => {
    console.log("This is the car we are looking to work with: " + element.model + " from: " + element.brand)
  })

//practicing arrow function and metod maph.
const rounds = cars.map( car => {
  let counter = 0;
    while(car.fuelLevel > 0){
      car.fuelLevel = car.fuelLevel - car.fuelPerRound;
      counter++;
    }
    console.log(`${car.model} can make ${counter} rounds per thank`);
})

//practicing arrow function and metod find in array.
//this metod return the first element that has the parameters named in the body of the function.
const foundOldCar = cars.find(car => car.year < 1980 )

const foundNewCar = cars.find(car => car.year > 2000 )
