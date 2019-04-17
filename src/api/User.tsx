import { UserProps, UserDetails } from "./User.types";
import { Data } from "../App";

class User implements UserDetails {
    name?   : string;
    api_url : string;
    constructor(props?: UserProps){
        // const loggedin = loginInfo();
        // console.log("Logged in ?", loggedin);
        this.api_url = Data.api.get + "/user";
    };

    isLoggedIn() : boolean {
        return true;
    };

    login(){  };

};

export default User;