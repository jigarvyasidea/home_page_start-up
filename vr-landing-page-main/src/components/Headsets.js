import React from 'react';

// import images
import headset from '../assets/img/headset.png';
import affilate from '../assets/img/affilate.png';
import youtube from '../assets/img/youtube.png';
import suprememodel from '../assets/img/suprememodel.png';

const Headsets = () => {
  return (
    <section className='py-12 lg:py-24'>
      <div className='container mx-auto'>
        {/* title */}
        <h2
          className='text-3xl font-bold mb-6'
          data-aos='fade-down'
          data-aos-offset='300'
        >
       Supreme Starter Kit Courses Bundle
        </h2>
        {/* grid */}
        <div className='grid gap-y-4 lg:grid-cols-2 lg:gap-9'>
          {/* item */}
          <div
            className='relative'
            data-aos='zoom-in'
            data-aos-offset='300'
            data-aos-delay='1000'
          >
            <img src={headset} alt='' />
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h4 className='font-semibold text-xl mb-2'>Blogging</h4>
              <p>
              Complete Beginner to Advance Blogging mastery to build successful online blog.
              </p>
            </div>
          </div>
          {/* item */}
          <div
            className='relative'
            data-aos='zoom-in'
            data-aos-offset='300'
            data-aos-delay='1300'
          >
            <img src={affilate} alt='' />
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h4 className='font-semibold text-xl mb-2'>Affiliate Marketing</h4>
              <p>
              Learn Step by step on how to start affiliate marketing as a beginner and get results..
              </p>
            </div>
          </div>
          {/* item */}
          <div
            className='relative'
            data-aos='zoom-in'
            data-aos-offset='300'
            data-aos-delay='1600'
          >
            <img src={youtube} alt='' />
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h4 className='font-semibold text-xl mb-2'>Youtube </h4>
              <p>
              Complete YouTube Mastery Course
LifeTime video Course Access 24*7,
Bi-Weekly Live Classes to discuss Q & A,
Learn to Grow over YouTube and Earn 
              </p>
            </div>
          </div>
          {/* item */}
          <div
            className='relative'
            data-aos='zoom-in'
            data-aos-offset='300'
            data-aos-delay='1900'
          >
            <img src={suprememodel} alt='' />
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h4 className='font-semibold text-xl mb-2'>SEO</h4>
              <p>
              Complete Search engine optimization or Google SEO for beginner step by step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headsets;
