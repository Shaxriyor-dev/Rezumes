import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigator = useNavigate()
  const [login , setLogin] = useState("");
  const [password , setPassword] = useState("");
  const [err , setErr] = useState("")
  const [color , setColor] = useState("color");
    
    const handleclick = ()=>{
        if(login == "Admin" && password == "12345678"){
          setColor("lime")
          setTimeout(()=>{
            navigator('/admins')
          } , 1000)
        }else{
          setColor("red")
             setErr("Sizning loginningiz xato")
        }
    }
  return (
    <div className='flex items-center justify-center w-[910px] h-[100%] p-6 inset-ring-1 inset-ring-neutral-900 mt-10 rounded-lg bg-[#121212]'>
        <div className='w-[550px]'>
          <p className='text-2xl font-[Boldonse]'>l m user sign in</p>
             <input style={{border : `solid 2px  ${color}`}} value={login} onChange={(e)=> setLogin(e.target.value)} className='text-lg text-white p-3 w-full font-[Poppins] outline-none border-2 rounded-sm mt-10' type="email" placeholder='Email inclusion' />
             <input style={{border : `solid 2px ${color}`}} value={password} onChange={(e)=> setPassword(e.target.value)} className='text-lg text-white p-3 w-full font-[Poppins] outline-none border-2 rounded-sm mt-6' type="password" placeholder='Password inclusion' />
             {err && 
                <h1 style={{color : color}} className='mt-3 text-sm p-1'>{err}</h1>
            }
             <input onClick={handleclick} className='text-lg text-white p-3 w-full font-[Poppins] outline-none border-2 rounded-sm mt-10' type="button" value={"Sumbit"} />
        </div>
    </div>
  )
}

export default Login
