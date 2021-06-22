import React from 'react';
import { Card, Image } from 'semantic-ui-react'

function PinDataCard({pinData}) {
    // console.log(pinData)
   
    return (
        <div>
          <Card>
             <Image src={pinData.board.image_thumbnail_url} wrapped ui={false} />
             <Card.Content>
               <Card.Header>{pinData.title}</Card.Header>
             </Card.Content>
           </Card>
        </div>
    )
}

export default PinDataCard;

