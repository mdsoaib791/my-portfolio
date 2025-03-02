import React from 'react'
import Header from './navigation/Header'
import HomeBanner from './hero/HomeBanner'
import Courses from './courses/Courses'
import Contact from './contact/Contact'
import Footer from './footer/Footer'

export default function HomePageWrapper() {
    return (
        <div>
            <Header />
            <HomeBanner />
            <Courses />
            <Contact />
            <Footer />
        </div>
    )
}
