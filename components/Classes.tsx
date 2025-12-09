'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import fadeIn from '@/lib/variants';
import { CustomButton } from './CustomButton';
import { tr } from 'framer-motion/client';


const classes = [
  {
    name: 'Culturismo',
    img: '/assets/img/classes/bodybuilding.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusantium suscipit incidunt sit.',
  },
  {
    name: 'cardio',
    img: '/assets/img/classes/cardio.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusantium suscipit incidunt sit.',
  },
  {
    name: 'fitness',
    img: '/assets/img/classes/fitness.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusantium suscipit incidunt sit.',
  },
  {
    name: 'crossfit',
    img: '/assets/img/classes/crossfit.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusantium suscipit incidunt sit.',
  },
]


export const Classes = () => {
  return (
    <section id='class'>
      <motion.div
        variants={fadeIn('up', 0.6)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0.2 }}
        className='grid grid-cols-1 lg:grid-cols-2'
      >
        {classes.map((item, index) => {
          return (
            <div
              className='relative w-full h-[300px] lg:h-[485px] flex flex-col justify-center items-center'
              key={index}
            >
              {/* overlay */}
              <div className='bg-black/50 absolute w-full h-full top-0 z-10'></div>
              <Image src={item.img} fill className='object-cover' alt='' />
              {/* text & btn */}
              <div className='z-30 max-w-[380px] text-center flex flex-col items-center justify-center gap-4'>
                <motion.h3
                  variants={fadeIn('up', 0.3)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.2 }}
                  className='h3 text-[#a6ff21]'
                >
                  {item.name}
                </motion.h3>
                <motion.p
                  variants={fadeIn('up', 0.4)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.2 }}
                  className='text-white'
                >
                  {item.description}
                </motion.p>
                <motion.div
                  variants={fadeIn('up', 0.4)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <CustomButton
                    containerStyles='w-[164px] h-[46px]'
                    text='Saber más'
                  />
                </motion.div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  )
}
