import { Component } from "react";
import userService from "../services/userSercive";
 
class Logout extends Component {
  componentDidMount() {
    userService.logout();
    window.location = "/";
  }
 
  render() {
    return null;
  } 
}
 
export default Logout;  