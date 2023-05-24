import {useState} from 'react';
import {Card, CardHeader, CardBody,CardFooter,Input, Button, Typography} from "@material-tailwind/react";
import {UserCircleIcon} from "@heroicons/react/24/outline";
import auth from '../../firebase/firebase.js';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {authActions} from '../store/index.js';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';


const SignupComp = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("none");
    const [password, setPassword] = useState("none");
    const [invalid, setInvalid] = useState(false);

    const logIn = async() =>{
        
        try{
            const userData = await signInWithEmailAndPassword(auth,email,password);
            dispatch(authActions.login(userData.user.uid));
            navigate('/');
        }catch(error){
            setInvalid(true);
        }
        
        
    }
    return(
        <div className="">
            <Card className="w-[25rem]">
                <CardHeader color="blue" floated={false} shadow={false} className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center">
                    <div className="mb-4 rounded-full border border-white/10 bg-white/10 p-6 text-white">
                        <UserCircleIcon className="h-10 w-10" />
                    </div>
                    <Typography variant="h4" color="white">
                        Sign In To Wire Cart
                    </Typography>
                </CardHeader>
                <CardBody>
                    <div className="mt-6">
                        <Input onChange={(e) => setEmail(e.target.value)} type="email" label="Email Address"  />
                    </div>
                    <div className="mt-6">
                        <Input onChange={(e) => setPassword(e.target.value)}type="password" label="Account Password" />
                    </div>
                </CardBody>
                <CardFooter className="w-full">
                    {
                        (invalid?
                            <Typography color="red" className="my-4 text-center">Invalid Credentials</Typography>
                            :
                            <></>    
                        )
                    }
                    <Button onClick={logIn} size="lg" className="w-full">Sign In</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default SignupComp;