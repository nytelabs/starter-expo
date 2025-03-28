# Starter Expo

A quick-start template for building React Native applications using Expo. It comes pre-configured with React Navigation for seamless navigation and NativeWind for utility-first styling with Tailwind CSS.

## Features

- Expo: Leverage Expo's robust set of tools and services for React Native development.
- React Navigation: Implement dynamic and intuitive navigation patterns within your app.
- NativeWind: Utilize Tailwind CSS utility classes for styling components efficiently.

## Project Structure

- `.github/` &rarr; Contains GitHub-specific configurations.
- `.husky/` &rarr; Includes Husky hooks for managing Git hooks.
- `.vscode/` &rarr; Houses Visual Studio Code settings for a consistent development environment.
- `assets/` &rarr; Directory for static assets like images and fonts.
- `src/` &rarr; Main source code directory for your application.

## Configuration Files

- `.env.development` &rarr; Environment variables for the development environment.
- `.env.production` &rarr; Environment variables for the production environment.
- `.eslintrc.js` &rarr; ESLint configuration for maintaining code quality.
- `.gitignore` &rarr; Specifies files and directories to be ignored by Git.
- `app.config.ts` &rarr; Configuration file for Expo application settings.
- `babel.config.js` &rarr; Babel configuration for JavaScript transpilation.
- `metro.config.js` &rarr; Metro bundler configuration for React Native.
- `package.json` &rarr; Manages project dependencies and scripts.
- `tailwind.config.js` &rarr; Configuration for Tailwind CSS customization.
- `tsconfig.json` &rarr; TypeScript compiler options.
- `yarn.lock` &rarr; Ensures consistent dependency versions across installations.

## Getting Started

Clone the Repository:

```sh
git clone https://github.com/nytelabs/starter-expo.git
```

Install Dependencies: Navigate to the project directory and run:

```sh
yarn install
```

Start the Development Server: Launch the Expo development server with:

```sh
yarn start
```

## Customization

- Navigation: Modify the navigation structure within the `src/` directory to suit your application's requirements.
- Styling: Customize the `tailwind.config.js` file to adjust Tailwind CSS settings and themes.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your enhancements or bug fixes.

## License

MIT License. Created by [NyteLabs](https://nytelabs.co).
