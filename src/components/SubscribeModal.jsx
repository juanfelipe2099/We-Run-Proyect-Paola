// eslint-disable-next-line react/prop-types
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6kj4gcbFVapcSyCPLovGE39dBheYX7mk",
  authDomain: "base-de-datos-871c8.firebaseapp.com",
  projectId: "base-de-datos-871c8",
  storageBucket: "base-de-datos-871c8.appspot.com",
  messagingSenderId: "780220343243",
  appId: "1:780220343243:web:6e18b52bfcc918575d0c4e",
  measurementId: "G-1Y2DYYKBZ3",
};

// eslint-disable-next-line react/prop-types
export const SubscribeModal = ({ handleClose }) => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const [subscriber, setSubscriber] = useState({
    email: "",
    name: "",
  });
  const saveSubscription = async () => {
    try {
      const docRef = await addDoc(collection(db, "subscribers"), subscriber);
      console.log("Document written with ID: ", docRef.id);
      handleClose();
    } catch (e) {
      console.error("Error adding document: ", e);
      handleClose();
    }
  };

  const checkEmail = (e) =>
    setSubscriber({ ...subscriber, email: e.target.value });

  const checkName = (e) =>
    setSubscriber({ ...subscriber, name: e.target.value });

  return (
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="container">
              <img
                src="https://ugc.production.linktr.ee/hTZoQ6QoRUi4C7RR1Qh8_Jv348HJz49173k0o"
                alt="we run"
                width={100}
                height={100}
              />
              <h5 className="modal-title">
                Subscribe to ProyectoWeRun and Nike Pegasus
              </h5>
              <h6>Stay up to date with everything important.</h6>
            </div>
            <div className="container-title"></div>
            <form>
              <div className="mb-3">
                <label htmlFor="InputName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="InputName"
                  value={subscriber.name}
                  onChange={checkName}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="InputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={subscriber.email}
                  onChange={checkEmail}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary btn-style"
              onClick={saveSubscription}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeModal;
