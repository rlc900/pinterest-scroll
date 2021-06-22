import React from 'react';
import { Card, Image } from 'semantic-ui-react'

function PinDataCard({pinData}) {
    // console.log(pinData)

    // function renderPinCards() {
        // console.log(pinData)
        // pinData.map((pin) => {
        //     if (pin.title) {
        //         return <div><h1>{pin.title}</h1></div>
        //     } else {
        //         return null
        //     }
        //     return ( <Card>
        //     <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
        //     <Card.Content>
        //       <Card.Header>{pin.title}</Card.Header>
        //     </Card.Content>
        //   </Card>
        //     )
    //     })
    // }
   
    return (
        <div>
          <Card>
             <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
             <Card.Content>
               <Card.Header>{pinData.title}</Card.Header>
             </Card.Content>
           </Card>
        </div>
    )
}

export default PinDataCard;

