import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Card } from 'react-bootstrap';

const NewsSummeryCard = ({ news }) => {
    const { _id, title, author, details, rating, total_view, image_url } = news;
    return (
        <Card className="mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <Image
                        roundedCircle
                        src={author.img}
                        style={{ height: '60px' }}
                    ></Image>
                    <div className='ms-2'>
                        <p className='mb-0'>{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark className='me-2'></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details?.length > 250 ?
                            <>{details.slice(0, 250) + '...'}<Link to={`/news/${_id}`}> Read more </Link></> :
                            details
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between">
                <div>
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>{rating?.number}</span>
                </div>
                <div className='d-flex '>
                    <FaEye className='me-2'></FaEye>
                    <p>{total_view}</p>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummeryCard;