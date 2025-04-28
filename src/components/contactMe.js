import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export const Contact = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 my-20">
            <div className="text-right">
                <h2 className="text-3xl pb-6 text-cyan-500">Interested in working together?</h2>
                <hr className="border-4 border-rose-400 w-48 mb-6 ml-auto"></hr>
                <div className="mb-4">
                    <h3 className="font-bold text-cyan-500">Phone number</h3>
                    <a className="hover:underline" href="tel:3033969904">303-396-9904</a>
                </div>
                <div className="mb-4">
                    <h2 className="font-bold text-cyan-500">Email</h2>
                    <a className="hover:underline" href="mailto:luke.hinrichs@gmail.com">luke.hinrichs@gmail.com</a>
                </div>
                <div className="mb-4">
                    <h2 className="font-bold text-cyan-500">Location</h2>
                    <p>Denver, Co</p>
                </div>
            </div>
            <div className="rounded-lg overflow-hidden">
                <StaticImage
                    src="../images/black-shirt-beach-photo.jpg"
                    alt="Photo of Luke Hinrichs"
                    className="rounded-lg"
                    placeholder="blurred"
                    layout="constrained"
                    width={400}
                    height={280}
                />
            </div>

        </section>

    )
}
