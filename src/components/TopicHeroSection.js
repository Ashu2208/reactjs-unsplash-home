
import "./topicHeroSection.css";
import { useSelector } from 'react-redux';


const TopicHeroSection = () => {

    const topic = useSelector(state => state.topicReducer.topic);
    const randomTopicPhoto = useSelector(state => state.topicReducer.randomTopicPhoto);
    return (
        <div className='container'>
            <div className='heroSectionContainer' style={{
                "background": `url(${randomTopicPhoto?.urls?.regular})`
                // "background": `url(${topic?.cover_photo?.urls?.regular})`
            }}
            >
                <div className='backShadow'>
                    <div className='heroContent'>
                        <div className='topicDetail'>
                            <span className='topicTitle'>{topic.title}</span>
                            <span className='topicDescription'>{topic.description}</span>
                            <button className='topicSubmit'>Submit to <b> {topic.title} </b></button>
                        </div>
                    </div>

                    <div className='heroFooter'>
                        <span >Photo by {randomTopicPhoto?.user?.name}</span>
                        <span className='unsplashLicenceLink' >Read more about the Unsplash Licence</span>
                        <span >Extra Detail If Any</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TopicHeroSection