'use client'
import React from 'react'
import {motion,AnimatePresence} from "framer-motion"
import { useState } from 'react'
import { useSearchParams,useRouter } from 'next/navigation'
import {ChevronLeft, Facebook, Instagram, Key, ShoppingBag, Star} from "lucide-react"
import { Button } from '@/components/ui/button'
import { div } from 'framer-motion/client'
const Auth = () => {
  const [isSignup, setisSignup] = useState(true)
  const [isLoading,setIsLoading]=useState(true)
  const [isSubmitting,setIsSubmitting]=useState(false)
  const [inputValues,setInputValues]=useState({})
  const [error,setError]=useState(null)



  const router=useRouter();
  const searchParams=useSearchParams();

  const toggleForm=()=>{
    setisSignup(!isSignup)
    setError(null)
    setInputValues({})
  }

  return (
  <div className='flex min-h-screen bg-gray-900 text-white'>
  <div className='w-full max-w-6xl mx-auto flex flex-col lg:flex-row'>
    <AnimatePresence mode="wait">
      <motion.div key={isSignup ? "signup" : "signin"} className='w-full lg:h-3/5 p-4 sm:p-8  lg:p-12' 
      initial={{opacity:0,x:isSignup ? 50 : -50}} 
      animate={{opacity:1,x:0}} 
      exit={{opacity:0,x:isSignup ? 50 : -50}} 
      transition={{duration:0.5}}>
        <div className='mb-8 lg:mb-12 cursor-pointer' onClick={()=>router.push('/')}>
          <ChevronLeft className='text-gray-400 h-6 w-6 sm:h-8 sm:w-8'/>
        </div>
        <motion.div
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{delay:0.2}}>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4'>
            {isSignup ? "Sign Up" : "Sign In"}
          </h2>
          <p className='text-base sm:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8'>
            {
              isSignup 
            ? "Join our e-commerce platform and start shopping"
            : "Welcome Back! Please enter your details"
            }
          </p>
        </motion.div>
        <motion.div className='mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-x-4' initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.7}}>
          <div className="text-base sm:text-lg lg:text-xl text-gray-400">
            Or continue with
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" size="icon" className='bg-gray-900 border-gray-700 w-12 h-12 sm:w-auto sm:h-auto p-2' disabled={isSubmitting}>
              <Facebook className='h-5 w-5 sm:h-6 sm:w-6'/>
              <span className='hidden sm:inline-block sm:ml-2'>
                Facebook
              </span>
            </Button>
            <Button variant="outline" size="icon" className='bg-gray-900 border-gray-700 w-12 h-12 sm:w-auto sm:h-auto p-2' disabled={isSubmitting}>
              <Instagram className='h-5 w-5 sm:h-6 sm:w-6'/>
              <span className='hidden sm:inline-block sm:ml-2'>
                Instagram
              </span>
            </Button>
          </div>
        </motion.div>
        <motion.div className='mt-4 sm:mt-5 flex items-center justify-center' 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.8}}>
          <p className='text-base sm:text-lg lg:text-xl text-white'>
            {
              isSignup ? "Already a member" : "Don't have an account"
            }
            <Button variant="link" className='text-lg sm:text-xl lg:text-2xl text-white' disabled={isSubmitting} onClick={toggleForm}>
              {
                isSignup ? "Sign In" : "Sign up"
              }
            </Button>
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
    <motion.div className='w-full hidden lg:w-2/5 bg-gradient-to-br from-[#00FFFF] to-black p-12 lg:flex flex-col justify-between items-center h-full'
    initial={{opacity:0,x:50}}
    animate={{opacity:1,x:0}}
    transition={{delay:0.5}}>
     <div className='space-y-12 h-full flex flex-col items-center justify-center'>
      <motion.div className='bg-black bg-opacity-50 p-8 rounded-lg shadow-lg'
      initial={{opacity:0,y:20}}
      animate={{opacity:1,y:0}}
      transition={{delay:0.4}}>
        {
          isSignup ? (
            <>
              <h3 className='text-3xl font-bold mb-4'>New Arrivals</h3>
              <p className='text-5xl font-bold mb-4'>1,234</p>
              <div className='flex justify-between items-center w-full'>
                <div className='h-3 w-36 bg-black bg-opacity-50 rounded-full overflow-hidden'>
                  <motion.div 
                  className='h-full bg-[#00FFFF]'
                  initial={{width:0}}
                  animate={{width:"70%"}}
                  transition={{delay:0.6,duration:0.8}}/>
                </div>
                <span className='text-2xl font-bold text-end'>
                  70%  increase
                </span>
              </div>
            </>
          ) :(
            <div className='p-3 py-0'>
              <h3 className='text-3xl font-bold mb-4'>Customer Reviews</h3>
              <div className='flex items-center mb-4'>
                {[...Array(5)].map((_,i)=>(
                  <Star key={i} className='text-yellow-400 h-8 w-8 mr-1'/>
                ))}
                <span className='ml-2 text-3xl font-bold'>4.9</span>
              </div>
              <p className='text-xl text-gray-200'>
                Based on 10,000+ reviews
              </p>
            </div>
          )}
      </motion.div>
      <motion.div className='bg-black bg-opacity-50 p-8 rounded-lg shadow-lg'
      initial={{opacity:0,y:20}}
      animate={{opacity:1,y:0}}
      transition={{delay:0.5}}>
        <div className='flex items-center mb-4'>
          {
            isSignup ? (
              <ShoppingBag className='text-[#00FFFF] h-8 w-8 mr-4'/>
            ) : (
              <Key className='text-[#00FFFF] h-8 mr-4'/>
            )}
            <h3 className='text-2xl font-bold'>
              {isSignup ? "Exclusive Deals" : "Secure Shopping"}
            </h3>
        </div>
        <p className='text-xl text-gray-200'>
          {
            isSignup
            ? "Sign up now and get access to exclusive deals and promotions"
            : "Your data is protected with state-of-the-art encrpytion technology."
          }
        </p>
      </motion.div>
     </div>
    </motion.div>
  </div>
  </div>
  )
}

export default Auth;
