import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const EmailSignupModal = ({ isOpen, onRequestClose, modalType }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");   

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/signup", { email });
      setMessage(res.data.message);
      setEmail("");
      toast.success("Subscription successful!");
    } catch (err) {
      toast.error("❌ Subscription failed. Try again.",err);
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
            <div className="flex justify-between items-center mb-6">
              <h2 className="modal-title">
                {modalType === 'reserve' ? 'Reserve Your Spot' : 'Get Notified'}
              </h2>
              <button 
                onClick={onRequestClose}
                className="close-button"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="mb-6">
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
               {message && <p>{message}</p>}
            </form>
            
            <p className="privacy-text">
              We respect your privacy. Your information will never be shared with third parties.
            </p>
          </div>
        </div>
     
      </div>

      {/* Add CSS for the modal */}
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }
        
        .modal {
          position: relative;
          outline: none;
          width: 90%;
          max-width: 900px;
          height: auto;
          max-height: 90vh;
          overflow: hidden;
          border-radius: 16px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        
        .modal-container {
          display: flex;
          height: 100%;
        }
        
        .modal-banner {
          width: 45%;
          background: linear-gradient(135deg, #1e40af 0%, #3730a3 100%);
          color: white;
          padding: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        
        .modal-banner::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
          opacity: 0.3;
        }
        
        .banner-content {
          position: relative;
          z-index: 1;
          text-align: center;
        }
        
        .banner-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }
        
        .banner-text {
          font-size: 1.4rem;
          opacity: 0.9;
          line-height: 1.5;
        }
        
        .modal-content {
          width: 55%;
          background: white;
          padding: 40px;
          display: flex;
          align-items: center;
        }
        
        .content-inner {
          width: 100%;
        }
        
        .modal-title {
          font-size: 2.2rem;
          font-weight: bold;
          color: #1f2937;
          margin: 0;
        }
        
        .close-button {
          color: #9ca3af;
          transition: color 0.2s;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        
        .close-button:hover {
          color: #4b5563;
        }
        
        .modal-description {
          font-size: 1.3rem;
          color: #6b7280;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        
        .input-label {
          display: block;
          font-size: 1.2rem;
          color: #374151;
          margin-bottom: 0.75rem;
          font-weight: 500;
        }
        
        .email-input {
          width: 100%;
          padding: 1rem 1.25rem;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 1.2rem;
          transition: all 0.2s;
        }
        
        .email-input:focus {
          outline: none;
          border-color: #f59e0b;
          box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.2);
        }
        
        .submit-button {
          width: 100%;
          background: #f59e0b;
          color: white;
          font-weight: bold;
          font-size: 1.3rem;
          padding: 1.2rem;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.2s, transform 0.1s;
        }
        
        .submit-button:hover {
          background: #d97706;
        }
        
        .submit-button:active {
          transform: scale(0.98);
        }
        
        .privacy-text {
          text-align: center;
          font-size: 0.95rem;
          color: #9ca3af;
          margin-top: 1.5rem;
        }
        
        @media (max-width: 768px) {
          .modal-container {
            flex-direction: column;
          }
          
          .modal-banner, .modal-content {
            width: 100%;
          }
          
          .modal-banner {
            padding: 30px 20px;
          }
          
          .banner-title {
            font-size: 2rem;
          }
          
          .banner-text {
            font-size: 1.2rem;
          }
          
          .modal-content {
            padding: 30px 20px;
          }
          
          .modal-title {
            font-size: 1.8rem;
          }
          
          .modal-description {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </Modal>
    
  );
};

export default EmailSignupModal;