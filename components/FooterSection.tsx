'use client';

import SecCont from '@/components/shared/SecCont';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ApproachSection() {
  const [email, setEmail] = useState('');
  const emailRef = useRef(null);

  async function onSubmit(email: string) {
    const emailRegex = /^[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(email)) {
      console.error('Provided email is not valid.');
      return;
    }

    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, '0')}-${String(currentDate.getDate()).padStart(
      2,
      '0'
    )} ${String(currentDate.getHours()).padStart(2, '0')}:${String(
      currentDate.getMinutes()
    ).padStart(2, '0')}:${String(currentDate.getSeconds()).padStart(2, '0')}`;

    const labeledValues = {
      date: formattedDate,
      email: email,
    };

    const pipedreamWorkflowUrl = 'https://eo1bqa4p1ozdf7v.m.pipedream.net';

    try {
      const response = await fetch(pipedreamWorkflowUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(labeledValues),
      });

      if (response.ok) {
        toast.success('Email submitted successfully!')
      } else {
        toast.error('Email submission failed!')
      }
    } catch (error) {
      toast.error('Unknown Error');
    }
  }

  return (
    <SecCont className=' '>
      <div className='dark:text-white w-full flex justify-between items-center sm:items-end flex-col sm:flex-row gap-5 sm:gap-0'>
        <span className='dark:text-white'>
          © All rights reserved. By Volton AI.
        </span>
        <div className='flex flex-col gap-4 items-center sm:items-start'>
          <h3 className='text-lg lg:text-2xl font-semibold gap'>
            Join Our Newsletter
          </h3>

          <div className='rounded-full border-[2px] border-black dark:border-white flex p-[2px] relative bg-transparent z-[50]'>
            <input
              type='text'
              placeholder='Email Address'
              ref={emailRef}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='text-xs lg:text-sm outline-none focus:outline-none border-none pl-2 bg-transparent'
            />
            <button
              className='transition-all hover:shadow-lg hover:border-transparent  group hover-button uppercase text-xs lg:text-sm  rounded-full border-[2px] border-black dark:border-white flex px-5 py-1'
              onClick={() => onSubmit(email)}
            >
              <span className='dark:text-white group-hover:text-white transition-all relative z-[50]'>
                Submit
              </span>
            </button>
          </div>
        </div>
      </div>
    </SecCont>
  );
}
