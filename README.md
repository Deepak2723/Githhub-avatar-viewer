# GitHub Avatar App

This is a simple web application built with React that allows users to input a GitHub username and displays the user's avatar image fetched from the GitHub API. The app incorporates debouncing to prevent excessive API calls while the user is typing.

## Features

- Input box for entering a GitHub username.
- Displays the user's avatar image upon successful API response.
- Debouncing to enhance user experience and reduce API calls.

## Getting Started

1. Clone this repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Start the development server using `npm start`.

## How to Use

1. Enter a GitHub username in the input box and press "Enter" or click the "Search" button.
2. The app will display the user's avatar image.

## Custom Debounce Hook (useDebounce)

The app uses a custom hook called `useDebounce` to manage the debouncing functionality. This hook can be found in the `src/hooks` directory.

## Components

The app is divided into several components for better organization:

- `App`: The main component that renders other components.
- `UserInput`: Displays the input box for entering a GitHub username.
- `AvatarDisplay`: Displays the user's avatar image.
- `Error`: Displays an error message if there is an issue with the API request.

## CSS Styling

The app's styling is implemented using CSS files for each component. Styling files are located in the `src` directory.

## Technologies Used

- React
- Axios (for making API requests)
- Debounce logic with custom hook
- CSS for styling

## Credits

This app was created as part of a learning project and is for educational purposes only.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
