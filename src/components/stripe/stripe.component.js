import React from 'react'
import  StripeCheckout  from 'react-stripe-checkout'

const Stripe = ({ Price }) => {

    const cen = Price * 100
    const pubKey = "pk_test_51HNZqjGJpfKZA2IE1qxPi9TeqnqrNTjTXfqDd2L1dzgxCni8nMDMK8JqQVVo0Eqnd91d4nPkgMHOjgIjmEsHGlrg00OCXREt5G"

    const onToken=(token)=>{
        console.log(token)
        alert('Payment Succesful!');
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name=' Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${Price}`}
            amount={cen}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={pubKey}
        />
    )
}
export default Stripe