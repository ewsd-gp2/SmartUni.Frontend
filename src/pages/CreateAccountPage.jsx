import React from 'react'
import Container from '../components/Container'
import AdminSideBar from '../components/AdminSideBar'
import AccountCreate from '../components/AccountCreate'

const CreateAccountPage = () => {
  return (
    <main>
      <Container>
      <div className=' flex col-span-4 gap-5'>
            <AdminSideBar className=" col-span-1"/>
            <div className=' col-span-3 mt-5'>
            <AccountCreate/>

            </div>
            </div>
      </Container>
    </main>
  )
}

export default CreateAccountPage