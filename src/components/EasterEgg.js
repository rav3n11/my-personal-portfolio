import React, { useContext } from 'react'
import { BsGiftFill } from "react-icons/bs";
import { AppContext } from '../App';

export function EasterEgg() {
    const scrolled = useContext(AppContext).scrolled;
  return (
    <a className='easter-egg-a' href="https://easteregg.berekett.me">
    <div className={`easter-egg ${scrolled && 'scrolled'}`}>
      <BsGiftFill className={`easter-egg-image ${scrolled && 'scrolled'}`} color="#000" />
    </div>
    </a>
  )
}
