import React, { useState } from 'react';
import { Button, Input, Checkbox, Divider } from 'antd';
import { MailOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Xử lý logic khi người dùng nhấn nút "Login"
  };

  return (
    <div className="login-container">
      <h2>Đăng nhập</h2>

      {/* <Button icon={<FaGoogle />} className="social-btn" block>
        Login with Google
      </Button>
      <Button icon={<FaFacebookF />} className="social-btn" block>
        Login with Facebook
      </Button>

      <Divider>Hoặc</Divider> */}
      <br />

      <Input
        size="large"
        placeholder="Email"
        prefix={<MailOutlined />}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input-field"
      />

      <Input.Password
        size="large"
        placeholder="Mật khẩu"
        prefix={<LockOutlined />}
        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-field"
      />

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
