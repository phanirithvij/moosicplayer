import { Data } from "../App";
import { UserProps, UserDetails } from "./User.types";

class User implements UserDetails {
    name?: string;
    api_url = Data.api.get + "/user";
    constructor(props?: UserProps){
        // const loggedin = loginInfo();
        // console.log("Logged in ?", loggedin);
    };

    isLoggedIn() : boolean {
        return true;
    };

    login(){  };

};

export default User;