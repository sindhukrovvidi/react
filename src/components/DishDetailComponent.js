import React from 'react';
import { Card, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
// import { Control, LocalForm } from 'react-redux-form';
// import { Loading } from './LoadingComponent';
// import { baseUrl } from '../shared/baseUrl';
// import { FadeTransform, Fade, Stagger } from 'react-animation-components';

    function RenderDish({dish, favorite, postFavorite}) {
            return(
                <div className="col-12 col-md-5 m-1">
                   
                        <Card>
                            {/* <CardImg top src={baseUrl + dish.image} alt={dish.name} /> */}
                            {/* <CardImgOverlay>
                                <Button outline color="primary" onClick={() => favorite ? console.log('Already favorite') : postFavorite(dish._id)}>
                                    {favorite ?
                                        <span className="fa fa-heart"></span>
                                        : 
                                        <span className="fa fa-heart-o"></span>
                                    }
                                </Button>
                            </CardImgOverlay> */}
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                   
                </div>
            );

    }

    function RenderComments({comments, postComment, dishId}) {   
        if (comments != null)
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                     
                            {comments.map((comment) => {
                                return (
                                  
                                        <li>
                                        <p>{comment.comment}</p>
                                        <p>{comment.rating} stars</p>
                                        <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                        </li>
                                    
                                );
                            })}
                      
                    </ul>
                  
                </div>
            );
        else
            return(
                <div></div>
            );
    }

    const DishDetail = (props) => {
       if (props.dish != null)        
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <RenderDish dish={props.dish} favorite={props.favorite} postFavorite={props.postFavorite} />
                        <RenderComments comments={props.comments}
                            postComment={props.postComment}
                            dishId={props.dish._id} />
                    </div>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

export default DishDetail;