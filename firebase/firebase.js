import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseApp = initializeApp({
   //firebase tokens
})

const auth = getAuth(firebaseApp);

export default auth;
