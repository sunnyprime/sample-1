import React from 'react';
import { Button } from 'antd';
import { Layout } from 'antd';


import 'antd/dist/antd.css';
import Menus from './component/Menu';
const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
  
    <div style={{minHeight:'100vh'}}>

    <Layout style={{minHeight:'100vh'}}>
      <Header>Headers</Header>
      <Layout>
        <Sider style={{overflow:'hidden'}}><Menus /></Sider>
        <Content>Content</Content>
      </Layout>

    </Layout>
    </div>
    


  );
}

export default App;
