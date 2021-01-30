import React, { useState } from 'react';
const personData = [
    {
        name: 'Arun',
        age: '29 yrs',
        id: 1

    }, 
    {
        name: 'Teja',
        age: '28 yrs',
        id: 2
    },
    {
        name: 'Anvesh',
        age: '20 yrs',
        id: 3
    }
];

const Reminder = () => {
    const [person, setPerson] = useState(personData);
    const handleDelete = (id) => {
        let newPerson =  person.filter(p => p.id !== id);
        setPerson(newPerson);
        console.log(newPerson)
    }
    return (
        < div > 
           
             <h1 className='booklist' >Notes</h1>
             {
           person.map(p => {
                const { name, age, id } = p;
                return (
                    <div key={id} className='booklist'>
                        
                        <h1>{name}</h1>
                        <h4>{age}</h4>
                        <button type='button' onClick={() =>handleDelete(id)}> delete</button>
                    
                  
                    </div>
                );
            })} 
       </div>
    );
};
export default Reminder;