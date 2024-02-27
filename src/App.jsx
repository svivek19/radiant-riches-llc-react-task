import React from 'react';
import Navbar from './component/Navbar';
import HeadSection from './component/HeadSection';
import Card from './component/Card';
import data from './data.json';
import SingleCard from './component/SingleCard'

const App = () => {

  return (
    <div className='bg-[#FBFCFD]'>
      <Navbar />
      <HeadSection />
      {data.sections.map((section, index) => (
        <Card
          key={index}
          title={section.title}
          para={section.para}
          paraTwo={section.paraTwo}
          num={section.num}
          perform={section.perform}
          build={section.build}
          id={section.id}
        />
      ))}
      {data.SingleCard.map((card, index) => (
        <SingleCard
          key={index}
          title={card.title}
          para={card.para}
          offer={card.offer}
          build={card.build}
          id={card.id}
          perform={card.perform}
          num={card.num}
        />
      ))}
    </div>
  );
};

export default App;
