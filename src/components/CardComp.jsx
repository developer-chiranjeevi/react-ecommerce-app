import {Card,CardHeader,CardFooter,Typography,CardBody,Button} from "@material-tailwind/react";
import {ShoppingCartIcon,CheckIcon} from "@heroicons/react/24/outline";
import {useDispatch,useSelector} from "react-redux";
import {cartActions} from '../store/index.js';
import { useNavigate } from "react-router-dom";


const CardComp = (props) =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cart = useSelector((state) => state.cart.items);
    const exists = cart.find((item) => props.id === item.id);
    const isLoggedin = useSelector((state) => state.auth.isLoggedIn);

    const addToCart = () =>{
        if(!isLoggedin){
            navigate('/signup');
            return;
        }
        dispatch(cartActions.addItem({id:props.id,product_name:props.product_name,price:props.price}));
    }


    return(
        <div className="my-4">
            <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-56">
                    <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="img-blur-shadow" />
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        {props.product_name}
                    </Typography>
                    <Typography>
                        The place is close to Barceloneta Beach and bus stop just 2 min by walk
                        and near to &quot;Naviglio&quot; where you can enjoy the main night life
                        in Barcelona.
                    </Typography>
                    <Typography variant="h5" className="mt-4">
                        {`${props.price} $`}
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    {
                        (exists?
                            <Button color="green" className="inline-flex">
                                Added To Cart
                                <CheckIcon className="h-4 w-4 ml-2 mt-0"/>
                            </Button>
                            :
                            <Button disabled={exists} onClick={addToCart}className="inline-flex">
                                Add To Cart
                                <ShoppingCartIcon className="h-4 w-4 ml-2 mt-0"/>
                            </Button>
                        )
                    }
                </CardFooter>
            </Card>
        </div>
    )
}

export default CardComp;