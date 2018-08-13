import { Platform } from 'react-native';
import * as RouterPackage from 'react-router-dom'
//const RouterPackage = require('react-router-dom');

var Router = RouterPackage.BrowserRouter;
export default {
 ...RouterPackage,
 Router,
}
