import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51IxhxbHHhAggFrvraZ3jlIruUlWyUh4dQHSo4ZFNR9zn46AMIGLxwUzKApu0DLS3COzP4YrEecDmkmJpn2Guo4yK00spe3tM53';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token,
            },
        }).then(response =>{
            alert('payment successful')
        }).catch(error=>{
            console.log('Payment error: ', JSON.parse(error));
            alert(
                'There was an issue with your payment. Please be sure you use the provided credit card.'
            );
        })
    }

    return (
        <StripeCheckout 
        amount = {priceForStripe}
        label='Pay Now'
        name = 'CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image = 'https://svgshare.com/i/CUz.svg'
        description = {`Your total is $${price}`}
        panelLabel = 'Pay Now'
        token={onToken}
        stripeKey = {publishableKey}
        />
    );

};

export default StripeCheckoutButton;