import React from 'react';
import { Card, Typography, Row, Col, Avatar, Space, Tag } from 'antd';

const { Title, Paragraph } = Typography;

function About() {
  return (
    <div style={{ padding: '24px', maxWidth: '1400px', margin: 'auto', marginBottom: '16px' }} id="about">
      <Card style={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
        <Title level={2} style={{ marginBottom: '24px', textAlign: 'center' }}>
          About Me
        </Title>
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar 
              alt="Birrul Walidain Profile Picture"
              src="/profile.jpg"
              style={{
                width: 200, 
                height: 200, 
                border: '4px solid #722ed1',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
              }}
            />
          </Col>
          <Col xs={24} md={18}>
            <Paragraph style={{ fontSize: '16px', lineHeight: 1.8, marginBottom: '16px' }}>
              I am Birrul Walidain, a Physics student at Universitas Syiah Kuala with a focus on Theoretical Physics, 
              Plasma Physics, Computational Science, Machine Learning, and Spectroscopy. My research interests
              include the application of deep learning models for spectroscopic analysis,
              particularly in Laser-Induced Breakdown Spectroscopy (LIBS).
            </Paragraph>
            <Paragraph style={{ fontSize: '16px', lineHeight: 1.8, marginBottom: '16px' }}>
              Currently, I am developing machine learning models for spectroscopic data interpretation
              and working on computational simulations of plasma dynamics. I am passionate about combining
              theoretical physics concepts with modern computational methods to solve complex problems.
            </Paragraph>
            <Space direction="vertical" size="small">
              <div>
                <strong>Education:</strong> Physics Department, Universitas Syiah Kuala
              </div>
              <div>
                <strong>Research Interests:</strong>
                <div style={{ marginTop: '8px' }}>
                  <Space size={[8, 8]} wrap>
                    <Tag color="purple">Theoretical Physics</Tag>
                    <Tag color="blue">Plasma Physics</Tag>
                    <Tag color="cyan">Computational Science</Tag>
                    <Tag color="green">Machine Learning</Tag>
                    <Tag color="magenta">Spectroscopy</Tag>
                  </Space>
                </div>
              </div>
            </Space>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
