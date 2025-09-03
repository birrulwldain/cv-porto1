#!/bin/bash

# This script starts the Spectroscopy Dashboard application
# It starts both the frontend and backend services

# Colors for terminal output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting Spectroscopy Dashboard...${NC}"

# Function to check if a command exists
command_exists() {
  command -v "$1" >/dev/null 2>&1
}

# Check Python installation
if ! command_exists python3; then
  echo -e "${RED}Error: Python 3 is not installed. Please install Python 3 and try again.${NC}"
  exit 1
fi

# Check Node.js installation
if ! command_exists node; then
  echo -e "${RED}Error: Node.js is not installed. Please install Node.js and try again.${NC}"
  exit 1
fi

# Start the backend API server
echo -e "${YELLOW}Starting backend API server...${NC}"
cd "$(dirname "$0")/predictor-api" || exit

# Set up Python virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
  echo -e "${YELLOW}Setting up Python virtual environment...${NC}"
  python3 -m venv venv
fi

# Activate virtual environment
source venv/bin/activate

# Install dependencies if needed
if [ ! -f ".setup_complete" ]; then
  echo -e "${YELLOW}Installing Python dependencies...${NC}"
  pip install -r requirements.txt
  touch .setup_complete
fi

# Start backend server in the background
echo -e "${YELLOW}Starting FastAPI server...${NC}"
(uvicorn app.main:app --reload >backend.log 2>&1 &)

# Give the backend server a moment to start
sleep 2

# Start the frontend development server
echo -e "${YELLOW}Starting frontend development server...${NC}"
cd "$(dirname "$0")" || exit

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
  echo -e "${YELLOW}Installing frontend dependencies...${NC}"
  npm install
fi

# Start frontend server
echo -e "${GREEN}Starting frontend server...${NC}"
npm run dev

# Instructions for cleanup (this will only run if the npm command is stopped with Ctrl+C)
echo -e "${YELLOW}Cleaning up...${NC}"
pkill -f "uvicorn app.main:app"
echo -e "${GREEN}Spectroscopy Dashboard has been stopped.${NC}"
