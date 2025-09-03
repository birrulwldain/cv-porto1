import React from 'react';
import { Modal as AntdModal, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const Modal = ({ isOpen, onClose, title, children, actions }) => {
  return (
    <AntdModal
      title={title}
      open={isOpen}
      onCancel={onClose}
      footer={actions} // Ant Design Modal uses 'footer' for action buttons
      closeIcon={onClose ? <Button type="text" icon={<CloseOutlined />} onClick={onClose} /> : null} // Custom close icon
      width={600} // Equivalent to maxWidth="sm" in MUI, adjust as needed
      centered // Centers the modal on the screen
    >
      {children}
    </AntdModal>
  );
};

export default Modal;