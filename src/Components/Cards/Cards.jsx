import React, { use, useEffect, useState } from 'react';
import Card from '../Card/Card';
import { toast } from 'react-toastify';

const Cards = ({ customerPromise, setInProgress, inProgress, resolved, setResolved, customers, setCustomers }) => {
    const [task, setTask] = useState([])

    

    // console.log(task)
    const customerData = use(customerPromise)
    // console.log("fetchCustomer done", customerData)
    useEffect(() => {
        setCustomers(customerData)
    }, [customerData]);
    const handleComplete = (completedTask) => {
        toast('Completed')
        setResolved([...resolved, completedTask])
        setTask(task.filter(t => t.id !== completedTask.id))
        setCustomers(customers.filter(c => c.id !== completedTask.id))
        setInProgress(inProgress - 1)
    }
    return (
        <div className='max-w-[1200px] mx-auto mt-14'>
            <h2 className='font-bold text-3xl mb-5 pl-5 md:pl-0'>Customer Tickets</h2>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-5'>


                <div className='col-span-1 md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {
                        customers.map(customer => <Card key={customer.id} task={task} setTask={setTask} setInProgress={setInProgress} inProgress={inProgress} customer={customer}></Card>)
                        // customerData.map(customer => )
                    }
                </div>
                <div className='space-y-5 col-span-1 md:col-span-3 w-11/12 md:w-full mx-auto'>
                    <div className='bg-white p-3 rounded-xl'>
                        <h2 className='font-bold'>Task Status</h2>
                        <p>Select a ticket to add to Task Status</p>
                        <div className='mt-3 space-y-2'>
                            {
                                task.length > 0 ? task.map((task) => (
                                    <div className='bg-white p-2 rounded-xl shadow-md'>
                                        <h2 className='text-lg font-medium'>{task.title}</h2>
                                        <button onClick={() => handleComplete(task)} className='btn bg-[#02A53B] text-white w-full mt-2'>Completed</button>
                                    </div>
                                ))
                                    : <p className='text-sm text-gray-600'>No tasks added yet</p>
                            }
                        </div>
                    </div>
                    <div className='bg-white p-3 rounded-xl'>
                        <h2 className='font-bold'>Resolved Task ({resolved.length})</h2>
                        {
                            resolved.length > 0 ? resolved.map((task) => <div className='bg-[#E0E7FF] p-2 rounded-xl shadow-md mb-2 mt-3'>
                                <h2 className='text-lg font-medium'>{task.title}</h2>

                            </div>) : <p>No resolved tasks yet</p>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;