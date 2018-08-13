console.log("made it to router")
import { Platform } from 'react-native';
import RouterPackage from 'react-router-native'
const OtherPkg = require('react-router-native')
//const RouterPackage = require('react-router-native');
console.log("RouterPackage: " + OtherPkg)

var { NativeRouter } = OtherPkg
var Router = OtherPkg.NativeRouter;
export default {
 ...OtherPkg,
 Router,
}
