'use client'
import React, { useState, useReducer, useEffect, useRef  } from 'react'
import  "bootstrap/dist/css/bootstrap.min.css"

const User = ({params}) => { 
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [price, setPrice] = useState(0)
  const [training, setTraining] = useState('')
  const [data, setData] = useState(null)

  const [person, setPerson] = useState({
    fName: '',
    lName: '',
    price: 0,
    train: ''
   });
  
  const userId = params["user"]

  useEffect((params) => {
    fetch(`https://traino.nu/php/testgetuser.php?id=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFirstName(data.firstname)
        setLastName(data.lastname)
        setPrice(data.hourly_price)
        setTraining(data["training"][0]["category_name"])
      })
  }, [])

  function handleSubmit(e) {
    e.preventDefault() // Hindrar att sidan uppdateras vid input
    setPerson(prevState => ({
      ...prevState,
      fName: firstName,
      lName: lastName,
      price: price,
      train: training
  }));
    console.log(person.fName);
    console.log(person.lName);
    console.log(person.price);
    console.log(person.train);
  }


  
                              //  ---=== RETURN JSX ===---
  return (
    <>
      <form className="flex bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='firstName'>First Name</label>
          <input id='firstName' placeholder='New Item' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type='text' value={firstName} onChange={e => setFirstName (e.target.value)} />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='lastName'>Last Name</label>
          <input id='lastName' placeholder='New Item' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type='text' value={lastName} onChange={e => setLastName (e.target.value)} />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='price'>Price</label>
          <input id='price' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type='number' value={price} onChange={e => setPrice (Number(e.target.value))} />
        </div>        
        
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='trainingType'>Training</label>
          <input id='trainingType' placeholder='New Item' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type='text' value={training} onChange={e => setTraining (e.target.value)} />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='button'>Action</label>
          <button className='btn btn-primary' >Button</button>
        </div>
    </form>

    </>
  )
}

export default User