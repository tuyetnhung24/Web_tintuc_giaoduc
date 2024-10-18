import React, { useState } from 'react';
import { Button, Input, Divider } from 'antd';
import { MailOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';


const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Xử lý logic khi người dùng nhấn nút "Register"
  };

  return (
    <>
    
    
    
    <div className="register-container">

      <h2>Đăng ký</h2>

      {/* <Button icon={<FaGoogle />} className="social-btn" block>
        Sign in with Google
      </Button>
      <Button icon={<FaFacebookF />} className="social-btn" block>
        Sign in with Facebook
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

      <Input.Password
        size="large"
        placeholder="Nhập lại mật khẩu"
        prefix={<LockOutlined />}
        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="input-field"
      />

      <Button type="primary" block onClick={handleRegister} className="register-btn">
        Đăng ký
      </Button>

      <div className="footer">
        <span>Đã có tài khoản? <a href="/login">Đăng nhập</a></span>
      </div>
    </div>
    </>
  );
};



export default Register;
