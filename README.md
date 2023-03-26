# Welcome to Flights Service

## Features

- Implemented the Model-View-Controller (MVC) architecture to create a robust and scalable code base, enabling efficient and seamless development.
- Developed the FlightAndSearchService, a microservice that stores all data related to flights, airports, airplanes, and city details, providing a reliable API for users to book flights.
- Created the Booking service, responsible for booking flights and ensuring seat availability before confirming reservations.
- Designed and implemented the Authentication service using JSON Web Token (JWT), ensuring secure access to user data and creating a many-to-many relationship using Sequelize ORM.
- Utilized Cron to schedule the ReminderService, a feature that automatically executes at 9 AM every morning, sending reminders and email notifications to users who have booked flights.

## Project Tree

```
.
├── README.md
├── main
├── package-lock.json
├── package.json
└── src
    ├── config
    │   ├── config.json
    │   └── serverConfig.js
    ├── controllers
    │   ├── airport-controller.js
    │   ├── city-controller.js
    │   └── flight-controller.js
    ├── index.js
    ├── middlewares
    │   ├── flight-middlewares.js
    │   └── index.js
    ├── migrations
    │   ├── 20230110041426-create-city.js
    │   ├── 20230124123349-create-airport.js
    │   ├── 20230129035202-create-airplane.js
    │   └── 20230129053312-create-flights.js
    ├── models
    │   ├── airplane.js
    │   ├── airport.js
    │   ├── city.js
    │   ├── flights.js
    │   └── index.js
    ├── repository
    │   ├── airplane-repository.js
    │   ├── airport-respository.js
    │   ├── city-repository.js
    │   ├── crud-repository.js
    │   ├── flight-repository.js
    │   └── index.js
    ├── routes
    │   ├── index.js
    │   └── v1
    │       └── index.js
    ├── seeders
    │   ├── 20230124134646-add-airports.js
    │   └── 20230129045143-add-airplanes.js
    ├── services
    │   ├── airport-service.js
    │   ├── city-service.js
    │   ├── crud-service.js
    │   ├── flight-service.js
    │   └── index.js
    └── utils
        ├── error-codes.js
        └── helper.js

```

## Project Setup

- clone the project on your local
- Execute `npm install` on the same path as of your root directory of teh downloaded project
- Create a `.env` file in the root directory and add the following environment variable
  - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

- Once you have added your db config like above mentioned, then go to the src folder inside your terminal and then execute this command `npx sequelize db:create` and then executer `npx sequelize db:migrate`

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT=3000`

`SYNC_DB: FALSE`

## DB Design

- Airplane Table
- Flight
- Airport
- City
- A flight belongs to an airplane but one airplane can be used in multiple flights
- A city has many airports but one airport belongs to a city
- One airport can have many flights, but a flight belongs to one airport

## Tables

### City -> id, name, created_at, updated_at

### Airport -> id, name, address, city_id, created_at, updated_at

### Airplanes -> id, modelNumber, capacity, created_at, updated_at

### Flights ->id, flightNumber, airplaneId, departureAirportId , arrivalAirportId, arrivalTime, departureTime, price, boardingGate, createdAt, updatedAt, totalSeats

```

    Relationship -> City has many airports and Airport belongs to a city (one to many)

```

```
npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
```

## 🔗 Links

[AirTicketBookingService](https://github.com/tautik/AirTicketBookingService)
[API_Gateway](https://github.com/tautik/API_Gateway)
[Auth_Service](https://github.com/tautik/Auth_Service)
[ReminderService](https://github.com/tautik/ReminderService)
