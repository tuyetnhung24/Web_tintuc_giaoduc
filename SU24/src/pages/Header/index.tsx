import React from 'react';
import { Navbar, Nav,  } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar />
      {/* Phần điều hướng trên cùng */}
      <Navbar bg="light" expand="lg" className="border-bottom">
        <div className="container">
          <Navbar.Brand href="/">
            
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Thời sự</Nav.Link>
              <Nav.Link href="#link">Góc nhìn</Nav.Link>
              <Nav.Link href="#link">Thế giới</Nav.Link>
              <Nav.Link href="#link">Video</Nav.Link>
              <Nav.Link href="#link">Podcasts</Nav.Link>
              <Nav.Link href="#link">Kinh doanh</Nav.Link>
              <Nav.Link href="#link">Bất động sản</Nav.Link>
              <Nav.Link href="#link">Khoa học</Nav.Link>
              <Nav.Link href="#link">Giải trí</Nav.Link>
              <Nav.Link href="#link">Thể thao</Nav.Link>
              <Nav.Link href="#link">Pháp luật</Nav.Link>
              <Nav.Link href="#link" className="text-warning">Giáo dục</Nav.Link>
              <Nav.Link href="#link">Sức khỏe</Nav.Link>
              <Nav.Link href="#link">Đời sống</Nav.Link>
              <Nav.Link href="#link">Du lịch</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </div>
      </Navbar>

      {/* Phần điều hướng phụ */}
      <div className="bg-light py-2">
        <div className="container d-flex justify-content-start">
          <Nav className="flex-row">
            <Nav.Link href="#news" className="mx-2">Tin tức</Nav.Link>
            <Nav.Link href="#admission" className="mx-2">Tuyển sinh</Nav.Link>
            <Nav.Link href="#profile" className="mx-2">Chân dung</Nav.Link>
            <Nav.Link href="#studyabroad" className="mx-2">Du học</Nav.Link>
            <Nav.Link href="#discuss" className="mx-2">Thảo luận</Nav.Link>
            <Nav.Link href="#english" className="mx-2">Học tiếng Anh</Nav.Link>
            <Nav.Link href="#edu4" className="mx-2">Giáo dục 4.0</Nav.Link>
          </Nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
