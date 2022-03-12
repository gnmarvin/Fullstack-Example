import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import LoginService from "../services/LoginService";

const Login=()=>{

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const navigate=useNavigate();

    function SubmitButton(){
        if(email && password){
            return <button className="btn btn-success" onClick={(event)=>validateLogin(event)}>Login</button>
        }else {
            return <button className="btn btn-success" disabled>Login</button>
        }
    }

    const validateLogin=(event)=>{
        event.preventDefault();

        LoginService.getUserByEmailAndPassword(email, password).then((response)=>{
            if(response.data.email && response.data.password){
                navigate('/stocks');
            }
        }).catch(error=>{
            console.log(error);
        })
    }

    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        Login
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">Email :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter email"
                                        name="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(event)=>setEmail(event.target.value)}
                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Password :</label>
                                    <input
                                        type="password"
                                        placeholder="Enter password"
                                        name="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(event)=>setPassword(event.target.value)}
                                    ></input>
                                </div>
                                <SubmitButton></SubmitButton>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login