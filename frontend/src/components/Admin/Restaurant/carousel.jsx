

import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function AllImageSlider(props){

    return(
        <div id="carousel">
            <Carousel variant='light' className='w-50' style={{margin: 'auto'}}>
                    {props.resdata.map( (rest)=>(
                        <Carousel.Item key={rest._id} interval={1200}>
                            <img className="d-block w-100" src={rest.restImg} alt="Not available"/>
                            <Carousel.Caption>
                                <h3>{rest.name}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                
            </Carousel>
        </div>
    );

}

export default AllImageSlider;


//

/* <Carousel variant='dark' className='w-50' style={{margin: 'auto'}}>
                    {resdata.map( (rest)=>(
                        <Carousel.Item key={rest._id} interval={1200}>
                            <img className="d-block w-100" src={rest.restImg} alt="Not available"/>
                            <Carousel.Caption>
                                <h3>{rest.name}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                
            </Carousel> */