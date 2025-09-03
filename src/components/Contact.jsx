import React from 'react';
import { Card, Typography, Space, Row, Col, Button } from 'antd';
import { MailOutlined, GithubOutlined, LinkedinOutlined, FilePdfOutlined, GlobalOutlined } from '@ant-design/icons';

const { Title, Paragraph, Link } = Typography;

function Contact() {
  return (
    <div style={{ padding: '24px', maxWidth: '1400px', margin: 'auto', marginBottom: '16px' }} id="contact">
      <Card style={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
        <Title level={2} style={{ marginBottom: '24px', textAlign: 'center' }}>
          Contact Me
        </Title>
        <Paragraph style={{ textAlign: 'center', marginBottom: '24px', fontSize: '16px' }}>
          I'm interested in research collaborations and academic opportunities. Feel free to reach out!
        </Paragraph>
        
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={12} md={8} lg={6}>
            <Button 
              type="primary" 
              icon={<MailOutlined />} 
              href="mailto:birrul@mhs.usk.ac.id" 
              size="large"
              block
              style={{ height: 'auto', padding: '12px 0' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span>Email</span>
                <span style={{ fontSize: '12px', marginTop: '4px' }}>birrul@mhs.usk.ac.id</span>
              </div>
            </Button>
          </Col>
          
          <Col xs={24} sm={12} md={8} lg={6}>
            <Button 
              type="primary" 
              icon={<GithubOutlined />} 
              href="https://github.com/birrulwldain" 
              target="_blank"
              size="large"
              block
              style={{ height: 'auto', padding: '12px 0', background: '#333', borderColor: '#333' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span>GitHub</span>
                <span style={{ fontSize: '12px', marginTop: '4px' }}>github.com/birrulwldain</span>
              </div>
            </Button>
          </Col>
          
          <Col xs={24} sm={12} md={8} lg={6}>
            <Button 
              type="primary" 
              icon={<LinkedinOutlined />} 
              href="https://linkedin.com/in/birrulwldain" 
              target="_blank"
              size="large"
              block
              style={{ height: 'auto', padding: '12px 0', background: '#0077B5', borderColor: '#0077B5' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span>LinkedIn</span>
                <span style={{ fontSize: '12px', marginTop: '4px' }}>linkedin.com/in/birrulwldain</span>
              </div>
            </Button>
          </Col>
          
          <Col xs={24} sm={12} md={8} lg={6}>
            <Button 
              type="primary" 
              icon={<FilePdfOutlined />} 
              href="#" 
              size="large"
              block
              style={{ height: 'auto', padding: '12px 0', background: '#ff4d4f', borderColor: '#ff4d4f' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span>Resume</span>
                <span style={{ fontSize: '12px', marginTop: '4px' }}>Download CV (PDF)</span>
              </div>
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
}