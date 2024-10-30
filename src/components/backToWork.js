import * as React from 'react'
import { Link } from "gatsby";

const BackToWork = () => {
    return (
        <div>
            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to='/portfolio'>Back to Work</Link>
        </div>
    )
}

export default BackToWork