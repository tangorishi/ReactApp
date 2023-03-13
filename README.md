# React App with Two Screens

This is a simple React app with two screens. The first screen allows the user to enter a string, and the second screen displays each character of the string on a separate card. Clicking on the delete icon on each card deletes all duplicate instances of the chosen character in the string.

## Getting Started
To run this app locally, follow these steps:

Clone this repository: git clone https://github.com/tangorishi/ReactApp.git

Install dependencies: ```npm install```

Run the app: ```npm start```

Open http://google.com in your browser.

## Usage
On the first screen, enter a string and click *Submit* to navigate to the second screen. If the input field is empty or contains only whitespace, an alert will be shown and the user will not be able to proceed to the second screen.

On the second screen, each character of the input string will be displayed on a separate card. Clicking on the delete icon on each card will delete all duplicate instances of the chosen character in the string. Only the clicked instance of the character will remain on the screen.

Cards for the same characters will have the same background color. If there are no more characters with greater than 1 appearance in the string, a success header will be displayed.

To go back to the first screen, click the *Back* button. The input field will be cleared/empty.

## Dependencies
This app was built using React, React DOM, and React Scripts. Additional dev dependencies include Babel Core, Babel Preset Env, and Babel Preset React.

## License
This project is licensed under the [MIT License](./LICENSE).
