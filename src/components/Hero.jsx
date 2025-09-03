import React from 'react';
import { Button, Typography, Space } from 'antd';
import { 
  ExperimentOutlined, 
  UserOutlined, 
  ProjectOutlined 
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Hero = ({ onNavigateToPredictor }) => {
  return (
    <div 
      style={{
        padding: '100px 24px',
        textAlign: 'center',
        backgroundColor: '#f0f2f5', // Light background color
        backgroundImage: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      }}
    >
      <Title level={1} style={{ color: '#262626', marginBottom: '16px' }}>
        Birrul Walidain
      </Title>
      <Paragraph style={{ fontSize: '18px', color: '#595959', marginBottom: '32px' }}>
        Physics Student | Theoretical Physics | Machine Learning | Spectroscopy
      </Paragraph>
      
      <Space size="large">
        <Button 
          type="primary" 
          size="large" 
          icon={<UserOutlined />}
          onClick={() => window.location.href = '#about'}
          style={{
            height: '50px',
            fontWeight: 'bold',
            borderRadius: '8px',
            boxShadow: '0 2px 0 rgba(0, 0, 0, 0.04)'
          }}
        >
          About Me
        </Button>
        
        <Button 
          type="primary" 
          size="large"
          icon={<ProjectOutlined />}
          onClick={() => window.location.href = '#portfolio'}
          style={{
            height: '50px',
            fontWeight: 'bold',
            borderRadius: '8px',
            boxShadow: '0 2px 0 rgba(0, 0, 0, 0.04)'
          }}
        >
          View Projects
        </Button>
        
        <Button 
          type="primary" 
          size="large"
          icon={<ExperimentOutlined />}
          onClick={onNavigateToPredictor}
          style={{
            height: '50px',
            fontWeight: 'bold',
            borderRadius: '8px',
            boxShadow: '0 2px 0 rgba(0, 0, 0, 0.04)',
            backgroundColor: '#722ed1',
            borderColor: '#722ed1'
          }}
        >
          Spectroscopy Dashboard
        </Button>
      </Space>
    </div>
  );
};

export default Hero;
