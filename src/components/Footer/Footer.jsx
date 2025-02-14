import React from 'react'
import { FaGoogle, FaFacebook, FaPhone, FaTiktok, FaInstagram, FaInstagramSquare } from 'react-icons/fa'
import { FaMapLocation } from 'react-icons/fa6';
import Cards from "../../assets/credit-cards.webp";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <>
    <footer className='bg-primary pt-12 pb-8 text-white'>
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2
            md:grid-cols-3 gap-8">
      {/* company details section */}
      <motion.div 
        initial={{ opacity: 0, y:100,}}
        whileInView={{ opacity: 1, y: 0,}}
        transition={{
            delay: 0.2,
            duration: 0.6,
        }}
        className='space-y-6'>
        <h1 className='text-3xl font-bold uppercase'>Figure</h1>
        <p className='text-sm max-w-[300px]'>Our mission is to provide every music lover with the perfect pair of headphones that elevate their listening experience. Join us and discover the joy of exceptional sound.</p>
        <div>
            <p className='flex items-center gap-2'> <FaPhone /> +84 375133672</p>
            <p className='flex -items-center gap-2 mt-2'>{" "}<FaMapLocation /> 31 Nguyen Thi Thap District 7 HCMC</p>
        </div>
      </motion.div>
             {/* footer links section */}
             <motion.div 
             initial={{ opacity: 0, y:100,}}
             whileInView={{ opacity: 1, y: 0,}}
             transition={{
                 delay: 0.4,
                 duration: 0.6,
             }}
             
             className='space-y-6'>
    <h1 className='text-3xl font-bold'>Quick Links</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
        <div>
            <ul className='space-y-2'>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <ul className='space-y-2'>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
    </div>
</motion.div>


              {/* social links section */}
              <motion.div 
              initial={{ opacity: 0, y:100,}}
              whileInView={{ opacity: 1, y: 0,}}
              transition={{
                  delay: 0.6,
                  duration: 0.6,
              }}
              
              className='space-y-6'>
                <h1 className='text-3-xl font-bold'>Follow Us</h1>
                <div className='flex items-center gap-3'>
                    <FaFacebook className='text-3xl hover:scale-105 duration-300' />
                    <FaInstagramSquare  className='text-3xl hover:scale-105 duration-300'/>
                    <FaTiktok  className='text-3xl hover:scale-105 duration-300'/>
                    <FaGoogle  className='text-3xl hover:scale-105 duration-300'/>
                </div>
                <div className='space-y-2'>
                    <p>Payment Methods</p>
                    <img src={Cards} alt='' className='w-[80%]' />
                </div>
              </motion.div>
              </div>
                {/* copyright section */}
                <p className='text-white text-center mt-8 border-t-2 pt-8'>@2025. All Rights Reserve || Timmy</p>
        </div>
    </footer>   
    </>
  )
}

export default Footer