import { globalActions } from '@/store/globalSlices'
import React from 'react'
import { useDispatch } from 'react-redux'

const Banner = () => {
  const dispatch = useDispatch()
  const { setCreateModal } = globalActions
  
  return (
    <main className="mx-auto text-center space-y-8">
      <h1 className="text-[45px] font-[600px] text-center leading-none">Want to live better? Choose your leaders wisely</h1>
      <p className="text-[16px] font-[500px] text-center">
      "Our lives begin to end the day we become silent about things that matter.” <br />— Dr. Martin Luther King, Jr., civil rights leader and Nobel Peace Prize laureate
      </p>

      <button
        className="text-black h-[45px] w-[148px] rounded-full transition-all duration-300
        border border-gray-400 bg-white hover:bg-opacity-20 hover:text-white"
        onClick={() => dispatch(setCreateModal('scale-100'))}
      >
        Create Election
      </button>
    </main>
  )
}

export default Banner
