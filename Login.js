import React from 'react';
import { useState } from 'react'
import Service from './Service';

const Login = () => {
    
    const [id,setid] = useState();
    const [fname,setfname] = useState();
    
    const auth = (event) => {
        event.preventDefault();
    

    Service.authenticate(id,fname).then((Response) => {
        console.log(Response.data);
        var str = JSON.stringify(Response.data[0]);
        document.getElementById("mydiv").innerHTML = str;
        
        })
        .catch();
    }


    return <div>
        <div>
            <h1>Login</h1>
            <form>
                &nbsp;&nbsp;id : <input type="text" id="id" name="id"
                value={id}
                onChange={e => setid(e.target.value)}
                ></input><br></br><br></br>
                &nbsp;&nbsp;Password: <input type="text" id="fname" name="fname"
                value={fname}
                onChange={e => setfname(e.target.value)}
                ></input>
                <button type="button" className="btn btn-primary" onClick={auth}>Login</button>

            </form>
            <div id="mydiv"></div>
        </div>
        </div>
}
 export default Login;