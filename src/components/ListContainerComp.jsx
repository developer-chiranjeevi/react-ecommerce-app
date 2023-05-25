import {List} from "@material-tailwind/react";
import {useSelector} from "react-redux";
import ListComp from "./ListComp";
const ListContainerComp = () =>{

    const cartItems = useSelector((state) => state.cart.items);

    return(
        <div className="">
            <List>
                {
                cartItems.map((item) =>(
                    <ListComp id={item.id} key={item.id} productName={item.product_name} price={item.price}/>
                ))
                }
            </List >
        </div>
    )
}

export default ListContainerComp;