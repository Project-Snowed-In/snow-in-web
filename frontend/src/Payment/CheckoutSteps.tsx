import React from 'react';

function CheckoutSteps(props: any){
    return <div className="checkout-steps">
        <div className={props.setp1 ? 'active' : ' '} >Signing</div>
        <div className={props.setp2 ? 'active' : ' '} >Shipping</div>
        <div className={props.setp3 ? 'active' : ' '} >Payment</div>
        <div className={props.setp4 ? 'active' : ' '} >Place Order</div>
    </div>
}

export default CheckoutSteps;