# hb-react-native

## Hybrid application for Product List and Detail (IOS,Android) 
Technology Stack: React Native, Typescript, Redux, Redux Saga, NodeJS
Testing Tools: Jest, Redux Saga Test Plan

### Backend Server
To install node modules for backend  which will be located in server folder
```bash
cd server/
yarn install
```
To make  a build for backend Server just execute command
```bash
tsc
```
Now, we will start our backend app by just executing following command
```bash
nodemon dist/index.js     or
node dist/index.js
```
There is two end points which we are using in this project
Get Product List
```bash
Endpoint: http://localhost:4000/products/all
Type: GET
```
Get Product Detail
```bash
Endpoint: http://localhost:4000/products/048776
Type: GET
```
This is enough for our backend service.Now, we are moving to our react native application.

### React Native Application
To install node modules for react native which will be located in app folder
```bash
cd app/
yarn install
```
Now, we are ready for running our app in android and ios.
Note: If you're using Android 6.0+ you need to execute this command for only once for mapping port.
```bash
adb reverse tcp:4000 tcp:4000
```
We can run our app in android device by just execute following command
```bash
react-native run-android
```
We can run our app in ios device by just execute following command
```bash
react-native run-ios
```

Now, you are ready with application which displays products list and navigate to detail screen when you click on the card.

### React Native Test Cases (Unit Tests)

Performed unit test case for our API call which will be based on redux saga by using redux-saga-test-plan library. Moreover, perform basic unit test case for our application and generate app component snapshot which will be returned view for whole appplication with amazing styles.

You can check test cases by simply execute following command
```bash
yarn test -u
```
-u is for only updating snapshots if any updates in our app component.

The whole application is built with all best practices which I know. My aim was making this application robust and cleaner code. I hope you like and happy to recieve feedback where I can change my code for better application development. 
