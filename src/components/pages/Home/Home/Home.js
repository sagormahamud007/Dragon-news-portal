import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../../../newsSummeryCard/NewsSummeryCard';

const Home = () => {
    const AllNews = useLoaderData();
    return (
        <div>
            {
                AllNews.map(news => <NewsSummeryCard
                    key={news._id}
                    news={news}
                ></NewsSummeryCard>)
            }
        </div>
    );
};

export default Home;