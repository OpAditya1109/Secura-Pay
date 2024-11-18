import React, { useState, useEffect } from "react";
import "../CSS/style.css";
import { assets } from "../assets/assets";
import { BrowserQRCodeReader } from "@zxing/library"; // Ensure ZXing library is installed

const Home = () => {
  const [isScanning, setIsScanning] = useState(false); // To manage scanner state
  const [qrCodeResult, setQrCodeResult] = useState(""); // Store QR code result

  useEffect(() => {
    if (isScanning) {
      const video = document.getElementById("video");
      const codeReader = new BrowserQRCodeReader();

      // Start scanning from the camera
      codeReader
        .decodeFromInputVideoDevice(undefined, "video")
        .then((result) => {
          console.log(result);
          setQrCodeResult(result.text); // Update QR code result state
          stopScanning(); // Stop scanning once the QR code is read
        })
        .catch((err) => {
          console.error(err);
          alert("Error: " + err); // Display error for debugging
        });

      // Ensure the video plays (this might not work due to autoplay restrictions)
      video.play().catch((error) => {
        console.error("Video play failed:", error); // Log error if autoplay fails
      });
    }
  }, [isScanning]);

  // Function to start scanning
  const startScanning = () => {
    setIsScanning(true); // Begin QR code scanning
    const maindiv = document.getElementById("main");
    const video = document.getElementById("video");
    video.style.display = "block"; // Show the video element for scanning
    maindiv.style.display = "none"; // Hide the main content
  };

  // Function to stop scanning
  const stopScanning = () => {
    setIsScanning(false); // Stop scanning
    const video = document.getElementById("video");
    const maindiv = document.getElementById("main");
    video.style.display = "none"; // Hide the video element
    maindiv.style.display = "block"; // Show the main content
  };

  return (
    <div id="container">
      <div id="main">
        <header className="header pd">
          <div className="header__user">
            <img className="photo" src={assets.profile} alt="user profile" />
            <div className="info">
              <div className="info__username">Aditya Yadav</div>
              <div className="info__upiid">AdityaYadav@spayupi</div>
            </div>
          </div>
          <div className="header__option">
            <ion-icon className="option-icon" name="ellipsis-vertical" />
          </div>
        </header>
        <main className="main">
          <div className="tez">
            <div className="tez__circle">
              <button
                id="scanner_click"
                className="scanner_click"
                onClick={startScanning}
              >
                <img src={assets.logo} alt="" />
              </button>
            </div>
            <p className="tez__text">Tap for Secure Mode</p>
          </div>
        </main>
        <section className="slider">
          <div className="logo-wrap">
            <img
              className="logo-wrap__img"
              src={assets.logo2}
              alt="google pay logo"
            />
          </div>
          <div className="slider__contact">
            <div className="contact-item">
              <div className="contact-item__photo">₹</div>
              <p className="contact-item__name">New</p>
            </div>
            <div className="contact-item">
              <div
                className="contact-item__photo contact-item__photo--alert"
                style={{ backgroundColor: "purple" }}
              >
                D
              </div>
              <p className="contact-item__name">Dhairya</p>
            </div>
            <div className="contact-item">
              <div
                className="contact-item__photo contact-item__photo--alert"
                style={{ backgroundColor: "rgb(241, 102, 52)" }}
              >
                H
              </div>
              <p className="contact-item__name">Hrithik</p>
            </div>
            <div className="contact-item">
              <div
                className="contact-item__photo"
                style={{ backgroundColor: "rgb(56, 56, 173)" }}
              >
                E
              </div>
              <p className="contact-item__name">Esha</p>
            </div>
            <div className="contact-item">
              <div
                className="contact-item__photo"
                style={{ backgroundColor: "green" }}
              >
                R
              </div>
              <p className="contact-item__name">Rudra</p>
            </div>
            <div className="contact-item">
              <div
                className="contact-item__photo"
                style={{ backgroundColor: "rgb(115, 115, 228)" }}
              >
                A
              </div>
              <p className="contact-item__name">Aditya</p>
            </div>
            <div className="contact-item">
              <div
                className="contact-item__photo"
                style={{ backgroundColor: "purple" }}
              >
                R
              </div>
              <p className="contact-item__name">Ronak</p>
            </div>
            <div className="contact-item">
              <div
                className="contact-item__photo"
                style={{ backgroundColor: "darkgoldenrod" }}
              >
                J
              </div>
              <p className="contact-item__name">James</p>
            </div>
          </div>
          <div className="slider__business">
            <p className="business-head">Businesses</p>
            <p className="business-subhead">Frequent and smart suggestions</p>
            <div className="business-list">
              <div className="business-item">
                <div
                  className="business-item__photo"
                  style={{ backgroundColor: "orangered" }}
                >
                  I
                </div>
                <p className="business-item__name">India</p>
              </div>
              <div className="business-item">
                <div
                  className="business-item__photo"
                  style={{ backgroundColor: "rgb(231, 231, 231)" }}
                />
              </div>
              <div className="business-item">
                <div
                  className="business-item__photo"
                  style={{ backgroundColor: "rgb(231, 231, 231)" }}
                />
              </div>
            </div>
          </div>
          <div className="slider__promo">
            <p className="promo-head">Promotions</p>
            <div className="promo-list">
              <div className="promo-item">
                <img
                  className="promo-item__photo"
                  src={assets.oyo}
                  alt="oyo rewards"
                />
                <p className="promo-item__name">OYO</p>
              </div>
              <div className="promo-item">
                <img
                  className="promo-item__photo"
                  src={assets.grofers}
                  alt="grofers rewards"
                />
                <p className="promo-item__name">Grofers</p>
              </div>
            </div>
          </div>
          <div className="slider__options">
            <div className="option">
              <ion-icon className="option__icon" name="refresh" />
              <p className="option__text">All transactions</p>
            </div>
            <div className="option">
              <ion-icon className="option__icon" name="card-outline" />
              <p className="option__text">Check balance</p>
            </div>
            <div className="option">
              <ion-icon className="option__icon" name="heart" />
              <div className="text-wrap">
                <p className="option__text">Invite a friend</p>
                <p className="option__subtext">
                  Get ₹51 after each friend's first payment
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="scanner" style={{ display: isScanning ? "block" : "none" }}>
         <button id="close-button" onClick={stopScanning}>
             <img src={assets.close} alt="Close" />
          </button>
        <video id="video" style={{ width: "100%", height: "100%" }} />
        <div className="scanner-frame">
         
          <div className="scanner-border top-left" />
          <div className="scanner-border top-right" />
          <div className="scanner-border bottom-left" />
          <div className="scanner-border bottom-right" />
        </div>
      </div>
      {qrCodeResult && <div className="qr-result">QR Code: {qrCodeResult}</div>}
    </div>
  );
};

export default Home;
