import { useState } from "react"
import { useNavigate, Link } from 'react-router-dom'
import Cookies from 'js-cookie'

import Input from "../Components/Input"
import Polygon from "../Components/Polygon"
import Server from "../Components/Instance"

export default () => {

    const navigate = useNavigate()

    const initialInput = { username: '', password: '' }
    const [input, setInput] = useState(initialInput)
    const [errors, setErrors] = useState(null)

    // COOKIES!!

    const handleChange = e => setInput({ ...input, [e.target.id]: e.target.value  })
    const handleClick = async () => {
        try {
            const res = await Server.post("login", input);
            Cookies.set('token', res.data)
            navigate("/profile")
        } catch (err) {
            setErrors(err.response.data.validation)
        }
    }

    return (
        <main id="login">
            <Polygon />
            <div className="container">
                <h1>Login</h1>
                <div className="inputs">
                    <Input type="text" title="Username" input={input} errors={errors} onchange={handleChange} />
                    <Input title="Password" input={input} errors={errors} onchange={handleChange} />
                    <button onClick={handleClick}>Registration</button>
                </div>
                <p className="text">Aren't you registered yet? <Link to="/login">Register now.</Link></p>
            </div>
        </main>
    )
}