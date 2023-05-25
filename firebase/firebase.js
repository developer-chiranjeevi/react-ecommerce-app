import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBIYpb0izcW8DcgR9gi_M3gC1URGWe45cY",
    authDomain: "react-redux-ecommerce-bad5f.firebaseapp.com",
    projectId: "react-redux-ecommerce-bad5f",
    storageBucket: "react-redux-ecommerce-bad5f.appspot.com",
    messagingSenderId: "224721617368",
    appId: "1:224721617368:web:87179be7c2405278ecb2ad"
})

const auth = getAuth(firebaseApp);

export default auth;
