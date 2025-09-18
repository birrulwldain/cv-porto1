import React from 'react';
import { Layout, Typography, Space } from 'antd';
import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';

const { Footer: AntdFooter } = Layout;
const { Text, Link } = Typography;

function Footer() {
  const year = new Date().getFullYear();

  return (
    <AntdFooter style={{ textAlign: 'center', backgroundColor: '#f0f2f5', padding: '24px 0', marginTop: '24px' }}>
      <Space direction="vertical" size={12}>
        <Space split={<span style={{ margin: '0 8px' }}>•</span>}>
          <Link href="mailto:birrul@mhs.usk.ac.id" target="_blank" style={{ color: 'rgba(0,0,0,0.45)' }}>
            <MailOutlined style={{ marginRight: 4 }} /> Email
          </Link>
          <Link href="https://github.com/birrulwldain" target="_blank" style={{ color: 'rgba(0,0,0,0.45)' }}>
            <GithubOutlined style={{ marginRight: 4 }} /> GitHub
          </Link>
          <Link href="https://linkedin.com/in/birrulwldain" target="_blank" style={{ color: 'rgba(0,0,0,0.45)' }}>
            <LinkedinOutlined style={{ marginRight: 4 }} /> LinkedIn
          </Link>
        </Space>
        <Text type="secondary">&copy; {year} Birrul Walidain. All rights reserved.</Text>
        <Text type="secondary" style={{ fontSize: '12px' }}>Physics Department, Universitas Syiah Kuala</Text>
      </Space>
    </AntdFooter>
  );
}

export default Footer;



