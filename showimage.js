const myList = document.querySelector('#myList');
const listItems = Array.from(myList.children);

// Dữ liệu ảnh tương ứng với mỗi thẻ <a>
const imageUrls = {
  'AWESOME 01': 'https://example.com/image1.jpg',
  'AWESOME 02': 'https://example.com/image2.jpg',
  'AWESOME 03': 'https://example.com/image3.jpg'
};

// Tạo một div chứa ảnh và thêm vào body
const imageDiv = document.createElement('div');
imageDiv.style.position = 'fixed';
imageDiv.style.top = 0;
imageDiv.style.right = 0;
imageDiv.style.width = '200px';
imageDiv.style.height = '200px';
imageDiv.style.border = '1px solid #ccc';
imageDiv.style.background = '#fff';
document.body.appendChild(imageDiv);

// Ẩn ảnh ban đầu
imageDiv.style.display = 'none';

// Thêm sự kiện khi rê chuột vào từng thẻ <a>
listItems.forEach((item) => {
  const anchor = item.querySelector('a');
  anchor.addEventListener('mouseover', () => {
    // Lấy tên của thẻ <a> và hiển thị ảnh tương ứng
    const imageUrl = imageUrls[anchor.textContent];
    if (imageUrl) {
      imageDiv.style.backgroundImage = `url(${imageUrl})`;
      imageDiv.style.display = 'block';
    }
  });
  
  anchor.addEventListener('mouseout', () => {
    // Ẩn ảnh khi di chuột ra khỏi thẻ <a>
    imageDiv.style.display = 'none';
  });
});
