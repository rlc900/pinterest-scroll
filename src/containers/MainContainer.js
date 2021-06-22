import React from 'react';
import PinDataCard from '../components/PinDataCard.js';
import PinterestData from './PinDataContainer.js'
function MainContainer(props) {
    let pinData = PinterestData
    console.log(pinData)
    const renderPinCards = pinData.map((pin) => {
        return <PinDataCard pinData={pin}/>
    })
    // console.log(pinData)
//    function renderPinCards() {
        // console.log(pinData)
        // pinData.map((pin) => {
        // return <PinDataCard pinData={pin}/>
            // if (pin.title) {
            //     return <div><h1>{pin.title}</h1></div>
            // } else {
            //     return null
            // }
        //     return ( <Card>
        //     <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
        //     <Card.Content>
        //       <Card.Header>{pin.title}</Card.Header>
        //     </Card.Content>
        //   </Card>
        //     )
        // })
    // }
    
    return (
        <div>
            <h1>Hello</h1>
            {renderPinCards}
        </div>
    );
}

export default MainContainer;