# PinSpot

PinSpot is a React Native application that allows users to add their favorite places to a personalized list. Whether it's a scenic spot, a favorite cafe, or a hidden gem, PinSpot lets users capture the moment with a photo, pick the location on the map, and store it for future reference. All the user data is saved locally, ensuring a seamless and offline experience.

## Features

- **Add Favorite Places**: Users can save their favorite spots by providing a title, taking a picture, and choosing a location on the map.
- **Photo Capture**: Take pictures of the places directly from the app to visually remember each favorite spot.
- **Location Picker**: Choose the exact location of the place on the map to save its geographical coordinates.
- **Local Database Storage**: All user data (title, image, address, location) is stored locally on the device using SQLite, allowing for offline access.
- **User-Friendly Interface**: The app features an intuitive interface with a seamless experience for adding, viewing, and managing favorite places.

## Technologies Used

- **React Native**: Framework for building the app for iOS and Android.
- **SQLite**: A local database for saving and fetching the user’s favorite places.
- **Expo**: Used for simplifying the development process and leveraging the power of React Native.
- **React Navigation**: For handling navigation within the app.
- **MapView**: For picking locations directly from the map.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sothulthorn/pinspot-app.git
   ```
2. Setup the environment (.env.local):
   ```bash
   EXPO_PUBLIC_GOOGLE_API_KEY={YOUR_GOOGLE_API_KEY}
   ```
3. Install dependencies:
   ```bash
   cd pinspot
   npm install
   ```
4. Run the app using Expo:
   ```bash
   npm start
   ```

## Project View

| <div align="center">All Places</div>                                         | <div align="center">Add New Places</div>                                         | <div align="center">Take Photo</div>                                          |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| <div align="center"><img src="/screenshots/all-place.png" width="85%"></div> | <div align="center"><img src="/screenshots/add-new-place.png" width="85%"></div> | <div align="center"><img src="/screenshots/take-photo.png" width="85%"></div> |

| <div align="center">Pick Location</div>                                          | <div align="center">Place Details</div>                                         |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| <div align="center"><img src="/screenshots/pick-location.png" width="85%"></div> | <div align="center"><img src="/screenshots/place-detail.png" width="85%"></div> |
