import React from 'react';

import CheckoutSteps from '../Payment/CheckoutSteps';

function PaymentScreen() {

    const submitHandler = () => {
        alert("Payment processing...")
    };
    
    
    return(
        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <div className="form">
                <form onSubmit={submitHandler}>
                    <ul className="form-containter">
                        <li>
                            <h2>Payment</h2>
                        </li>
                    
                        <li>
                            <div>
                                <input
                                    type="radio"
                                    name="paymentMehtod"
                                    id="paymentMedthod"
                                    value="paypal"
                                ></input>
                                <label htmlFor="paymentMethod">Paypal</label>
                                <input
                                    type="radio"
                                    name="paymentMehtod"
                                    id="paymentMedthod"
                                    value="Bitcoin"
                                ></input>
                                <label htmlFor="paymentMethod">Paypal</label>
                            </div>
                        </li>
                    
                        <li>
                            <button type="submit" className="button primary">Continue</button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    
    );
}

export default PaymentScreen;
