'use client'
import {FaUsers} from 'react-icons/fa'
import {IoIosPricetags} from 'react-icons/io'
import {FaDumbbell} from 'react-icons/fa6'

import {motion} from 'framer-motion'
import fadeIn from '@/lib/variants'
import { div } from 'framer-motion/client'

import { Achievements } from './Achievements'
const featured = [
  {
    icon: <FaUsers />,
    title: 'Expert Trainers',
    description: 'Our trainers are certified experts dedicated to helping you achieve your fitness goals.',
  },
  {
    icon: <IoIosPricetags />,
    title: 'Affordable Pricing',
    description: 'We offer competitive pricing plans to suit every budget without compromising on quality.',
  },
  {
    icon: <FaDumbbell />,
    title: 'State-of-the-Art Equipment',
    description: 'Our gym is equipped with the latest fitness technology to enhance your workout experience.',
  }
]

export const About = () => {
  return (
    <section className='pt-8 pb-14 lg:pt-16 lg:pb-28' id="about">
      <div className='container mx-auto'>
        <div className='flex flex-col items-center gap-2 mb-8'>
          <h2 className='h2 text-center font-bold'>
            Sobre Nosotros            
          </h2>
          <p className='max-w-[600px] mx-auto text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt culpa pariatur blanditiis maiores, maxime sed molestias rerum incidunt aspernatur repudiandae, cupiditate obcaecati fuga ipsam veniam molestiae sequi, doloribus fugit!</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16'>
          {featured.map((item, index) => {
            return (
              <div key={index} className='flex flex-col justify-center items-center gap-4 border border-100 rounded-xl p-10 m-3'>
                  <div className='text-4xl bg-black text-white w-[80px] h-[80px] rounded-full flex justify-center items-center'>
                    {item.icon}
                  </div>
                  <div className='flex flex-col items-center text-center gap-2 justify-center'>
                    <h4 className='h4 font-bold text-[#89e400]'>{item.title}</h4>
                    <p className=''>{item.description}</p>
                  </div>               
              </div>
            )

          })}
        </div>
        <Achievements />

      </div>
    </section>
  )
}
