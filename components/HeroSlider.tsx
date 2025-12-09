'use client'
import { CustomButton } from './CustomButton'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { SwiperNavButtons } from './SwiperNavButtons'
import {motion} from 'framer-motion'
import fadeIn from '@/lib/variants'

export const HeroSlider = () => {
  return (
    <Swiper className='h-full'>
      <SwiperSlide>
        <div className='h-full flex justify-end pt-48'>
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
            <motion.h1 variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.2}} className='h1 text-center lg:text-left mb-2'>
              <span className='text-[#a6ff21]'>Studio </span>Fitness <br />GYM
            </motion.h1>
            <motion.p 
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.2}}
            className='text-white italic text-center lg:text-left mb-4'>
              Donde el fitness no solo transforma cuerpos, sino vidas. Inicia tu viaje hoy.
            </motion.p>
            <CustomButton text='Empezar Ahora' containerStyles='w-[196px] h-[62px]' />
          </div>
        </div>     
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-full flex justify-end pt-48'>
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
            <motion.h1 variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.2}}
            className='h1 text-center lg:text-left mb-2'>
              <span className='text-[#a6ff21]'>Where Hard</span> work meet success
            </motion.h1>
            <motion.p 
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.2}}
            className='text-white italic text-center lg:text-left mb-4'>
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
            </motion.p>
            <CustomButton text='Get Started' containerStyles='w-[196px] h-[62px]' />
          </div>
        </div>     
      </SwiperSlide>
      <SwiperNavButtons containerStyles='absolute bottom-2 lg:bottom-0 right-0 h-[130px] w-full lg:w-[700px] z-50 flex justify-center lg:justify-start gap-1' btnStyles='border border-[#a6ff21] text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-[#a6ff21]/[0.1] transition-all duration-300' iconStyles='text-2xl' />
    </Swiper>
  )
}
