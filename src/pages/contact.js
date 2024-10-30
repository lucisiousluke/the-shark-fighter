import * as React from 'react'
import Layout from '../components/layout'

const ContactPage = () => {
    return (
        <main>
            <Layout pageTitle="Contact Me">
                <section className="grid grid-cols-4 gap-4">
                    <div className="bg-cyan-300 rounded-lg col-span-3">
                        <h1 className="text-3xl font-bold">Contact Me</h1>
                        <p>UX/UI research, web developent, brand management</p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="font-bold">
                                Phone number
                            </div>
                            <div className="font-bold">
                                Email
                            </div>
                            <div className="font-bold">
                                Location
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