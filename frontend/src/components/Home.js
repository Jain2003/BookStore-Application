import React from "react";
import "./home.css";

const Home = () =>{
    return <div>
    <h1> The main purpose of this application is to manage an online bookstore where the all the products can be seen, edited, deleted.</h1>
    <div className="images ">
    <h3>Applications for an easier Life..</h3>
    <img className="image-1" src="https://media.wired.com/photos/5ea306a39d94950008221206/16:9/w_2400,h_1350,c_limit/Cul-bookstore-1220322748.jpg" alt="bookstore" />
    <img className="image-2" src="https://media.istockphoto.com/id/1249219777/photo/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-logo-in-a-trolley-on-a.jpg?s=612x612&w=0&k=20&c=EWKEahyVLY8iAHyirCCDESHRGW37lqUJ7In0SssNSLE=" alt="bookstore" />
    </div>
    </div>;
};

export default Home;