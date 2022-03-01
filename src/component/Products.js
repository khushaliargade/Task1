import React, { useState } from 'react';
import Home from './Home';
import SampleOutput from "./SampleOutput.json"


function Products(){
    return (
        <div className="product">
            <div className="posts">
                {SampleOutput.map((post) =>{
                    return(
                        <div key={post.pageid} className="post">
                        <h4>{post.title}</h4>
                        <p>{post.snippet}</p>
                        </div>
                        
                    )
                    

                })
                
                }
               
                
            </div>
        </div>
    )
}



export default Products
