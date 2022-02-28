import React from 'react'
import Item from './Item'
const Home = () => {
    return (
        <div className="class">
            <div className="card bg-dark text-black border-0">
                <img src="/assest/pic.jpg" class="card-img" alt="Backgroung" height="550px" />
                <div class="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                    <h5 class="card-title display-3 fw-bolder mb-0">card title</h5>
                    <p class="card-text lead fs-2">
                        check all
                    </p>
                    <p class="card-text">last update</p>
                </div>
                </div>
                
                 
            </div>
        </div>
    )
}

export default Home
