/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
// import AppPro from './AppPro'; //we created a new file AppPro.tsx and load that here#
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App); //#
