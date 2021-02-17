import React, { useContext } from 'react'
import RouterView from '../../router/index'
import Sider from './components/Sider/index'
import MusicDetails from './components/MusicDetails/index'
import { StoreContext } from '../../store/provider'
import './index.scss'

interface HomeProps {
  routes?: Array<any>
}

function Home (props: HomeProps) {
  const store = useContext(StoreContext) as any
  return (
    <div className="wyy-home wyy-app-page" style={{ backgroundColor: store.state.skin.colors.contentBGColor }}>
      <Sider />
      <RouterView routes={props.routes} />
      <MusicDetails />
    </div>
  )
}

export default Home
