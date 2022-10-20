
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import RestaurantCard from './DisplayResCard'
export const DisplayRestaurantById = () => {

    let [resdata, setResdata] = useState([])

    //To get the id of the restaurant (as the path has id) we use useLocation()
    let location = useLocation()
    // split the path
    location = location.pathname.split('/')
    let refNo = location[location.length - 1]  // id will always be at last index
    //this will get records when the component is called
    useEffect(() => {
        const fetchAllRestaurants = async () => {
            try {
                const res = await axios.get("http://localhost:3001/admin/restaurant/" + refNo);
                const arr = [res.data]
                setResdata(arr.slice())
            }
            catch (err) {
                console.log("Error in displaying the restaurants. " + err)
            }
        }
        fetchAllRestaurants()
    }, [refNo]
    )

    return (
        <div>
            <div className="SpecificRestaurants">
                <h1>Restaurant With Given Reference #</h1>&nbsp;
                {resdata.map((rest) => (
                    <div key={rest._id}>
                        <RestaurantCard rest={rest} />
                    </div>

                    // <div className="Restaurant" key={rest._id}>
                    //     <img src={rest.restImg} alt="No pic or network error"></img>
                    //     <h2>{rest.name}</h2>
                    //     <h2>{rest.location.City}</h2>
                    //     <h2>{rest.location.street}</h2>
                    //     <h2>{rest.location.zipcode}</h2>
                    //     <h3>{rest.refNo}</h3>
                    //     <h3>{rest.dateCreated.date}   {rest.dateCreated.time}</h3>
                    //     <button><Link to={`/update/${rest._id}`}>Update</Link></button>
                    //     <button onClick={()=>handleDelete(rest._id)}>Delete</button>
                    // </div>
                ))}

            </div>
        </div>
    );
}