import React from 'react';
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon
 } from 'react-share'

const shareClassnames = 'flex justify-center p-2 rounded bg-gray-100 hover:bg-gray-200 mr-0 md:mr-3 mb-4 md:mb-0'

const Share = () => {
  return (
    <div className='cursor-pointer w-full flex flex-col md:flex-row justify-center my-6'>
      <div className={shareClassnames}>
        <FacebookShareButton className='flex w-auto items-center' url='https://form.bocadoapp.com'>
          <FacebookIcon className='mr-3' size={32} round /> Facebook
        </FacebookShareButton>
      </div>
      <div className={shareClassnames}>
        <TwitterShareButton className='flex w-auto items-center' url='https://form.bocadoapp.com'>
          <TwitterIcon className='mr-3' size={32} round /> Twitter
        </TwitterShareButton>
      </div>  
      <div className={shareClassnames}>
        <WhatsappShareButton className='flex w-auto items-center' url='https://form.bocadoapp.com'>
          <WhatsappIcon className='mr-3' size={32} round /> WhatsApp
        </WhatsappShareButton>
      </div>
      <div className={shareClassnames}>
        <TelegramShareButton className='flex w-auto items-center' url='https://form.bocadoapp.com'>
          <TelegramIcon className='mr-3' size={32} round /> Telegram
        </TelegramShareButton>
      </div>        
    </div>
  )
}

export default Share;