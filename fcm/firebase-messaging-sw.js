// Import the functions you need from the SDKs you need
importScripts("https://www.gstatic.com/firebasejs/12.3.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.3.0/firebase-messaging-compat.js");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCkdOyM19D3RLUys1ELbRM0s_KHrF_2ahI",
    authDomain: "gomasjid-test-services.firebaseapp.com",
    projectId: "gomasjid-test-services",
    storageBucket: "gomasjid-test-services.firebasestorage.app",
    messagingSenderId: "200093785497",
    appId: "1:200093785497:web:cd6829ce9676b301b18708",
    measurementId: "G-E6MB34Q72J"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
        '[firebase-messaging-sw.js] Received background message ',
        payload
    );
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

    //self.registration.showNotification(notificationTitle, notificationOptions);
});