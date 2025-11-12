import React from 'react';
import linkedinimg from '../../assets/linkedin-big-logo.png'
import facebookimg from '../../assets/facebook.png'
import mailimg from '../../assets/mail.png'
import twitterimg from '../../assets/twitter.png'

const Footer = () => {
    return (
        <div className='bg-black text-white mx-auto py-10 mt-14'>
            <div className='grid grid-cols-1 px-4 md:grid-cols-5 gap-5 max-w-[1200px] w-11/12 mx-auto text-[#A1A1AA] border-b-1 border-b-gray-600 pb-7'>
                <div>
                    <h2 className='text-xl font-bold text-white mb-3'>CS — Ticket System</h2>
                    <p className='text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='md:ml-14'>
                    <h3 className='text-xl font-medium text-white mb-3'>Company</h3>
                    <ul className='text-xs space-y-3'>
                        <li>About Us</li>
                        <li>Our Mission</li>
                        <li>Contact Saled</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl font-medium text-white mb-3'>Services</h3>
                    <ul className='text-xs space-y-3'>
                        <li>Products & Services</li>
                        <li>Customer Stories</li>
                        <li>Download Apps</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl font-medium text-white mb-3'>Information</h3>
                    <ul className='text-xs space-y-3'>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Join Us</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl font-medium text-white mb-3'>Social Links</h3>
                    <ul className='text-xs space-y-3'>
                        <li className='flex items-center'><img className='bg-white rounded-full w-[15px] h-[15px] mr-2' src={twitterimg} alt="" />@CS — Ticket System</li>
                        <li className='flex items-center'><img className='bg-white rounded-full w-[15px] h-[15px] mr-2' src={linkedinimg} alt="" />@CS — Ticket System</li>
                        <li className='flex items-center'><img className='bg-white rounded-full w-[15px] h-[15px] mr-2' src={facebookimg} alt="" />@CS — Ticket System</li>
                        <li className='flex items-center'><img className='bg-white rounded-full w-[15px] h-[15px] mr-2' src={mailimg} alt="" />support@cst.com</li>
                    </ul>
                </div>
            </div>
            <p className='text-center mt-14 '>© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
    );
};

export default Footer;