import React from 'react'
import Header from '../Components/Header'
import Slider from '../Components/Slider'
import Categories from '../Components/Categories'
import StartProducts from '../Components/StartProducts'
import StartBlog from '../Components/StartBlog'
import StartInstagramFeed from '../Components/StartInstagramFeed'
import Footer from '../Components/Footer'
import Copyright from '../Components/Copyright'

export default function Home() {
    return (
        <>
            {/* <Slider /> */}
            <Categories />
            <StartProducts />
            <br />
            <StartBlog />
        </>
    )
}
