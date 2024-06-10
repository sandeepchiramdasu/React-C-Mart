import React from "react";
import Mobiles from "./Mobiles";
import Computers from './Computers'
import Men from "./Men";
import Ac from "./Ac";
import Books from "./Books"
import Fridge from "./Fridge"
import Furniture from "./Furniture";
import Speakers from "./Speakers";
import Kitchen from "./Kitchen";
import Tv from "./Tv";
import Watch from "./Watch";
import Woman from "./Woman";

const Products = ()=>{
    return (
        <div>
            <Mobiles/>
            <Computers />
            <Men />
            <Ac />
            <Books />
            <Fridge />
            <Furniture />
            <Speakers />
            <Kitchen />
            <Tv />
            <Watch />
            <Woman />
        </div>
    )
}

export default Products;