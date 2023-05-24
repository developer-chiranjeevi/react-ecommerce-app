import {useSelector} from "react-redux";
import ListComp from "../components/ListComp";
import {List,Card,Typography,CardBody,CardFooter,Button} from "@material-tailwind/react";
const Cart = () =>{


    const cartItems = useSelector((state) => state.cart.items);
    const total = useSelector((state) => state.cart.totalPrice);
    return(
        <div className="w-full flex items-center justify-between">
           <div className="w-full h-screen flex items-center justify-center">
                <Card className="w-96">
                   <CardBody>
                    <List>
                        {
                            cartItems.map((item) =>(
                                <ListComp id={item.id} key={item.id} productName={item.product_name} price={item.price}/>
                            ))
                        }
                    </List >
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