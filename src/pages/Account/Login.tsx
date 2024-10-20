import React, { useState } from 'react';
import { Button, Input, Checkbox, message } from 'antd';
import { MailOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'; // Sử dụng useNavigate để điều hướng

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const navigate = useNavigate(); // Khởi tạo useNavigate để sử dụng cho việc điều hướng

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    // Reset lỗi
    setEmailError('');
    setPasswordError('');

    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      setEmailError('Tài khoản không tồn tại.');
      return;
    }

    const { email: storedEmail, password: storedPassword } = JSON.parse(storedUser);

    if (email !== storedEmail) {
      setEmailError('Email không đúng.');
    } else if (password !== storedPassword) {
      setPasswordError('Mật khẩu không đúng.');
    } else {
      message.success('Đăng nhập thành công!');
      navigate('/'); // Chuyển hướng về trang chủ sau khi đăng nhập thành công
    }
  };

  return (
    <div className="login-container">
      <h2>Đăng nhập</h2>

      <br />

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

      <div className="remember-section">
        <Checkbox
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
          className="remember-checkbox"
        >
          Nhớ đăng nhập
        </Checkbox>
        <a href="/forgot-password" className="forgot-password-link">
          Quên mật khẩu?
        </a>
      </div>

      <Button type="primary" block onClick={handleLogin} className="login-btn">
        Login
      </Button>

      <div className="policy-section">
        <p>
          Bằng cách đăng ký, bạn đồng ý với <a href="/terms">Điều khoản dịch vụ</a> và <a href="/privacy">Chính sách quyền riêng tư</a>, bao gồm <a href="/cookies">việc sử dụng cookie</a>.
        </p>
      </div>

      <div className="footer">
        <span>Chưa có tài khoản? <a href="/register">Đăng Ký</a></span>
      </div>

    </div>
  );
};

export default Login;
