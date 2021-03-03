import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';


const MenuItem = props => {
    console.log(props);
    return(

        <div>
            <Card>
                <CardBody>
                    <CardImg width="100" alt={props.dish.name} src={props.dish.image} />
                    <CardImgOverlay>
                        <CardTitle style={{ cursor: "pointer" }} 
                        onClick={props.DishSelect}
                    >
                            {props.dish.name}
                        </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>

        </div>
    );

}
export default MenuItem;