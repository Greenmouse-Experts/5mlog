import React, {useState} from 'react'
import { useNavigate } from 'react-router'

export const Track = () => {

    const [track, setTrack] = useState(false)

    const navigate = useNavigate()
    const [value, setValue] = useState('')
    
    const handleChange = (event) => {
        setValue(event.target.value);
      };
    const gotoTrackPage = () => {
        navigate(`/tracking?trackId=${value}`)
    }

  return (
    <div>
        <div className='fixed  lg:left-10 left-4 bottom-5 lg:bottom-10 flex items-center'>
            <div className='bg-green-100 relative z-50 circle p-4 hover:bg-green-300' onClick={() => setTrack(!track)}>
                <img src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1671119130/5mlog/track1-removebg-preview_jiasst.png' alt="track" className='lg:w-12 w-6' />
            </div>
            {/* tracking */}
            {track && (
                <div className='w-full fixed lg:left-28 left-16'>
                    <div className='lg:w-8/12 w-9/12 track-ani pl-3'>
                        <div className='mx-auto rounded-lg bg-green-200 fs-300 lg:fs-600 shadow-lg px-2 py-2'>
                            <input type="text" placeholder="Enter your tracking ID" onChange={handleChange} className="py-3 lg:px-6 px-3 lg:text-lg lg:w-10/12 w-9/12"/>
                            <button className='lg:w-2/12 w-3/12 lg:text-xl fw-600 py-3 bg-primary rounded-lg text-white' onClick={gotoTrackPage}>Track</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}
