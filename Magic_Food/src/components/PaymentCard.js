import React from 'react'

const PaymentCard = () => {
  return (
    <div className="flex">
        <h1>
                Bill Details
        </h1>
        <h2>Item Total Bill : </h2>
        <ul>
                <li> Creadit Card<input type="radio" /></li>
                <li>Paytm <input type="radio" /></li>
                <li>PhonePay <input type="radio" /></li>
                <li>Google Pay <input type="radio" /></li>
                <li>COD <input type="radio" /></li>
        </ul>

    </div>
  )
}

export default PaymentCard