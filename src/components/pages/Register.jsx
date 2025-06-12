import { useState, useEffect } from "react"
import { useNavigate } from "react-router";

import { Button, Input } from "antd"

export const Register = () => {
    const navigate = useNavigate()
    
    const [name, setName] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [repeatPassword, setRepeatPasword] = useState()
    const [email, setEmail] = useState()
    const [country, setCountry] = useState()

    const handleRegister = () => {
        console.log(name, username, password, repeatPassword, email, country)

        fetch("http://localhost:8080/users/register", {
            headers: {
                "Content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                name: name,
                username: username, 
                password: password,
                email: email, 
                country: country
            })
        })
        .then(res => {   
            if (res.ok){
                console.log(res.statusText);
                
                navigate("/login")
            }
            else{
                console.log(res.statusText);
            }
        })
    }

    return (
        <main>
            <article className="registerForm">
                <h1>Register</h1>
                <Input 
                placeholder="Your name" 
                onChange={(event) => setName(event.target.value)}
                />
                <Input 
                placeholder="Usename" 
                onChange={(event) => setUsername(event.target.value)}
                />
                <Input placeholder="Password"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                />
                <Input 
                placeholder="Repeat password"
                type="password"
                onChange={(event) => setRepeatPasword(event.target.value)}
                />
                <Input 
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
                />
                <Input 
                placeholder="Country"
                onChange={(event) => setCountry(event.target.value)}
                />
                <Button 
                type="primary" 
                onClick={handleRegister}> Register </Button>
            </article>
        </main>
    )
}
