import React, { useEffect, useState } from 'react';
import Header from './HeaderComponent';
import FilterComponent from './FilterComponent';
import image from '../assets/background.png';
import TrendingList from './LandingPage/TrendingList';
import AllEventsComponent from './AllEventsComponent';
import styles from './main_component.module.css';

function MainComponent() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/api/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                console.log(data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <Header />
            <div className='hero'>
                <img id='hero-img' src={image} alt="hero-halloween" width="100%" />
            </div>
            <TrendingList posts={posts} />
            <div className='all-events'>
                <h2 className={styles.title}>All Events</h2>
                <div className='filter-button-group'>
                    <FilterComponent />
                </div>
                <div className="all-events-grid-view">
                    <AllEventsComponent />
                </div>
            </div>
        </>
    );
}

export default MainComponent;