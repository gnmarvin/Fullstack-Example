import axios from "axios";

const LOGIN_BASE_API_URL='http://localhost:8080/api/login';

class LoginService{

    getUserByEmailAndPassword(email, password){
        return axios.get(LOGIN_BASE_API_URL + '/' + email + '/' + password);
    }
}

export default new LoginService();