import * as React from 'react'
import Layout from '../components/layout'

const ContactPage = () => {
    return (
        <main>
            <Layout pageTitle="Contact Me">
                <section className="grid grid-cols-4 gap-4 max-w-7xl mx-auto">
                    <div className="bg-cyan-900 text-white rounded-lg col-span-3 p-6">
                        <h1 className="text-3xl font-thin mb-2">Contact Me</h1>
                        <p>UX/UI research, web developent, brand management</p>
                        <div className="grid grid-cols-2 gap-4 mt-5">
                            <div>
                                <p className="font-bold">Phone number</p>
                                <a className="hover:underline" href="tel:3033969904">303-396-9904</a>
                            </div>
                            <div>
                                <p className="font-bold">Email</p>
                                <a className="hover:underline" href="mailto:luke.hinrichs@gmail.com">luke.hinrichs@gmail.com</a>
                            </div>
                            <div>
                                <p className="font-bold">Location</p>
                                <p>Denver, Co</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-rose-500	rounded-lg">
                    </div>
                </section>
            </Layout>
        </main>
    )
}

export default ContactPage 