'use client'
import React, { useState } from "react"
import { PaystackButton } from "react-paystack"
import  "./register.css"


const Register = () => {
const publicKey = "pk_live_1dd379918a905f20b15814dd0fc856242b71a7f1"
const amount = 100000 // Remember, set in kobo!
const [email, setEmail] = useState("")
const [name, setName] = useState("")
const [phone, setPhone] = useState("")
const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",

    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),

  }
  return (
    <div className="App">

      <div className="container">

        <div className="item">

          <img

            className="item-image"

            src="/image/datas.jpg"

            alt="product"

            />

          <div className="item-details">

            

          </div>

        </div>

        <div className="checkout-form">

          <form>

            <div className="form-name">
            <label className="form-label">full Name</label>
            <input type="text" className="form-inputName" id="name" onChange={(e) => setName(e.target.value)} placeholder="Sarah annie" required/>
            </div>

           <div>
            <label className="form-label">Email</label>
            <input type="text" id="email" className="form-inputName" onChange={(e) => setEmail(e.target.value)} placeholder="sarahannie@gmail.com" required/>
           </div>

           <div className="form-amount">
            <label>Amount:</label>
            <div>&#8358;{amount/ 100}</div>
           </div>

           <div>
           <label className="form-label">Phone</label>
            <input type="text" id="phone" className="form-inputName" onChange={(e) => setPhone(e.target.value)} placeholder="+234 8055575564"/>
           </div>

          </form>

          <PaystackButton {...componentProps} className="pay-btn"/>

        </div>

      </div>

    </div>
  )
}

export default Register