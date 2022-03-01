import React from 'react'
import Item from './Item'
//import Products from './Products'
//import SampleOutput from "./SampleOutput.json"

import {
    Input, Label
} from "reactstrap"


const Home = () => {
    return (
        <div className="product">
            <div className="posts">
                <img
                    alt="Card image cap"
                    src="./assest/plant.jpg"
                    width="100%"
                />


                <div className="reviews">
                    <Label  tag="h2" >
                        Reviews
                    </Label>
                    <Input
                        id="exampleText"
                        name="text"
                        type="textarea"
                    />
                </div>


            </div>
        </div>
    )
}

export default Home
