import { useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"

import Input from "../Components/Input"
import Polygon from "../Components/Polygon"
import Server from "../Components/Instance"

export default () => {

    const navigate = useNavigate()

    const initialInput = { username: '', displayName: '', email: '', password: '' }
    const [input, setInput] = useState(initialInput)
    const [errors, setErrors] = useState(null)

    const handleChange = e => setInput({ ...input, [e.target.id]: e.target.value })

    const handleClick = async () => {
        try {
            const res = await Server.post("registration", input);
            navigate("/login")
        } catch (err) {
            setErrors(err.response.data.validation)
        }
    }

    return (
        <main id="registration">
            <Polygon />
            <div className="container">
                <h1>Registration</h1>
                <div className="inputs">
                    <Input type="text" title="Username" input={input} errors={errors} onchange={handleChange} />
                    <Input type="text" id="displayName" title="Display name" input={input} errors={errors} onchange={handleChange} />
                    <Input title="Email" input={input} errors={errors} onchange={handleChange} />
                    <Input title="Password" input={input} errors={errors} onchange={handleChange} />
                    <button onClick={handleClick}>Registration</button>
                </div>
                <p className="text">Have you already registered? <Link to="/login">Log in.</Link></p>
            </div>
        </main>
    )
}