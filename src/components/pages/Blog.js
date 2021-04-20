import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';


function Blog() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img5.jpg'
                            text='NASA-Built Instrument Will Help Spot Greenhouse Gas Super-Emitters'
                            label='NASA'

                            path='/blog'
                        />
                        <CardItem
                            src='images/img4.jpg'
                            text='NASA Satellites Detect Signs of Volcanic Unrest Years Before Eruptions'
                            label='NASA'
                            path='/blog'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img2.jpg'
                            text='Global Climate Change: What You Need to Know'
                            label='NRDC'
                            path='/blog'
                        />
                        <CardItem
                            src='images/img3.jpg'
                            text='Climate Change Is Accelerating, Bringing World ‘Dangerously Close’ to Irreversible Change'
                            label='New York Times'
                            path='/blog'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Blog;