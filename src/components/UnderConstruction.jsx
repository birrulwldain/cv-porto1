import React from 'react';
import { motion as Motion } from "framer-motion";
import { Typography, Card, Space } from 'antd';

const { Title, Paragraph } = Typography;

function UnderConstruction() {
  return (
    <div 
      style={{
        minHeight: '100vh',
        backgroundColor: '#f0f2f5', // Light background color
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        textAlign: 'center',
      }}
    >
      {/* Background pattern (simplified or removed for Ant Design conversion) */}
      {/* Keeping framer-motion for image and text animations */}

      <Motion.img
        src="/einstein.jpg"
        alt="Einstein"
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '24px',
          border: '4px solid #1890ff', // Ant Design primary color
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Title level={1} style={{ color: '#262626', marginBottom: '16px' }}>
          Portofolio sedang dalam pengembangan oleh Birrul Walidain
        </Title>
      </Motion.div>

      <Motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Paragraph style={{ fontSize: '18px', color: '#595959' }}>
          Stay tuned! Situs ini akan segera hadir setelah S.Si
        </Paragraph>
      </Motion.div>
    </div>
  );
}

export default UnderConstruction;