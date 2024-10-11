import React from 'react';

const EducationNewsPage = () => {
  return (
    <div className="container my-4">
      {/* Tiêu đề trang */}
      <div className="mb-4 text-center">
        <h1 className="display-4">Giáo dục</h1>
        <p className="lead text-muted">
          Cập nhật những tin tức mới nhất về giáo dục từ VNExpress
        </p>
      </div>

      {/* Tin tức chính */}
      <div className="row mb-4">
        <div className="col-lg-8">
          <div className="card shadow-sm mb-4">
            <img
              src="https://link-to-main-news-image.jpg"
              className="card-img-top"
              alt="Main news"
            />
            <div className="card-body">
              <h2 className="card-title">
                Chủ tịch Diễn đàn Kinh tế thế giới: Chìa khóa cạnh tranh là học tập suốt đời
              </h2>
              <p className="card-text">
                Thế giới đang thay đổi, chìa khóa để giới trẻ cạnh tranh toàn cầu là học tập suốt đời, theo GS Klaus Schwab.
              </p>
              <a href="/" className="btn btn-primary">
                Đọc thêm
              </a>
            </div>
          </div>
        </div>

        {/* Bài viết phụ */}
        <div className="col-lg-4">
          <div className="card shadow-sm mb-3">
            <div className="card-body">
              <h5 className="card-title">Nước nào được xem là trung tâm thủy điện của thế giới?</h5>
              <p className="card-text text-muted">
                Quốc gia này dẫn đầu thế giới về sản xuất thủy điện, công suất lớn hơn cả ba nước xếp sau cộng lại.
              </p>
              <a href="/" className="btn btn-link">
                Trắc nghiệm
              </a>
            </div>
          </div>

          <div className="card shadow-sm mb-3">
            <div className="card-body">
              <h5 className="card-title">Nhiều đại học Mỹ bị cấm ưu tiên tuyển con em nhà tài trợ</h5>
              <p className="card-text text-muted">
                Các đại học ở bang California bị cấm ưu tiên tuyển sinh những sinh viên hoặc nhân tài trợ cho trường.
              </p>
              <a href="/" className="btn btn-link">
                Tin tức
              </a>
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">9 học sinh giành huy chương vàng Toán và Khoa học quốc tế</h5>
              <p className="card-text text-muted">
                4 học sinh Việt Nam tại Olympic Toán và Khoa học quốc tế (IMSO) đều đạt giải, trong đó 9 em giành huy chương vàng.
              </p>
              <a href="/" className="btn btn-link">
                Chi tiết
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Các liên kết nhanh */}
      <div className="row my-4">
        <div className="col-12 d-flex justify-content-between">
          <a href="/" className="text-primary">Tuyển sinh đại học 2025</a>
          <a href="/" className="text-primary">Du học Mỹ</a>
          <a href="/" className="text-primary">Thi lớp 10 năm 2025</a>
        </div>
      </div>

      {/* Tin tức nổi bật */}
      <div className="row">
        <div className="col-lg-4 mb-4">
          <div className="card shadow-sm">
            <img
              src="https://link-to-news-image-1.jpg"
              className="card-img-top"
              alt="News 1"
            />
            <div className="card-body">
              <h5 className="card-title">Xu hướng giáo dục trong tương lai</h5>
              <p className="card-text">Học tập kết hợp với công nghệ đang mở ra nhiều cơ hội mới.</p>
              <a href="/" className="btn btn-link">Đọc thêm</a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-4">
          <div className="card shadow-sm">
            <img
              src="https://link-to-news-image-2.jpg"
              className="card-img-top"
              alt="News 2"
            />
            <div className="card-body">
              <h5 className="card-title">Đại học công nghệ nhận tài trợ lớn</h5>
              <p className="card-text">Trường đại học công nghệ hàng đầu vừa nhận được tài trợ lớn để phát triển nghiên cứu AI.</p>
              <a href="/" className="btn btn-link">Đọc thêm</a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-4">
          <div className="card shadow-sm">
            <img
              src="https://link-to-news-image-3.jpg"
              className="card-img-top"
              alt="News 3"
            />
            <div className="card-body">
              <h5 className="card-title">10 học bổng toàn phần cho học sinh Việt Nam</h5>
              <p className="card-text">Nhiều trường đại học danh giá trên thế giới đang mở các suất học bổng toàn phần.</p>
              <a href="/" className="btn btn-link">Chi tiết</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationNewsPage;
