

import React, { Component } from 'react'
import Layout from 'antd/lib/layout'
import Menu from 'antd/lib/menu'
import { siderArr } from '../commons/siderItem'
import { Link } from 'react-router'
import dispatch from '../actions/dispatch'
import NavHead from './NavHead'
// import Icon from 'antd/lib/icon'
// import verifyToken from '../actions/verifyToken'


const { Header, Content, Sider } = Layout
export default class Nav extends Component {
  // componentDidMount() {
  //   verifyToken()
  // }
  render(){
    console.log(this.props)
    const { sliderSelect } = this.props.state.nav
    return(
      <Layout className='nav-container' >
       <Sider width={150} style={{ background: '#fff', borderRight: '1px solid #eee'}} >
         <div className='nav-sider-log' >Drm</div>
         <Menu
          onClick={ handleClick }
          mode="inline"
          theme="light"
          defaultSelectedKeys={['信息推送']}
        >
        {
          siderArr.map(item =>
            <Menu.Item key={item.value} >
              <Link to={item.path}>
                <div className={ sliderSelect=== item.value ? `sider-icon nav-sider-${item.icon}-select` :`sider-icon nav-sider-${item.icon}`} >{item.value}</div>
              </Link>
            </Menu.Item> )
        }
        </Menu>
       </Sider>
        <Layout>
          <Header style={{ background: '#fff' }} >
            <NavHead  { ...this.props } />
          </Header>
           <Layout>
             <Content className='nav-content' >{
               this.props.children && React.cloneElement(this.props.children, { state: this.props.state, location: window.location })
            }</Content>
           </Layout>
         </Layout>
      </Layout>
      )
  }
}

function handleClick(e) {
  dispatch('NAV_ON_SELECT' , e.key)
}


