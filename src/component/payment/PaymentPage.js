// // import React, { useState } from "react";
// // import "./payment.css";

// // export default function PaymentPage() {
// //     const [name, setName] = useState("");
// //     const [email, setEmail] = useState("");
// //     const [cardNumber, setCardNumber] = useState("");
// //     const [expiry, setExpiry] = useState("");
// //     const [cvv, setCvv] = useState("");
// //     const [amount, setAmount] = useState("");

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         alert(`Payment of ₹${amount} has been successfully submitted!`);
// //         // Add payment submission logic here
// //     };

// //     return (
// //         <div className="payment-page">
// //             <h1>Payment</h1>
// //             <form className="payment-form" onSubmit={handleSubmit}>
// //                 <div className="form-group">
// //                     <label htmlFor="name">Full Name:</label>
// //                     <input
// //                         type="text"
// //                         id="name"
// //                         value={name}
// //                         onChange={(e) => setName(e.target.value)}
// //                         placeholder="Enter your full name"
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label htmlFor="email">Email:</label>
// //                     <input
// //                         type="email"
// //                         id="email"
// //                         value={email}
// //                         onChange={(e) => setEmail(e.target.value)}
// //                         placeholder="Enter your email"
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-group">
// //                     <label htmlFor="cardNumber">Card Number:</label>
// //                     <input
// //                         type="text"
// //                         id="cardNumber"
// //                         value={cardNumber}
// //                         onChange={(e) => setCardNumber(e.target.value)}
// //                         placeholder="Enter card number"
// //                         maxLength="16"
// //                         required
// //                     />
// //                 </div>
// //                 <div className="form-row">
// //                     <div className="form-group">
// //                         <label htmlFor="expiry">Expiry Date:</label>
// //                         <input
// //                             type="text"
// //                             id="expiry"
// //                             value={expiry}
// //                             onChange={(e) => setExpiry(e.target.value)}
// //                             placeholder="MM/YY"
// //                             required
// //                         />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="cvv">CVV:</label>
// //                         <input
// //                             type="text"
// //                             id="cvv"
// //                             value={cvv}
// //                             onChange={(e) => setCvv(e.target.value)}
// //                             placeholder="CVV"
// //                             maxLength="3"
// //                             required
// //                         />
// //                     </div>
// //                 </div>
// //                 <div className="form-group">
// //                     <label htmlFor="amount">Amount:</label>
// //                     <input
// //                         type="number"
// //                         id="amount"
// //                         value={amount}
// //                         onChange={(e) => setAmount(e.target.value)}
// //                         placeholder="Enter amount"
// //                         required
// //                     />
// //                 </div>
// //                 <button type="submit" className="submit-btn">
// //                     Pay Now
// //                 </button>
// //             </form>
// //         </div>
// //     );
// // }
// // --------orignal----------------------
// import React, { useState } from "react";
// import "./payment.css";
// import Navbar from "../navbar/Navbar";

// export default function PaymentPage() {
//     const [paymentMethod, setPaymentMethod] = useState("Card");
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [cardNumber, setCardNumber] = useState("");
//     const [expiry, setExpiry] = useState("");
//     const [cvv, setCvv] = useState("");
//     const [amount, setAmount] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (paymentMethod === "Card") {
//             alert(`Payment of ₹${amount} through Card has been successfully submitted!`);
//         } else {
//             alert(`Payment of ₹${amount} through ${paymentMethod} has been successfully submitted!`);
//         }
//         // Add payment submission logic here
//     };

//     return (
//         <>
//         <Navbar/>
//         <div className="payment-page">
//             <h1>Payment</h1>
//             <form className="payment-form" onSubmit={handleSubmit}>
//                 {/* Payment Method Selection */}
//                 <div className="form-group">
//                     <label htmlFor="paymentMethod">Select Payment Method:</label>
//                     <select
//                         id="paymentMethod"
//                         value={paymentMethod}
//                         onChange={(e) => setPaymentMethod(e.target.value)}
//                         required
//                     >
//                         <option value="Card">Card Payment</option>
//                         <option value="GPay">Google Pay (GPay)</option>
//                         <option value="PhonePe">PhonePe</option>
//                         <option value="UPI">UPI</option>
//                     </select>
//                 </div>

//                 {/* Common Fields */}
//                 <div className="form-group">
//                     <label htmlFor="name">Full Name:</label>
//                     <input
//                         type="text"
//                         id="name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         placeholder="Enter your full name"
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         placeholder="Enter your email"
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="amount">Amount:</label>
//                     <input
//                         type="number"
//                         id="amount"
//                         value={amount}
//                         onChange={(e) => setAmount(e.target.value)}
//                         placeholder="Enter amount"
//                         required
//                     />
//                 </div>

//                 {/* Conditional Fields Based on Payment Method */}
//                 {paymentMethod === "Card" && (
//                     <>
//                         <div className="form-group">
//                             <label htmlFor="cardNumber">Card Number:</label>
//                             <input
//                                 type="text"
//                                 id="cardNumber"
//                                 value={cardNumber}
//                                 onChange={(e) => setCardNumber(e.target.value)}
//                                 placeholder="Enter card number"
//                                 maxLength="16"
//                                 required
//                             />
//                         </div>
//                         <div className="form-row">
//                             <div className="form-group">
//                                 <label htmlFor="expiry">Expiry Date:</label>
//                                 <input
//                                     type="text"
//                                     id="expiry"
//                                     value={expiry}
//                                     onChange={(e) => setExpiry(e.target.value)}
//                                     placeholder="MM/YY"
//                                     required
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="cvv">CVV:</label>
//                                 <input
//                                     type="text"
//                                     id="cvv"
//                                     value={cvv}
//                                     onChange={(e) => setCvv(e.target.value)}
//                                     placeholder="CVV"
//                                     maxLength="3"
//                                     required
//                                 />
//                             </div>
//                         </div>
//                     </>
//                 )}

//                 {(paymentMethod === "GPay" || paymentMethod === "PhonePe" || paymentMethod === "UPI") && (
//                     <div className="form-group">
//                         <label htmlFor="upiId">Enter UPI ID:</label>
//                         <input
//                             type="text"
//                             id="upiId"
//                             placeholder="Enter your UPI ID"
//                             required
//                         />
//                     </div>
//                 )}

//                 <button type="submit" className="submit-btn">
//                     Pay Now
//                 </button>
//             </form>
//         </div>
//         </>
//     );
// }
