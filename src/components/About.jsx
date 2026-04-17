import React from 'react';
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion";

const About = () => {
    const blocks = ABOUT_TEXT.trim().split("\n\n");

    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h1 className='my-20 text-center text-4xl'>
                Naša <span className='text-neutral-500'>práca</span>
            </h1>

            <div className='flex flex-wrap'>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className='w-full lg:w-1/3 lg:p-8 '>
                    <div className='flex items-center justify-center pt-10'>
                        <img className='rounded-2xl' src={aboutImg} alt="about" />
                    </div>
                </motion.div>

                <motion.div
                    whileInView={{ opacity: 1, x: 0}}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className='w-full lg:w-1/2 pt-10'>
                    
                    <div className='flex flex-col justify-center lg:justify-start gap-6'>
                        {blocks.map((block, i) => {
                            const [title, ...text] = block.split("\n");
                            return (
                                <div key={i}>
                                    <h6 className='mb-2 font-semibold'>
                                        {title}
                                    </h6>
                                    <p className='text-neutral-400 leading-relaxed'>
                                        {text.join(" ")}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                </motion.div>
            </div>
        </div>
    )
}

export default About;