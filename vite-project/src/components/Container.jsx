import React from 'react'

const Container = ({children}) => {
  return (
    <section className='w-full md:w-[720px] lg:w-[960px] xl:w-[1200px] mx-auto p-3'>
      {children}
    </section>
  )
}

export default Container
