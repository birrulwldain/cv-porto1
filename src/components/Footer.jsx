import React from 'react';
import { Layout, Typography, Space } from 'antd';
import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';

const { Footer: AntdFooter } = Layout;
const { Text, Link } = Typography;

function Footer() {
  const year = new Date().getFullYear();
  return (
    <AntdFooter
      style={{
        textAlign: 'center',
        backgroundColor: '#FAFAFA',
        padding: '16px 0',
        marginTop: '16px',
        fontFamily: 'JetBrains Mono, Monaco, Consolas, Courier New, monospace',
        color: '#333',
        fontSize: '1rem',
        borderTop: '1px solid #eee',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <Space
        direction="vertical"
        size={8}
        style={{ width: '100%' }}
      >
        <Space
          split={<span style={{ margin: '0 8px' }}>•</span>}
          wrap
          style={{ flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}
        >
          <Link
            href="mailto:birrul@mhs.usk.ac.id"
            target="_blank"
            style={{ color: '#333', fontFamily: 'inherit', fontSize: '1rem' }}
          >
            <MailOutlined style={{ marginRight: 4 }} /> Email
          </Link>
          <Link
            href="https://github.com/birrulwldain"
            target="_blank"
            style={{ color: '#333', fontFamily: 'inherit', fontSize: '1rem' }}
          >
            <GithubOutlined style={{ marginRight: 4 }} /> GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/birrulwldain"
            target="_blank"
            style={{ color: '#333', fontFamily: 'inherit', fontSize: '1rem' }}
          >
            <LinkedinOutlined style={{ marginRight: 4 }} /> LinkedIn
          </Link>
        </Space>
        <Text type="secondary" style={{ fontFamily: 'inherit', fontSize: '0.95rem', color: '#666' }}>
          &copy; {year} Birrul Walidain. All rights reserved.
        </Text>
        <Text type="secondary" style={{ fontFamily: 'inherit', fontSize: '0.85rem', color: '#999' }}>
          Physics Department, Universitas Syiah Kuala
        </Text>
      </Space>
    </AntdFooter>
  );
}

export default Footer;



