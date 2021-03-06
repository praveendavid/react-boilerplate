

# Project Title

This is a boilerplate application. The app architecture is developed considering the future scope and scalability of the app to include more and more features gradually.

This will make it easy to on-boarding new resources by defining a common approach for the development process.

## Authors

- [@praveenkumar](https://www.github.com/praveendavid)


## Features

- Antd UI Framework
- Antd Icons Package
- Antd Charts
- Redux


## Folder Structure
### /src/index.
- It is the default entry point of every react application.
### /src/…
- All the resources generated by the team for our application must reside within this directory.
- This will be the core application source code.
- “/src/app.js” file is the container of our app and serves as an entry point
### /assets
- As the name suggests, all the static assets should reside here.
- Each asset should be registered and exported from the /index.js
- Thus, all assets will be accessible and imported from ‘/assets’
- This can include but not limited to images, logos, vector icons, fonts, etc.
### /components
- Only shared components used across features are placed here.
- All the components should be registered and exported from /index.js for a single access point.
- All the components should bear named export. This will avoid any conflicts.
### /config
- All the app’s configurations are to be kept at this path.
- This can consist of date format, default language, some master data set or anything like so.
### /hooks
- All the custom hooks created for our application are placed here.
- All the hooks should be registed and exported from /index.js.
### /layouts
- The Base layout for our application will be placed here.(eg: unauth layout,auth layout,main layout)
### /navigation
- As the name suggests, all the routing logic resides here.
- Our app uses “react-router-dom” for routing implementation.
- RouterConfig.js will have all the routes of the application defined within at one place.
- constants.js consists of all the constants for various available routes within our app. Reason is simply to avoid typos and easy renaming of routes when required.
### /pages
- This is the heart of our application.
- All the various features/screens/pages are defined here. In this case, “Home”, “Page1” and “Page2” are 3 different pages of our app.
- Each screen consists of an “index.js” file which exports the screen’s container as default module which makes the screen available as a functional component.
### Redux
- It holds all the redux resources at one place.
- This includes action creators, reducers and a redux store of our app.
- Initial state of the app is divided based on features and thus corresponding reducers and actions are modularized.
- /actions dir consists of all the action files. Each action file includes feature based action-creators.
- /reducer dir follows the same practice like actions. reducer reduces all the actions and applies corresponding changes to store. These reducers are later merged into a root-reducer redux’s combineReducers function.
- /store.js is the central state of the application. This incorporates all the mapping between reducer, store and middle-wares if any.
- We have a redux-thunk middleware in our app for enabling asynchronous dispatching of actions.
- Configuration for enabling dev tools for redux is done in store.js.
### /services
- Services are to manage all api requests. You can see them as a bridge or an adapter between the database server APIs and the view layer (pages and components) of our application.
- It will take care of all the network calls of our app.
- All data requests are defined here, and response data is transformed and served. In some cases it can also be saved in the redux store.
- The pages and components may dispatch actions, read the store and update themselves based on the data changes. They may access the services directly if it doesn’t need to be added to the redux store.
- Actions will use services for backend connectivity. Thunk is a redux middleware used to handle asynchronous actions and side-effects.
### /styles
- This module holds our application-level styles.
- It can include theme definition (font, colours, typography) of the app UI, and global or commonly used styles.
### /utils
- All the utility/helper methods, validations, etc. that can be shared across our entire project are added here.