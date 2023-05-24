import {ListItem,ListItemPrefix,Avatar,Typography} from "@material-tailwind/react";
import {TrashIcon} from "@heroicons/react/24/outline";
import {useDispatch} from "react-redux";
import { cartActions } from "../store/index.js";

const ListComp = (props) =>{
    const dispatch = useDispatch();


    const removeItem = () =>{
        console.log('c')
        dispatch(cartActions.removeItem({id:props.id,price:props.price}))
    }

    return(
        <div className="flex items-center justify-between">
               <div className="">
                <ListItem>
                        <ListItemPrefix>
                            <Avatar variant="circular" alt="candice" src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
                        </ListItemPrefix>
                        <div>
                            <Typography variant="h6" color="blue-gray">
                                {props.productName}
                            </Typography>
                            <Typography variant="small" color="gray" className="font-normal">
                                {`${props.price} $ `}
                            </Typography>
                        </div>
                    </ListItem>
               </div>
               <div className="">
                    <TrashIcon onClick={removeItem} className="h-6 w-6"/>
               </div>
        </div>
    )
}

export default ListComp;