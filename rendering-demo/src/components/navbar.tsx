'use client'
import NavLink from "./nav-link"
import NavSearch from "./nav-search"
import {useState} from 'react'

export default function Navbar(){
    console.log('navbar rendering')
    const [search,setSearch]=useState('')
    return(
        <div>
            <NavLink/>
            <NavSearch/>
        </div>
    )
}