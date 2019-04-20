import { UserDetails } from "./User.types";
import { Data } from "../App";

class User implements UserDetails {
    name?   : string;
    api_url : string;
    id      : string;
    constructor(data: UserDetails){
        // const loggedin = loginInfo();
        // console.log("Logged in ?", loggedin);
        this.api_url = Data.api.get + "/user";
        this.id = data.id;
    };

    isLoggedIn() : boolean {
        return true;
    };

    login(){  };

};

export default User;