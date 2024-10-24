import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const PrimaryNavigation = () => {
    return (
        <header className="relative inset-x-0 top-0 z-50 place-content-center container mx-auto">
            <nav className="flex items-center justify-center justify-between p-6 lg:px-8">
                <Link to="/">
                    <StaticImage className="object-scale-down h-35 w-40" alt="The Shark Fighter Logo" src="../images/The-Shark-Fighter-logo.png"/>
                </Link>
                <div className="flex text-sm lg:gap-x-12">
                    <Link className="font-semibold" to="/blog">Blog</Link>
                    <Link className='font-semibold' to='/portfolio'>Portfolio</Link>
                    <Link className="font-semibold" to="/about">About</Link>
                    <Link className='font-semibold' to="/contact">Contact</Link>
                </div>
            </nav>
      </header>
    )
}

export default PrimaryNavigation