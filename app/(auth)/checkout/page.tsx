'use client'
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const CreditCard = ({ cardNumber, cardName, expiryDate, cvv, isVisible }) => {
  const formatCardNumber = (number) => {
    return number.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
  };

  return (
    <>
      {isVisible && (
        <div className="w-full max-w-xs bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-xl p-6 text-white shadow-lg mb-8">
          <div className="mb-6">
            <div className="text-lg">Master Card</div>
          </div>
          <div className="mb-6">
            <div className="text-base tracking-widest">{formatCardNumber(cardNumber)}</div>
          </div>
          <div className="flex justify-between">
            <div>
              <div className="text-xs">Card Holder</div>
              <div className="text-base">{cardName || 'FULL NAME'}</div>
            </div>
            <div>
              <div className="text-xs">Expires</div>
              <div className="text-base">{expiryDate || 'MM/YY'}</div>
            </div>
            <div>
              <div className="text-xs">CVV</div>
              <div className="text-base">{cvv || '***'}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const CheckoutPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('COD');
  const [couponCode, setCouponCode] = useState('');
  const [paymentAmount, setPaymentAmount] = useState(7850);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 16);
    setCardNumber(value);
  };

  const handleExpiryDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, '').slice(0, 4);
    if (value.length >= 3) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }
    setExpiryDate(value);
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 3);
    setCvv(value);
  };

  const handleApplyCoupon = () => {
    if (couponCode === 'DISCOUNT10') {
      setPaymentAmount(paymentAmount * 0.9);
    }
  };

  const handleAddressEdit = () => {
    setIsEditingAddress(true);
  };

  const handleAddressChange = (e) => {
    setDeliveryAddress(e.target.value);
  };

  const handleAddressSave = () => {
    setIsEditingAddress(false);
  };

  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div className="w-full max-w-4xl p-8 rounded-3xl transparent-bg [background:linear-gradient(120deg,_rgba(255,255,255,_0.7),_rgba(255,255,255,_0.04))] flex flex-col lg:flex-row items-center">
        <div className={`w-full lg:w-1/2 ${paymentMethod === 'Credit Card' ? 'lg:pr-4' : 'lg:pl-4 hidden'}`}>
          {paymentMethod === 'Credit Card' && (
            <>
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Credit Card Information</h2>
                <CreditCard
                  cardNumber={cardNumber}
                  cardName={cardName}
                  expiryDate={expiryDate}
                  cvv={cvv}
                  isVisible={paymentMethod === 'Credit Card'}
                />
                <form>
                  <div className="mb-4">
                    <label className="block text-black-400 mb-2" htmlFor="cardNumber">Card Number</label>
                    <input
                      type="text"
                      id="cardNumber"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      className="w-full p-2 rounded-lg bg-gray-700 text-white"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-black-400 mb-2" htmlFor="cardName">Card Holder Name</label>
                    <input
                      type="text"
                      id="cardName"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      className="w-full p-2 rounded-lg bg-gray-700 text-white"
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="mb-4 w-1/2 pr-2">
                      <label className="block text-black-400 mb-2" htmlFor="expiryDate">Expiry Date</label>
                      <input
                        type="text"
                        id="expiryDate"
                        value={expiryDate}
                        onChange={handleExpiryDateChange}
                        className="w-full p-2 rounded-lg bg-gray-700 text-white"
                      />
                    </div>
                    <div className="mb-4 w-1/2 pl-2">
                      <label className="block text-black-400 mb-2" htmlFor="cvv">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        value={cvv}
                        onChange={handleCvvChange}
                        className="w-full p-2 rounded-lg bg-gray-700 text-white"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
        <div className={`w-full lg:w-1/2 ${paymentMethod === 'Credit Card' ? 'lg:pl-4' : 'lg:pr-4'}`}>
          <h2 className="text-xl font-bold mb-4">Payment Method</h2>
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <input
                type="radio"
                id="creditCard"
                name="paymentMethod"
                value="Credit Card"
                checked={paymentMethod === 'Credit Card'}
                onChange={() => setPaymentMethod('Credit Card')}
                className="mr-2"
              />
              <label htmlFor="creditCard" className="text-lg">Credit Card</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="cod"
                name="paymentMethod"
                value="COD"
                checked={paymentMethod === 'COD'}
                onChange={() => setPaymentMethod('COD')}
                className="mr-2"
              />
              <label htmlFor="cod" className="text-lg">Cash on Delivery (COD)</label>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Delivery Address</h2>
            {isEditingAddress ? (
              <div className="mb-4">
                <textarea
                  value={deliveryAddress}
                  onChange={handleAddressChange}
                  className="w-full p-2 rounded-lg bg-gray-700 text-white"
                ></textarea>
                <button
                  onClick={handleAddressSave}
                  className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-2 hover:bg-blue-600 transition duration-300"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-400">{deliveryAddress}</p>
                <button
                  onClick={handleAddressEdit}
                  className="text-sm text-blue-500 hover:underline mt-2 focus:outline-none"
                >
                  Edit Address
                </button>
              </div>
            )}
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Coupon Code</h2>
            <div className="flex">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="w-full p-2 rounded-lg bg-gray-700 text-white mr-2"
              />
              <button
                onClick={handleApplyCoupon}
                className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition duration-300"
              >
                Apply
              </button>
            </div>
          </div>

          <div className="mt-8 flex justify-between items-center w-full">
            <div>
              <p className="text-2xl font-bold">Payment Amount: {paymentAmount.toFixed(2)} EGP</p>
            </div>
            <button className="bg-blue-500 text-white rounded-lg px-6 py-3 hover:bg-blue-600 transition duration-300 text-xl">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

