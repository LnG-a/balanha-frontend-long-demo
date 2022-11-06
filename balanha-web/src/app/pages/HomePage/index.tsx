import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import TextInput from 'app/components/input';

const { Header, Footer, Content } = Layout;

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
      <TextInput />
    </>
  );
}
