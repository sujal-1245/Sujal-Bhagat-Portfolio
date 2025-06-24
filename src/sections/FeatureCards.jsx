import React from 'react'
import { abilities } from '../constants'

const FeatureCards = () => {
  return (
    <div className="w-full padding-x-lg">
  <div className="mx-auto grid-3-cols gap-8">
    {abilities.map(({ Icon, title, desc }) => (
      <div
        key={title}
        className="card-border rounded-xl p-8 flex flex-col gap-4 backdrop-blur-md bg-white/5 shadow-md transition-transform hover:scale-[1.02]"
      >
        <div className="size-14 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-indigo-500 text-white shadow-md">
          <Icon className="text-2xl" />
        </div>
        <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
        <p className="text-white-50 text-lg">{desc}</p>
      </div>
    ))}
  </div>
</div>
  )
}

export default FeatureCards