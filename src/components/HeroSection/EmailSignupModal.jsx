import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './EmailSignuModal.css'; // Import the external CSS file

const EmailSignupModal = ({ isOpen, onRequestClose, modalType }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");   

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://montero-api.onrender.com/api/signup", { email });
      setMessage(res.data.message);
      
      // Clear the email input
      setEmail("");
      
      // Show success toast
      toast.success("Subscription successful!");
      
      // Close the modal after 2 seconds
      setTimeout(() => {
        onRequestClose();
      }, 2000);
      
    } catch (err) {
      // onRequestClose();
      setEmail("");
      toast.error("Subscription failed. Try again.", err);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="modal-overlay"
      contentLabel="Email Signup"
    >
      {/* Responsive ToastContainer */}
      <ToastContainer
        position={window.innerWidth <= 768 ? "bottom-center" : "top-right"}
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        className="toast-container"
        toastClassName="toast"
        bodyClassName="toast-body"
      />
      
      <div className="modal-container">
        
        {/* Left Banner Section */}
        <div className="modal-banner">
          <div className="banner-content">
            <h2 className="banner-title">
              {modalType === 'reserve' ? 'Limited Edition GMT Watch' : 'Coming Soon'}
            </h2>
            <p className="banner-text">
              {modalType === 'reserve' 
                ? 'Be among the first to own this exclusive timepiece' 
                : 'Stay updated with our launch progress and exclusive offers'
              }
            </p>
          </div>
        </div>
        
        {/* Right Form Section */}
        <div className="modal-content">
          <div className="content-inner">
            <div className="modal-header">
              <h2 className="modal-title">
                {modalType === 'reserve' ? 'Reserve Your Spot' : 'Get Notified'}
              </h2>
              <button 
                onClick={onRequestClose}
                className="close-button"
              >
                <svg className="close-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <p className="modal-description">
              {modalType === 'reserve' 
                ? 'Join the exclusive list for early access and special launch pricing on our premium GMT watch.' 
                : 'Get notified the moment our Kickstarter campaign goes live and receive exclusive updates.'
              }
            </p>
            
            <form onSubmit={handleSubmit} className="modal-form">
              <div className="input-group">
                <label htmlFor="email" className="input-label">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="email-input"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="submit-button"
              >
                {modalType === 'reserve' ? 'Reserve Now' : 'Notify Me'}
              </button>
               {message && <p className="message-text">{message}</p>}
            </form>
            
            <p className="privacy-text">
              We respect your privacy. Your information will never be shared with third parties.
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EmailSignupModal;