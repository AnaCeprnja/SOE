import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
    return (
        <div className='cards'>
            <h1>Get Involved </h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img1.jpg'
                            text='"We don’t have time to sit on our hands as our planet burns. For young people, climate change is bigger than election or re-election. It’s life or death.”
-Alexandria Ocasio-Cortez'
                            label='Climate Change'
                            path='/blog'
                        />
                        <CardItem
                            src='images/panda.jpg'
                            text='"Nature does not need people - people need nature; nature would survive the extinction of the human being and go on just fine, but human culture, human beings, cannot survive without nature."- Harrison Ford'
                            label='Species Extinction'
                            path='/blog'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/pol.jpg'
                            text='“Water and air, the two essential fluids on which all life depends, have become global garbage cans.”
                            ― Jacques-Yves Cousteau'
                            label='Pollution'
                            path='/blog'
                        />
                        <CardItem
                            src='images/fire.jpeg'
                            text='
                            “Humanity should not remain insensitive to the forest fire or wildfire every year. Unless we act, the loss of biodiversity and extinction of herbs, birds and animals and the pains of the trees, birds, animals and the poor is also alarming signal for the extinction of humanity itself.”
                            ― Amit Ray'
                            label='Wildfires'
                            path='/blog'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;