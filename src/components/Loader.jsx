import React from 'react'

const Loader = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="rounded-full w-14 h-14 border-4 border-t-transparent border-primary animate-spin"></div>
        </div>
    )
}

export default Loader
