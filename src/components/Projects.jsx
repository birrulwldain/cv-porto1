import React from 'react';
import { Card, Typography, Row, Col, Button } from 'antd';
import { ExperimentOutlined, RocketOutlined, CodeOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Projects = ({ onNavigateToPredictor }) => {
  const portfolioItems = [
    { 
      title: 'Spectroscopy Dashboard', 
      description: 'Machine Learning-powered application for analyzing spectroscopic data, specifically for Laser-Induced Breakdown Spectroscopy (LIBS).', 
      icon: <ExperimentOutlined style={{ fontSize: '32px', marginBottom: '16px', color: '#722ed1' }} />,
      link: '/predictor'
    },
    { 
      title: 'Physics Simulation', 
      description: 'Computational physics simulations for plasma dynamics and spectroscopic analysis.', 
      icon: <RocketOutlined style={{ fontSize: '32px', marginBottom: '16px', color: '#1890ff' }} />,
      link: '#'
    },
    { 
      title: 'LSTM Research Project', 
      description: 'Deep learning research using LSTM networks for time-series prediction in physical systems.', 
      icon: <CodeOutlined style={{ fontSize: '32px', marginBottom: '16px', color: '#52c41a' }} />,
      link: '#'
    },
  ];

  return (
    <div style={{ padding: '24px', maxWidth: '1400px', margin: 'auto', marginBottom: '16px' }} id="portfolio">
      <Card style={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
        <Title level={2} style={{ marginBottom: '24px', textAlign: 'center' }}>
          Projects
        </Title>
        <Row gutter={[24, 24]}> {/* Add gutter for spacing between cards */}
          {portfolioItems.map((item, index) => (
            <Col key={index} xs={24} md={8}> {/* Responsive columns: full width on small, 3 per row on medium */}
              <Card 
                bordered={false} 
                style={{
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                  height: '100%', // Ensure cards in a row have equal height
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                  {item.icon}
                  <Title level={4}>{item.title}</Title>
                </div>
                <Paragraph style={{ flex: 1 }}>{item.description}</Paragraph>
                {item.link === '/predictor' ? (
                  <Button 
                    type="primary" 
                    block 
                    style={{ marginTop: '16px' }}
                    onClick={onNavigateToPredictor}
                  >
                    View Project
                  </Button>
                ) : (
                  <Button type="default" block disabled style={{ marginTop: '16px' }}>
                    Coming Soon
                  </Button>
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
};

export default Projects;
