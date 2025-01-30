# ReactiveGym
ITS ICT Piemonte React's final project. A web application to view and book gym equipment.

[Link deploy on Netlify](https://reactivegym.netlify.app/)


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Description](#description)
- [Project Structure](#project-structure)
- [Notes](#notes)
- [License](#license)
- [Author](#author)

## Installation

1. **Clone** the repository:

   ```bash
   git clone https://github.com/danielemargiacchi/reactivegym.git
   cd gym
   ```

2. **Install** the dependencies:

   ```bash
   npm install
   ```

## Usage

To **start** the development server, run:

```bash
npm run dev
```

This will start the Vite development server and open the application in your default browser.

## Technologies

- **React**: v18
- **TypeScript**: v5.6.3
- **Vite**: v6.0.7
- **React Router**: v7.1.1
- **npm**: v10.9.0
- **Node.js**: v22.12.0


## Description

### Home Page
- **Hero Section**: A welcoming introduction with images and text.
- **Equipment List**: A list of available equipment, each clickable to view details.

### Equipment Detail Page
- Each equipment has a dedicated page with:
  - A large image
  - Detailed information
  - Fake reviews for a better user experience
- From this page, users can:
  - Go back to the equipment list
  - Continue to the booking page

### Booking Page
- Select the booking duration using buttons
- Option to go back
- Confirm the booking using a modal

### Booking Overview Page
- Available only after making a booking
- Shows all bookings made by the user

### Authentication (Login and Registration)
- Users can register and log in to make personal bookings
- After logging in, a private page is available where users can:
  - View public bookings
  - View personal bookings linked to their account



## Project Structure
```bash
gym                                    
├─ public/                                                                  
├─ src                                 
│  ├─ assets                           
│  │  └─ react.svg                     
│  ├─ components                       
│  │  ├─ Authentication/                
│  │  ├─ BookingCard/                  
│  │  ├─ EquipmentCard/                  
│  │  ├─ Hero/                                
│  │  ├─ Modal/                                          
│  │  ├─ Navbar/                                          
│  │  └─ Review/                                 
│  ├─ context                          
│  │  ├─ AuthContext.ts                
│  │  └─ AuthProvider.tsx              
│  ├─ hooks                            
│  │  ├─ useAuthApi.ts                 
│  │  ├─ useAuthentication.ts          
│  │  ├─ useBookApi.ts                 
│  │  ├─ useBookingsApi.ts             
│  │  ├─ useEquipmentApi.ts            
│  │  ├─ useModal.ts                   
│  │  ├─ useNavbar.ts                  
│  │  ├─ useScroll.ts                  
│  │  └─ useTabTitle.ts                
│  ├─ routes                           
│  │  ├─ Account.tsx                   
│  │  ├─ Book.tsx                      
│  │  ├─ Bookings.tsx                  
│  │  ├─ Equipment.tsx                 
│  │  ├─ Home.tsx                      
│  │  ├─ Login.tsx                     
│  │  ├─ MyBookings.tsx                
│  │  └─ Registration.tsx              
│  ├─ services                         
│  │  ├─ auth.api.ts                   
│  │  ├─ bookingsList.api.ts           
│  │  ├─ equipmentBook.api.ts          
│  │  └─ equipmentList.api.ts          
│  ├─ types                            
│  │  ├─ AuthContext.d.ts              
│  │  ├─ Authentication.d.ts           
│  │  ├─ Equipment.d.ts                
│  │  ├─ EquipmentBooking.d.ts         
│  │  ├─ EquipmentBookingRequest.d.ts  
│  │  ├─ Header.d.ts  
│  │  └─ PropsModal.ts                 
│  ├─ App.css                          
│  ├─ App.tsx                          
│  ├─ constants.ts                     
│  ├─ index.css                        
│  ├─ main.tsx                         
│  └─ vite-env.d.ts                    
├─ README.md                           
├─ eslint.config.js                    
├─ index.html                          
├─ package-lock.json                   
├─ package.json                        
├─ tsconfig.app.json                   
├─ tsconfig.json                       
├─ tsconfig.node.json                  
└─ vite.config.ts                      
```
### Components
  - `Authentication`: A component for the authentication form (login/registration)
  - `BookingCard`: A component that display booking information 
  - `EquipmentCard`: A component that display equipment information 
  - `Hero`: Hero section homepage
  - `Modal`: A modal to manage booking confirm
  - `Navbar`: Navbar component  
  - `Review`: Fake review component to improve UX/UI  
### Context 
  - `AuthContext.ts`: Defines the context structure for authentication state (token, username, isAuth)
  - `AuthProvider.tsx`: Provides authentication state to the entire app
### Hooks  
  - `useAuthApi`: Custom hook that interact with `auth.api.ts`  
  - `useAuthentication`: Custom hook that manage authentication forms (login/registration)
  - `useBookApi`: Custom hook that interact with `equipmentBook.api.ts`
  - `useBookingsApi`: Custom hook that interact with `bookingList.api.ts`
  - `useEquipmentApi`: Custom hook that interact with `equipmentList.api.ts`
  - `useModal`: Custom hook to manage equipment booking confirm
  - `useNavbar`: Custom hook to manage navbar logic
  - `useScroll`: Custom hook to scroll to a specific element
  - `useTabTitle`: Custom hook to manage document title
### Routes
  - `Account`: User account profile page, available only when logged in
  - `Book`: Page to book an equipment
  - `Bookings`: All boooking page
  - `Equipment`: Page with equipment detail
  - `Home`: Home page of the application, contains equipment list
  - `Login`: Login page
  - `MyBookings`: User's booking page
  - `Registration`:  Registration page
### Services
  - `auth.api.ts`: Service to login/registrate using API
  - `bookingList.api.ts`: Service to fetch equipment list from the API
  - `equipmentBook.api.ts`: Service to book an equipment using API 
  - `equipmentList.api.ts`: Service to fetch equipment list from the API  
### Types
  - `AuthContext.d.ts`: Type of Authentication context
  - `Authentication.d.ts`: Types of Authentication component (Authentication body and Authentication props)
  - `Equipment.d.ts`: Types of Equipment (Equipment object and Equipment props)
  - `EquipmentBooking.d.ts`: Types of Equipment booking (Equipment booking object and Equipment booking props)
  - `EquipmentBookingRequest.d.ts`: Types of Equipment booking request (request, body and props) 
  - `Header.d.ts`: Type of request header
  - `PropsModal.ts`: Type of props modal 



## Notes
- To manage tab title I prefered to use a custom hook (`useTabTitle`) instead of React Helmet Library which includes so many functionalities that I would not have used.
- To manage navbar active links I used `NavLink` from React Router which manage itself active item links behaviour.
- To manage **token** and **username** I tried to use React Context built-in functionality in order to have an application global state and be able to access them from all components at any time.
- Home page hero section has 2 CTA buttons, one of these, **Join us** changes based on the authentication of the user (**My profile**).
- Login and registration use the same component (**Authentication**) that changes based on the type of the authentication.
- Navbar items change based on the authentication of the user   
*ex. home, bookings, login, registration (not auth), home, bookings, my bookings, account, logout (authenticated)*
- To make accessible the **equipment list** which take place in the home page, under the hero section, I used a custom hook (`useScroll`) that take the **fragment** (hash) of the URL and scroll to the selected element with the same ID. So it makes possible to reach that section even from other pages by writing in the path of the navigation the proper fragment. 
- Bookings and My Bookings are basically the same page, except that in My Bookings the custom hook `useBookingsApi` fetch the data with the token so the API responds with the user authenticated personal bookings.
## License

This project is licensed under the MIT License.

## Author
Daniele Margiacchi



