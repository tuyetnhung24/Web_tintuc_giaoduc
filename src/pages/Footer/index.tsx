import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-6 text-sm">
      <div className="container mx-auto grid grid-cols-4 gap-4">
        <div>
          <h3 className="font-bold">Trang chủ</h3>
          <ul className="mt-2">
            <li>Video</li>
            <li>Podcasts</li>
            <li>Ảnh</li>
            <li>Infographics</li>
            <li>Mới nhất</li>
            <li>Xem nhiều</li>
            <li>Tin nóng</li>
            <li>Newsletter</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Thể loại</h3>
          <ul className="mt-2">
            <li>Thời sự</li>
            <li>Thế giới</li>
            <li>Kinh doanh</li>
            <li>Bất động sản</li>
            <li>Giải trí</li>
            <li>Thể thao</li>
            <li>Giáo dục</li>
            <li>Sức khoẻ</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Khác</h3>
          <ul className="mt-2">
            <li>Pháp luật</li>
            <li>Xe</li>
            <li>Đời sống</li>
            <li>Du lịch</li>
            <li>Khoa học</li>
            <li>Số hoá</li>
            <li>Ý kiến</li>
            <li>Tâm sự</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Tài khoản</h3>
          <div className="mt-2">
            <p className="mb-2">Tải ứng dụng</p>
            <div className="flex space-x-2">
              <button className="bg-gray-200 p-2">VnExpress</button>
              <button className="bg-gray-200 p-2">International</button>
            </div>
            <p className="mt-2">Liên hệ</p>
            <p>Đường dây nóng</p>
            <p>083.888.0123 (Hà Nội)</p>
            <p>082.233.3555 (TP. Hồ Chí Minh)</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-6 border-t pt-4">
        <p>© 1997-2024. Toàn bộ bản quyền thuộc VnExpress.</p>
      </div>
    </footer>
  );
};

export default Footer;
