import React from 'react';
import { Box, Typography, Avatar, Grid, Paper } from '@mui/material';

function About() {
  return (
    <Box sx={{ p: 3, maxWidth: '1400px', mx: 'auto', my: 4 }} id="about">
      <Paper elevation={3} sx={{ p: 4, borderRadius: '12px' }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3, textAlign: 'center' }}>
          About Me
        </Typography>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar 
              alt="Developer Profile Picture"
              src="/profile.jpg" // Assuming profile.jpg is in the public folder
              sx={{ width: 150, height: 150, border: '3px solid', borderColor: 'primary.main' }}
            />
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
              I’m a passionate frontend developer who loves building modern,
              responsive, and clean interfaces. I enjoy turning complex problems into
              simple, beautiful user experiences. My expertise lies in creating intuitive
              and engaging web applications, focusing on user experience and performance.
              I am always eager to learn new technologies and improve my skills to deliver
              high-quality solutions.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default About;