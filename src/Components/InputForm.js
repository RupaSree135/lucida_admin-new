import React, { useState } from "react"
import "./InputForm.css"
import PDF from "./PDF"

const InputForm = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [designation, setDesignation] = useState("")
    const [isSubmitted , setIsSubmitted] = useState(false)
    const employeeDetails = {
        firstName: "",
        lastName: "",
        designation: "",
    }

    const submitHandler = () => {

        setIsSubmitted(true)
        employeeDetails.firstName = firstName
        employeeDetails.lastName = lastName
        employeeDetails.designation = designation
        employeeDetails.isSubmitted = isSubmitted

        console.log(employeeDetails)
    }

    return (
        <div className="card">
            {!isSubmitted ? (
                <div>
                    <h1>Enter Your Details</h1>
                    <form >
                        <div className="row mb-3">
                            <label htmlFor="firstName">First Name : </label>
                            <input
                                type="text"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="lastName">Last Name : </label>
                            <input
                                type="text"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="designation">Designation : </label>
                            <input
                                type="text"
                                id="designation"
                                value={designation}
                                onChange={(e) => setDesignation(e.target.value)}
                            />
                        </div>
                    </form>

                    <div className="submit-button">
                        <button className="app-btn" type="button" onClick={submitHandler}>Submit</button>
                    </div>
                </div>
            ) : (

                <PDF firstName = {firstName} lastName={lastName} designation={designation} />
            )}
        </div>
    )
}

export default InputForm