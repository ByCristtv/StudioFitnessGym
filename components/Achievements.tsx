
import { useInView, motion } from 'framer-motion'
import { useRef} from 'react'
import CountUp from 'react-countup'
import { FaBriefcase, FaClock, FaTrophy } from 'react-icons/fa'

const stats = [
  {
    icon: <FaTrophy className='text-4xl text-[#a6ff21]' />,
    title: 'Total Wins',
    value: 150,
  },
  {
    icon: <FaClock className='text-4xl text-[#a6ff21]' />,
    title: 'Hours Trained',
    value: 1200,
  },
  {
    icon: <FaBriefcase className='text-4xl text-[#a6ff21]' />,
    title: 'Clients Served',
    value: 300,
  },
  {
    icon: <FaTrophy className='text-4xl text-[#a6ff21]' />,
    title: 'Awards Won',
    value: 25,
  }
]

const statsContainerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.5,
    },
  },
};

export const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section>
      <div className='container mx-auto'>
        <motion.div 
        variants={statsContainerVariant}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
        className='grid grid-cols-2 md:grid-cols-4 gap-16'>
          {stats.map((stat, index) => {
            return (
              <div className='flex flex-col justify-center items-center' key={index}>
                <div className='border border-[#a6ff21]/90 w-[140px] h-[140px] mx-auto rounded-full p-1 mb-6'>
                  <div ref={ref} className='border border-[#a6ff21]/30 w-full h-full flex justify-center items-center text-5xl rounded-full'>

                    {isInView && (
                      <CountUp start={0} end={stat.value} duration={6} />

                    )}
                  </div>
                </div>
                <div className='flex flex-xol justify-center items-center text-center'>
                  <div className='text-3xl mb-2'>{stat.icon}</div>
                  <h4 className='h4'>{stat.title}</h4>
                </div>
              </div>
            )

          })}
        </motion.div>


      </div>
    </section>
  )
}
