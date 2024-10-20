import React, { useState } from 'react';
import { Button, Input, message } from 'antd';
import { MailOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>('');

  const navigate = useNavigate();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = () => {
    let valid = true;

    // Reset errors
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    // Kiểm tra email
    if (!email) {
      setEmailError('Vui lòng nhập email.');
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Email không hợp lệ.');
      valid = false;
    }

    // Kiểm tra mật khẩu
    if (!password) {
      setPasswordError('Vui lòng nhập mật khẩu.');
      valid = false;
    } else if (password.length < 6) {
      setPasswordError('Mật khẩu phải có ít nhất 6 ký tự.');
      valid = false;
    }

    // Kiểm tra xác nhận mật khẩu
    if (!confirmPassword) {
      setConfirmPasswordError('Vui lòng nhập lại mật khẩu.');
      valid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Mật khẩu nhập lại không khớp.');
      valid = false;
    }

    if (valid) {
      // Lưu thông tin đăng ký vào localStorage
      localStorage.setItem('user', JSON.stringify({ email, password }));
      message.success('Đăng ký thành công!');
      navigate('/login');
    }
  };

  return (
    <div className="register-container">
      <h2>Đăng ký</h2>

      <Input
        size="large"
        placeholder="Email"
        prefix={<MailOutlined />}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input-field"
      />
      {emailError && <div className="error-message" style={{color: "red", textAlign: "left"}}>{emailError}</div>} {/* Hiển thị lỗi email */}

      <Input.Password
        size="large"
        placeholder="Mật khẩu"
        prefix={<LockOutlined />}
        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-field"
      />
      {passwordError && <div className="error-message" style={{color: "red", textAlign: "left"}}>{passwordError}</div>} {/* Hiển thị lỗi mật khẩu */}

      <Input.Password
        size="large"
        placeholder="Nhập lại mật khẩu"
        prefix={<LockOutlined />}
        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="input-field"
      />
      {confirmPasswordError && <div className="error-message" style={{color: "red", textAlign: "left"}}>{confirmPasswordError}</div>} {/* Hiển thị lỗi nhập lại mật khẩu */}

      <Button type="primary" block onClick={handleRegister} className="register-btn">
        Đăng ký
      </Button>

      <div className="footer">
        <span>Đã có tài khoản? <a href="/login">Đăng nhập</a></span>
      </div>

      
      
    </div>
  );
};

export default Register;
