import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './Item'
//Make canva images to use here instead to make it more appealing
const home1 = require('../assets/home1.jpg')
const home2 = require('../assets/home2.jpg')
function ImgCarousel(props)
{
    
    const slider = [
        {
            "id":1,
            "image":home1,
            "title":"home1",
        },
        {
            "id":2,
            "image":home2,
            "title":"home2",
        }
    ]
    

    return (
        <div>
            <Carousel indicatorContainerProps={{
    style: {
      zIndex: 1,
      marginTop: "-24px",
      position: "relative"
    }
  }}>
            {
                
                slider.map( (item, i) => <Item key={item.id} item={item}/> )
                
            }
            </Carousel>
        </div>
        
        
    )
}

export default ImgCarousel