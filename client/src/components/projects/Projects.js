import React from "react";
import  './projects.css'
import  healingInt from '../../assets/HealingInt.png'

const Projects = () => {
return (

<div className="containerBody">
    <h2>
       Projects 
        </h2> 

    <div className="containerProject">
        <div className="img-card">

           <img src={healingInt} alt="Healing Intentions Natural-logo" />
        </div>
            <h3 className="card-title">Healing Intentions</h3>
            <p className="card_info">E-commerce Business</p>
            <button className="card__btn">View Project</button>
       </div> 

     <div className="containerProject">
            <div className="img-card">

            <img src="https://images.unsplash.com/photo-1518310952931-b1de897abd40?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742" alt="" />
            </div>
            <h3 className="card-title">Gym Ratz</h3>
            <p className="card_info">Get off your couch, and join Gym Ratz anywhere in the world</p>
            <button className="card__btn">View Project</button>
       </div>
    {/* <div className="containerProject">
        <div className="img-card">

            <img src="https://images.unsplash.com/photo-1518310952931-b1de897abd40?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742" alt="" />
        </div>
            <h3 className="card-title">Gym Ratz</h3>
            <p className="card_info">Get off your couch, and join Gym Ratz anywhere in the world</p>
            <button className="card__btn">View Project</button>
       </div> */}
      
</div>
)
}

export default Projects 