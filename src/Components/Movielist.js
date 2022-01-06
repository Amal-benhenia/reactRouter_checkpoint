import React from 'react'
import Moviecard from './Moviecard';

export default function Movielist({movielist,search,rate}){
    return (
        <div>
            <div className='movielistContainer'>{
            movielist.filter(el=> el.title.toUpperCase().includes(search.toUpperCase().trim()) && el.rating>= rate)
            .map((el,key)=> <Moviecard key={el.id} movie={el}/>)  
            }
            </div>
            <Moviecard/>
        </div>
    )
}