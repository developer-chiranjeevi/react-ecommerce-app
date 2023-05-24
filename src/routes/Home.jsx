import {useState} from 'react';
import NavbarComp from "../components/NavbarComp";
import CardComp from "../components/CardComp";
import FooterComp from "../components/FooterComp";


const Home = () =>{

    const [items, setItems] = useState([
        {id:1,product_name:"MacBook Air",price:800},
        {id:2,product_name:"IWatch",price:500},
        {id:3,product_name:"Iphone 14 Pro",price:600},
        {id:4,product_name:"Ipad mini",price:400},
        {id:5,product_name:"Ipad Air",price:600},
        {id:6,product_name:"Ipad Pro",price:800},
    ]);


    return(
        <div className="">
            <div className="">
                <NavbarComp />
            </div>
            <div className="w-full flex justify-between items-center flex-wrap px-4">
               {
                items.map((item) =>(
                    <CardComp id={item.id} key={item.id} product_name={item.product_name} price={item.price}/>
                ))
               }
            </div>
            <div className="">
                <FooterComp />
            </div>
        </div>
    )
}

export default Home;