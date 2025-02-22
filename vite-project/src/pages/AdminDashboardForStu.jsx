import React from 'react'
import Container from '../components/Container'
import AdminSideBar from '../components/AdminSideBar'
import StudentList from '../components/StudentList'

const AdminDashboardForStu = () => {
  return (
    <section>
        <Container>
            <div className=' flex col-span-4 gap-5'>
            <AdminSideBar className=" col-span-1"/>
            <div className=' col-span-3 mt-5'>
            <StudentList/>

            </div>
            </div>
        </Container>
    </section>
  )
}

export default AdminDashboardForStu