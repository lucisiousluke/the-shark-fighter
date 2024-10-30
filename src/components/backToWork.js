import * as React from 'react'
import { Link } from "gatsby";

const BackToWork = () => {
    return (
        <div className="my-6 text-center">
            <Link className="bg-transparent hover:bg-gray-100 text-cyan-500 font-semibold py-4 px-8 border border-cyan-500 rounded-lg shadow" to='/portfolio'>Back to Work</Link>
        </div>
    )
}

export default BackToWork