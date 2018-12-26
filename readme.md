
# MovieTime - An Ionic App

MovieTime is Ionic app developt for a school project in Ingesup B3 - Ynov Nantes
This app has been made by **DUPONT Malo** & **CAUMES Kirian**

## Getting Started

To use our project: 
* Clone the repo: `git clone https://github.com/MDupdup/MovieTime.git` and use the `master` branch (others were for development)

## Project Structure

```
.
 ├── resources                    # Build files on the specific platforms (iOS, Android) and app icon + splash
 ├── src                          # This is where the app lives - *the main folder*
 ├── .editorconfig                # A helper file to define and maintain coding styles across environments
 ├── .gitignore                   # Specifies intentionally untracked files to ignore when using Git
 ├── config.xml                   # Ionic config file
 ├── .ionic.config.json           # Global configuration for your Ionic app
 ├── package.json                 # Dependencies and build scripts
 ├── readme.md                    # Project description
 ├── tsconfig.json                # TypeScript configurations
 └── tslint.json                  # TypeScript linting options
```

### src directory
```
.
   ├── ...
   ├── src                       
   │   ├── app                    # This folder contains global modules and styling
   │   ├── assets                 # This folder contains images and the *data.json*   
   │   ├── components             # This folder contains all the components    
   │   ├── models                 # This folder contains images and the 
   |   ├── pages                  # Contains all the individual pages (home, tabs, category, list, single-item)
   |   ├── providers               # Contains the item-api service that retrieves data from the JSON file
   |   ├── theme                  # The global SCSS variables to use throughout the appavailable in intellisense
   |   ├── index.html             # The root index app file - This launches the app
   |   ├── manifest.json          # Metadata for the app
   │   └── service-worker.js      # Cache configurations
   └── ...
```


## Start the project
The project is started with the regular ionic commands.

1. Run `npm install` to install all dependencies.
2. Run `ionic serve` to start the development environment.
3. To build the project run `ionic build android` or `ionic build ios`. In order for you to build an iOS app, you need to run on MacOS.


## Creator

**DUPONT Malo** & **CAUMES Kirian**