import { useState, useEffect } from "react"
import { useNavigate } from "react-router";
import { Button, Input } from "antd"

export const Login = () => {

    const navigate = useNavigate()
    
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [loginmessage, setLoginmessage] = useState("Introduce tu usuario y contraseña")

    const handleLogin = () => {
        
        fetch("http://localhost:8080/users/login", {
            headers: {
                "Content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                username: username, 
                password: password,
            })
        })

        .then(async (res) => {
            const data = await res.json()
            if (res.status >= 400 && data.msg) {
                setLoginmessage(data.msg)
            }
            else{
                setLoginmessage("Login...")
                localStorage.setItem("accessToken", data.accessToken)
                window.location.href = "/dashboard"
            }
        }) 
    }

    return (
        <main>
            <article className="registerForm">
                <h1>Login</h1>
                <p>{loginmessage}</p>
                <Input 
                placeholder="Usename" 
                onChange={(event) => setUsername(event.target.value)}
                />
                <Input placeholder="Password"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                />
                <Button 
                type="primary" 
                // disabled={!username.trim() || !password.trim()}
                onClick={handleLogin}> Login </Button>
            </article>
        </main>
    )
}
