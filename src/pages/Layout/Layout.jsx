import { Outlet } from 'react-router'
import Header from '../../components/HeaderGlob/Header/Header'
import Done from '../../components/Done/Done'
import Footer from '../../components/FooterGlob/Footer/Footer'

const Layout = ({ users, setUsers }) => {
  return (
    <div>
      <Header setUsers={setUsers} users={users} />
      <Outlet />
      <Footer />
      <Done />
    </div>
  )
}

export default Layout
