import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../../../newsSummeryCard/NewsSummeryCard';

const Category = () => {
    const CategoryNews = useLoaderData();

    return (
        <div>

            {
                CategoryNews.map(news => <NewsSummeryCard
                    key={news._id}
                    news={news}
                ></NewsSummeryCard>)
            }
        </div>
    );
};

export default Category;