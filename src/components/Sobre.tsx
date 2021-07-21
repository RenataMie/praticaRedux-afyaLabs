import React, { FormEvent,  useState  } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { addNewUser } from "../store/modules/actions";

interface IData{
    name: string;
    age: string;
    email: string;
}


const Sobre: React.FC = () => {

    const [ data, setData ] = useState<IData>( {} as IData)

    const dispatch = useDispatch();

    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        setData({name:"", age:"", email:""})
        dispatch((addNewUser(data)))
        toast.success("ok!")
        
    }

  return (
      <div>
         <form onSubmit={handleSubmit}>
             <input type="text" value={data.name} placeholder="nome" onChange={e => setData({...data, name: e.target.value})}/>
             <input type="text" value={data.age} placeholder="idade" onChange={e => setData({...data, age: e.target.value})}/>
             <input type="text" value={data.email} placeholder="email" onChange={e => setData({...data, email: e.target.value})}/>
             <input type="submit" value="enviar"/>

         </form>
       
      </div>
  );
}

export default Sobre;