import React from 'react';
import { Card, Typography, Row, Col, Tag, Divider } from 'antd';

const { Title, Paragraph } = Typography;

function Skills() {
  const skillCategories = [
    {
      name: "Physics & Mathematics",
      color: "purple",
      skills: [
        "Quantum Mechanics",
        "Electrodynamics",
        "Statistical Physics",
        "Linear Algebra",
        "Differential Equations"
      ]
    },
    {
      name: "Programming & Data Science",
      color: "blue",
      skills: [
        "Python",
        "MATLAB",
        "PyTorch",
        "TensorFlow",
        "NumPy",
        "SciPy",
        "Pandas"
      ]
    },
    {
      name: "Spectroscopy & Analysis",
      color: "green",
      skills: [
        "LIBS",
        "Signal Processing",
        "Peak Detection",
        "Baseline Correction",
        "Elemental Analysis"
      ]
    },
    {
      name: "Web Development",
      color: "orange",
      skills: [
        "JavaScript",
        "React",
        "HTML/CSS",
        "FastAPI",
        "RESTful APIs"
      ]
    }
  ];

  return (
    <div style={{ padding: '24px', maxWidth: '1400px', margin: 'auto', marginBottom: '16px' }} id="skills">
      <Card style={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
        <Title level={2} style={{ marginBottom: '24px', textAlign: 'center' }}>
          Skills & Expertise
        </Title>
        
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} style={{ marginBottom: categoryIndex < skillCategories.length - 1 ? '24px' : 0 }}>
            <Paragraph strong style={{ fontSize: '18px', marginBottom: '12px', color: category.color === 'purple' ? '#722ed1' : category.color === 'blue' ? '#1890ff' : category.color === 'green' ? '#52c41a' : '#fa8c16' }}>
              {category.name}
            </Paragraph>
            <Row gutter={[12, 12]} justify="start">
              {category.skills.map((skill, skillIndex) => (
                <Col key={skillIndex}> 
                  <Tag 
                    color={category.color}
                    style={{
                      padding: '6px 12px',
                      fontSize: '14px',
                      borderRadius: '4px',
                      margin: '2px 0'
                    }}
                  >
                    {skill}
                  </Tag>
                </Col>
              ))}
            </Row>
            {categoryIndex < skillCategories.length - 1 && <Divider style={{ margin: '16px 0' }} />}
          </div>
        ))}
      </Card>
    </div>
  );
}

export default Skills;