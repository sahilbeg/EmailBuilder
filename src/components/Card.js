import React from 'react'
import { useDrag } from 'react-dnd';

export default function Card({id,url,Label, Alt}) {
    // Targetting Dragable component
    // const [{isDragging}, drag] = useDrag(() => ({
    //     type:"div",
    //     collect: (monitor) => ({
    //         isDragging: !!monitor.isDragging(),
    //     })
    // }))
  return (
    <div class="card" ><img draggable="False" class="icon" src={url} id={id} Alt={Alt} /><p>{Label}</p></div>
  )
}

