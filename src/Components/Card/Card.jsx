import React from 'react';
import { toast } from 'react-toastify';
import calenderimg from '../../assets/calendar.png'

const Card = ({ customer, setInProgress, inProgress, task, setTask }) => {
    return (
        <div>
            <div onClick={() => {
                toast('Add to the task')
                setInProgress(inProgress + 1)
                setTask([...task, customer])
                // console.log('clicked')
            }} className="card shadow-md h-[180px] w-11/12 md:w-full mx-auto bg-white p-4">

                <div className='flex justify-between items-center mb-4'>
                    <h2 className="card-title text-[18px]">{customer.title}</h2>
                    <p className={`btn text-[16px] rounded-4xl border-none ${customer.status === "Open" ? "bg-[#B9F8CF]" : "bg-[#F8F3B9]"} ${customer.status === "Open" ? "text-[#0B5E06]" : "text-[#9C7700]"}`}><span className={`${customer.status === "Open" ? "bg-[#02A53B]" : "bg-[#FEBB0C]"} w-[10px] h-[10px] rounded-full`}></span>{customer.status}</p>
                </div>
                <p className='text-[#627382] text-[16px]'>{customer.description}</p>
                <div className="card-actions justify-between mt-4">
                    <div className='flex gap-3'>
                        <p className='text-[#627382] text-[14px]'>#{customer.id}</p>
                        <p className={`text-[14px] font-medium ${customer.priority === "Low" ? "text-[#02A53B]" : customer.priority === "High" ? "text-[#F83044]" : "text-[#FEBB0C]"}`}>{customer.priority}</p>
                    </div>
                    <div className='flex gap-3'>
                        <p className='text-[#627382] text-[14px]'>{customer.customer}</p>
                        <p className='text-[#627382] text-[14px] flex items-center'>
                            <img className='w-[15px] h-[15px] mr-1' src={calenderimg} alt="" />{customer.createdAt}</p>
                    </div>
                </div>

            </div>
        </div>
        
    );
};

export default Card;