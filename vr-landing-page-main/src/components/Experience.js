import React from 'react';

// import images
import nineday from '../assets/img/nineday.png';


const Experience = () => {
  return (
    <section className='mb-12 lg:mb-24'>
      <div className='container mx-auto'>
        <div className='flex flex-col min-h-[480px] lg:space-x-20 lg:flex-row'>
          <div className='flex-1 flex space-x-6 items-center lg:space-x-12'>
            {/* images */}
            <div
              className='self-start'
              data-aos='fade-down'
              data-aos-offset='400'
            >
              <img src={nineday} alt='' />
            </div>
           
          </div>
          {/* text */}
          <div
            className='flex-1 flex flex-col items-start justify-center mt-6 lg:mt-0'
            data-aos='fade-left'
            data-aos-offset='400'
          >
            <h2 className='text-3xl font-bold mb-6'>
            Join 9 Days Blogging Mastery
            </h2>
            <p className='font-secondary mb-6'>
            If you have ever dreamed of a lifestyle, which you are living on your own conditions and has enough financial freedom to experience beauty of your Life with family and friends then we will together propsper you and many others in the community.
            </p>
            <button className='btn'>Click Here to Register Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
