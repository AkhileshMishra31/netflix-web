import React from 'react'
import Banner from './Banner'
import "./HomeScreen.css"
import Nav from './Nav'
import Row from './Row'

const HomeScreen = () => {
    return (
        <div>
            <Nav />
            <Banner /> 
            <Row  first={"first"} title={"Netflix-trending"} fetchurl={'/trending/all/week'}/>
            <Row title={"Netflix-Original"} fetchurl={'/discover/tv'}/>
            <Row title={"Top-Rated"} fetchurl={'/movie/top_rated'}/>
            <Row title={"Suspense-Thriller"} fetchurl={'/discover/movie'}/>
            <Row title={"Netflix-trending"} fetchurl={'/trending/all/week'}/>
            <Row title={"Netflix-trending"} fetchurl={'/trending/all/week'}/>
        </div>
    )
}

export default HomeScreen