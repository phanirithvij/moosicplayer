import { Data } from "../App";
import { UserProps } from "./User.types";

class User{
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