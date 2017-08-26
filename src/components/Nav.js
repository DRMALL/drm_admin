


import React, { Component } from 'react'
import Layout from 'antd/lib/layout'
import { siderArr } from '../commons/siderItem'
import { browserHistory } from 'react-router'
import dispatch from '../actions/dispatch'
import NavHead from './NavHead'
import whichSelect from '../utils/whichSelect'



const { Header, Content, Sider } = Layout
export default class Nav extends Component {
  componentDidMount() {
    // getMachineArr()
    // getMessageArr()
  }

  render(){
    const { sliderSelect } = this.props.state.nav
    return(
      <Layout className={(window.location.pathname==='/machine/edit') ?'nav-container' : 'nav-containers'}  >
       <Sider width={150} style={{ background: '#fff', borderRight: '1px solid #eee'}} >
         <div className='nav-sider-log' >Drm</div>
        {
          siderArr.map(item =>
            <div key={item.value} data-pathname={ item.path } onClick={ navToitem }
                 className='sider-item'  >
                <div className={ sliderSelect=== item.value ? `sider-icon nav-sider-${item.icon}-select` :`sider-icon nav-sider-${item.icon}`} >{item.value}</div>
            </div> )
        }
       </Sider>
        <Layout >
          <Header style={{ background: '#fff' }} >
            <NavHead  { ...this.props } />
          </Header>
           <Layout style={{ backgroundColor: '#F9FAFC', minWidth: 1000 }}  >
             <Content className='nav-content' >{
               this.props.children && React.cloneElement(this.props.children, { state: this.props.state, location: window.location, })
            }</Content>
           </Layout>
         </Layout>
      </Layout>
      )
  }
}

function  navToitem(e){
  let pathname  = e.currentTarget.dataset.pathname
  dispatch('NAV_ON_SELECT', whichSelect(pathname))
  browserHistory.push(pathname)
}




