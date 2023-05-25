import {useSelector} from "react-redux";
import ListContainerComp from "../components/ListContainerComp";
import {List,ListItem,Card,Typography,CardBody,CardFooter,Button} from "@material-tailwind/react";
import {useNavigate} from "react-router-dom";

const Cart = () =>{


    const cartItems = useSelector((state) => state.cart.items);
    const total = useSelector((state) => state.cart.totalPrice);
    const navigate = useNavigate();

    const goToHome = () =>{
        navigate("/");
    }
    return(
        <div className="w-full flex items-center justify-between">
           <div className="w-full h-screen flex items-center justify-center">
                <Card className="w-96">
                   <CardBody>
                    {
                        (cartItems.length === 0?
                            <List>
                                <ListItem>
                                    <Button onClick={goToHome} color="green" className="w-full">Cart Is Empty. Add Products</Button>
                                </ListItem>
                            </List>
                            :
                            <ListContainerComp />
                        )
                    }
                   </CardBody>
                   <CardFooter className="flex items-center justify-between">
                        <Typography>Grand Total</Typography>
                        <Typography>{`${total} $`}</Typography>
                       
                   </CardFooter>
                   <div className="w-full px-4 py-2">
                        <Button className="w-full">Buy Now</Button>
                   </div>
                </Card>
           </div>
           
        </div>
    )
}

export default Cart;