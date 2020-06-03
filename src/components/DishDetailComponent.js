import React, { component, Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'
class DishComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {debugger
        if (this.props.dish != null)
            return (
                <Card>
                    <CardImg width="100%" object src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                        <CardTitle heading>{this.props.dish.name}</CardTitle>
                        <CardText>
                            {this.props.dish.description}
                        </CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }
}

export default DishComponent;