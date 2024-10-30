import * as React from 'react'
import PrimaryNavigation from './navigation'

const SiteFooter = () => {
    return (
        <footer className="bg-slate-300 py-6 mt-5">
            <section className="container mx-auto ">
                <p>small excerpt about my experence</p>
                <p>Copywrite 2023 The Shark Fighter</p>
            </section>
            <div>
            <PrimaryNavigation />
            </div>
        </footer>
    )
}

export default SiteFooter