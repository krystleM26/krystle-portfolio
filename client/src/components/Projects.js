import React from "react";

const Projects = (props) => {
return (

<div className="container">
    <h1>
       Projects Page
        </h1> 

        <div className="containerBody">
            <img src={props.img} alt="" />
            <h2 className="card-title">Gym Ratz</h2>
            <p className="card_info">Get off your couch, and join Gym Ratz anywhere in the world</p>
            <buttom className="card__btn">View Project</buttom>
        </div>
        <div className="containerBody">
            <img src="https://images.unsplash.com/photo-1518310952931-b1de897abd40?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742" alt="" />
            <h2 className="card-title">Gym Ratz</h2>
            <p className="card_info">Get off your couch, and join Gym Ratz anywhere in the world</p>
            <buttom className="card__btn">View Project</buttom>
        </div>
        <div className="containerBody">
            <img src="https://images.unsplash.com/photo-1518310952931-b1de897abd40?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742" alt="" />
            <h2 className="card-title">Gym Ratz</h2>
            <p className="card_info">Get off your couch, and join Gym Ratz anywhere in the world</p>
            <buttom className="card__btn">View Project</buttom>
        </div>
        
</div>
)
}

export default Projects