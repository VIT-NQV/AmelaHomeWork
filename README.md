# Even Loop, callback

 - Event loop hiểu nôm na là một vòng lặp vô tận

 - Event loop là cơ chế giúp Javascript có thể thực hiện nhiều thao tác cùng một lúc

 - Về bản chất, vòng lặp sự kiện(event loop) sẽ kiểm tra xem ngăn xếp(call stack) cuộc gọi có trống không và nếu có, sẽ xem xét hàng đợi sự kiện (event queue).

 - Nếu có một cái gì đó trong đó, nó thêm nó vào ngăn xếp(call stack) cuộc gọi và thực hiện nó. 

 - Vòng lặp sự kiện(event loop) liên tục chạy cho đến khi hết ca (nội dung trình duyệt được tải / trình duyệt bị đóng). Event table theo dõi tất cả các sự kiện đã được kích hoạt và gửi chúng đến hàng đợi sự kiện(event queue) sẽ được thực thi. 

 - Callback là một functions sẽ được thực hiện sau khi một functions khác đã thực hiện xong, vì thế nó có tên là callback.

 - Lý do rất quan trọng là bởi vì Javascript là một ngôn ngữ điều hành các sự việc,vì vậy mỗi lần thực thi thay vì chờ đợi phản hồi, Javascript vẫn sẽ tiếp tục thực thi các lệnh tiếp theo, đồng thời chờ đợi phản hồi từ các sự việc khác.

# This trong javascript

 - Trong javascript, chúng ta dùng từ khóa this để đại diện cho một đối tượng (Object). Đối tượng đó là chủ thế của ngữ cảnh, hoặc là chủ thế của code đang được chạy.

# Object trong javascript

 - Object trong JavaScript là một khái niệm trừu tượng dùng để biểu diễn một vật thể (cụ thể). Trong đó, các thuộc tính dùng để miêu tả đặc điểm, tính chất của đối tượng.

 - Về bản chất, object là tập hợp của các key và value. Với key gọi là thuộc tính, còn value là giá trị tương ứng của thuộc tính.

# Prototype trong javascrip

 - Prototype là cơ chế mà các object trong javascript kế thừa các tính năng từ một object khác. Tất cả các object trong javascript đều có một prototype, và các object này kế thừa các thuộc tính (properties) cũng như phương thức (methods) từ prototype của mình.

 - Prototype là một framework javascript, được xây dựng với mục địch giúp cho việc phát triển các ứng dựng web dễ dàng hơn, Với các component rất dễ sử dụng cho việc phát triển theo hướng đối tượng, lớp và thư viện Ajax

 
