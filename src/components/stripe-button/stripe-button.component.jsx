import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51IxhxbHHhAggFrvraZ3jlIruUlWyUh4dQHSo4ZFNR9zn46AMIGLxwUzKApu0DLS3COzP4YrEecDmkmJpn2Guo4yK00spe3tM53';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
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