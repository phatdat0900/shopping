-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th7 29, 2022 lúc 03:56 PM
-- Phiên bản máy phục vụ: 10.4.24-MariaDB
-- Phiên bản PHP: 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `shopping`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categoies`
--

CREATE TABLE `categoies` (
  `CateID` int(11) NOT NULL,
  `CateName` varchar(255) NOT NULL,
  `gender` tinyint(1) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `categoies`
--

INSERT INTO `categoies` (`CateID`, `CateName`, `gender`, `createdAt`, `updatedAt`) VALUES
(1, 'Áo phông & Áo Polo', 1, NULL, NULL),
(2, 'Áo sơ mi', 1, NULL, NULL),
(3, 'Áo Sweater', 1, NULL, NULL),
(4, 'Quần dài & Quần short', 1, NULL, NULL),
(5, 'Quần jeans', 1, NULL, NULL),
(6, 'Đầm', 0, NULL, NULL),
(7, 'Áo thun', 0, NULL, NULL),
(8, 'Áo sơ mi', 0, NULL, NULL),
(9, 'Áo Sweater', 0, NULL, NULL),
(10, 'Chân váy & Quần short', 0, NULL, NULL),
(11, 'Quần dài & Quần short', 0, NULL, NULL),
(12, 'Quần jeans', 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `colors`
--

CREATE TABLE `colors` (
  `colorID` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `colors`
--

INSERT INTO `colors` (`colorID`, `Name`, `code`, `createdAt`, `updatedAt`) VALUES
(1, 'trắng Ecru', '#F6F6E7', NULL, NULL),
(2, 'xanh đen', '#1E3F5A', NULL, NULL),
(3, 'xanh xám', '#6699CC', NULL, NULL),
(4, 'be', '#C2C19B', NULL, NULL),
(5, 'đen', '#0D0D0D', NULL, NULL),
(6, 'trắng', '#FFFFFFF', NULL, NULL),
(7, 'nâu', '#964B00', NULL, NULL),
(8, 'xanh da trời', '#8FE1FF', NULL, NULL),
(9, 'đỏ', '#DC143C', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `details`
--

CREATE TABLE `details` (
  `DetailID` int(11) NOT NULL,
  `ProductID` int(11) NOT NULL,
  `ColorID` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `details`
--

INSERT INTO `details` (`DetailID`, `ProductID`, `ColorID`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, NULL, NULL),
(2, 1, 2, NULL, NULL),
(3, 2, 3, NULL, NULL),
(4, 2, 4, NULL, NULL),
(5, 2, 5, NULL, NULL),
(6, 2, 2, NULL, NULL),
(7, 2, 6, NULL, NULL),
(8, 3, 7, NULL, NULL),
(9, 3, 1, NULL, NULL),
(10, 4, 1, NULL, NULL),
(11, 4, 8, NULL, NULL),
(12, 5, 5, NULL, NULL),
(35, 7, 1, '2022-07-20 03:34:19', '2022-07-20 03:34:19'),
(37, 7, 8, '2022-07-20 03:40:12', '2022-07-20 03:40:12'),
(42, 8, 8, '2022-07-20 04:00:40', '2022-07-20 04:00:40'),
(43, 8, 5, '2022-07-20 04:03:32', '2022-07-20 04:03:32'),
(44, 8, 4, '2022-07-20 04:07:28', '2022-07-20 04:07:28'),
(45, 8, 7, '2022-07-20 05:01:08', '2022-07-20 05:01:08');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `images`
--

CREATE TABLE `images` (
  `imgID` int(11) NOT NULL,
  `DetailID` int(11) NOT NULL,
  `url` text NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `images`
--

INSERT INTO `images` (`imgID`, `DetailID`, `url`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS01063-11_V_1.jpg', NULL, NULL),
(2, 1, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS01063-11_V_2.jpg', NULL, NULL),
(3, 1, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS01063-11_V_3.jpg', NULL, NULL),
(4, 1, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS01063-11_V_4.jpg', NULL, NULL),
(5, 1, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS01063-11_V_5.jpg', NULL, NULL),
(6, 1, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS01063-11_V_P.jpg', NULL, NULL),
(7, 2, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS01063-44_V_1_1.jpg', NULL, NULL),
(8, 2, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS01063-44_V_2_1.jpg', NULL, NULL),
(9, 2, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS01063-44_V_3_1.jpg', NULL, NULL),
(10, 2, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS01063-44_V_4_1.jpg', NULL, NULL),
(11, 3, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS00378-26_V_1_3.jpg', NULL, NULL),
(12, 3, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS00378-26_V_2_3.jpg', NULL, NULL),
(13, 3, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS00378-26_V_3_3.jpg', NULL, NULL),
(14, 3, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS00378-26_V_4_3.jpg', NULL, NULL),
(15, 3, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS00378-26_V_5_3.jpg', NULL, NULL),
(16, 4, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS00378-16_V_1_3.jpg', NULL, NULL),
(17, 4, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS00378-16_V_2_3.jpg', NULL, NULL),
(18, 4, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS00378-16_V_3_3.jpg', NULL, NULL),
(19, 4, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS00378-16_V_4_3.jpg', NULL, NULL),
(20, 4, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS00378-16_V_5_3.jpg', NULL, NULL),
(21, 5, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS00378-20_V_P_19.jpg', NULL, NULL),
(22, 6, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS00378-44_V_P_16.jpg', NULL, NULL),
(23, 7, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS00378-10_V_P_13.jpg', NULL, NULL),
(24, 8, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS00764-G023_V_1_4.jpg', NULL, NULL),
(25, 8, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS00764-G023_V_2_4.jpg', NULL, NULL),
(26, 8, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS00764-G023_V_3_4.jpg', NULL, NULL),
(27, 8, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS00764-G023_V_4_4.jpg', NULL, NULL),
(28, 8, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS00764-G023_V_5_4.jpg', NULL, NULL),
(29, 8, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS00764-G023_V_P_4.jpg', NULL, NULL),
(30, 9, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS00764-11_V_1_5.jpg', NULL, NULL),
(31, 9, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS00764-11_V_2_5.jpg', NULL, NULL),
(32, 9, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS00764-11_V_3_5.jpg', NULL, NULL),
(33, 9, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS00764-11_V_4_5.jpg', NULL, NULL),
(34, 9, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS00764-11_V_5_5.jpg', NULL, NULL),
(35, 9, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS00764-11_V_P_5.jpg', NULL, NULL),
(36, 10, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS01062-11_V_1.jpg', NULL, NULL),
(37, 10, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS01062-11_V_2.jpg', NULL, NULL),
(38, 10, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS01062-11_V_3.jpg', NULL, NULL),
(39, 10, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS01062-11_V_4.jpg', NULL, NULL),
(40, 10, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS01062-11_V_5.jpg', NULL, NULL),
(41, 11, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS01062-40_V_1.jpg', NULL, NULL),
(42, 11, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS01062-40_V_2.jpg', NULL, NULL),
(43, 11, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS01062-40_V_3.jpg', NULL, NULL),
(44, 11, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS01062-40_V_4.jpg', NULL, NULL),
(45, 11, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS01062-40_V_5.jpg', NULL, NULL),
(46, 12, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTR00259-20_V_1_10.jpg', NULL, NULL),
(47, 12, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTR00259-20_V_2_9.jpg', NULL, NULL),
(48, 12, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTR00259-20_V_3_9.jpg', NULL, NULL),
(49, 12, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTR00259-20_V_4_9.jpg', NULL, NULL),
(50, 12, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTR00259-20_V_5_9.jpg', NULL, NULL),
(51, 12, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTR00259-20_V_P_9.jpg', NULL, NULL),
(59, 42, 'https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPCM00576-40_V_1.jpg', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orderitems`
--

CREATE TABLE `orderitems` (
  `orderItemsID` int(11) NOT NULL,
  `productID` int(11) NOT NULL,
  `orderID` int(11) NOT NULL,
  `productName` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `size` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `orderitems`
--

INSERT INTO `orderitems` (`orderItemsID`, `productID`, `orderID`, `productName`, `color`, `size`, `quantity`, `price`) VALUES
(42, 2, 87, 'Áo polo vải linen', 'xanh xám', 'M', 2, 360000),
(43, 2, 87, 'Áo polo vải linen', 'đen', 'L', 2, 360000),
(44, 1, 88, 'Áo polo nam phối thêu', 'xanh đen', 'M', 6, 450000),
(45, 1, 89, 'Áo polo nam phối thêu', 'trắng Ecru', 'L', 2, 450000),
(46, 3, 90, 'Áo thun kẻ sọc ngang organic cotton', 'nâu', 'S', 1, 380000),
(47, 3, 91, 'Áo thun kẻ sọc ngang organic cotton', 'nâu', 'S', 1, 380000),
(48, 1, 92, 'Áo polo nam phối thêu', 'xanh đen', 'M', 1, 450000),
(49, 5, 93, 'Áo polo dệt kim', 'đen', 'L', 2, 380000),
(50, 3, 94, 'Áo thun kẻ sọc ngang organic cotton', 'nâu', 'M', 2, 380000),
(51, 2, 95, 'Áo polo vải linen', 'xanh xám', 'L', 3, 360000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `orderID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `phone` int(10) NOT NULL,
  `address` varchar(255) NOT NULL,
  `totalPrice` int(11) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp(),
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`orderID`, `userID`, `phone`, `address`, `totalPrice`, `createdAt`, `updatedAt`, `status`) VALUES
(87, 1, 4432534, 'ha noi', 1440000, '2022-07-19 16:26:45', '2022-07-19 16:26:45', NULL),
(88, 1, 964409525, 'hai phong', 2700000, '2022-07-20 04:59:52', '2022-07-20 04:59:52', NULL),
(89, 1, 4432534, 'ha noi', 900000, '2022-07-29 13:20:08', '2022-07-29 13:20:08', 1),
(90, 1, 713240033, 'ha noi', 380000, '2022-07-29 13:21:44', '2022-07-29 13:21:44', NULL),
(91, 1, 352202799, 'hai phong', 380000, '2022-07-29 13:25:27', '2022-07-29 13:25:27', NULL),
(92, 1, 352202799, 'dinh cong ha', 450000, '2022-07-29 13:30:21', '2022-07-29 13:30:21', NULL),
(93, 1, 713240033, 'hp', 760000, '2022-07-29 13:32:49', '2022-07-29 13:32:49', NULL),
(94, 1, 962954038, 'hai phong', 760000, '2022-07-29 13:34:49', '2022-07-29 13:34:49', NULL),
(95, 1, 4432534, 'hp', 1080000, '2022-07-29 13:35:39', '2022-07-29 13:35:39', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `ProductID` int(11) NOT NULL,
  `CateID` int(11) NOT NULL,
  `Price` int(11) NOT NULL,
  `productName` varchar(255) NOT NULL,
  `detail` text DEFAULT NULL,
  `discount` int(11) NOT NULL,
  `Rating` float NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`ProductID`, `CateID`, `Price`, `productName`, `detail`, `discount`, `Rating`, `createdAt`, `updatedAt`) VALUES
(1, 1, 500000, 'Áo polo nam phối thêu', 'Vải chính: 100% cotton \r\n Viền: 100% cotton\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut libero placerat, lobortis felis sed, mollis elit. Nulla mollis dolor ac odio elementum rutrum. Nunc mollis orci nulla, sed blandit nisl euism', 10, 5, NULL, NULL),
(2, 1, 400000, 'Áo polo vải linen', 'Vải chính: 100% linen', 10, 4.5, NULL, NULL),
(3, 1, 400000, 'Áo thun kẻ sọc ngang organic cotton', 'Vải chính: 100% cotton\nBo viền: 95% cotton, 5% elastane\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut libero placerat, lobortis felis sed, mollis elit. Nulla mollis dolor ac odio elementum rutrum. Nunc mollis orci nulla, sed blandit nisl euismod ornare. Vestibulum sit amet augue ex. Proin diam lacus, elementum nec auctor sit amet, viverra congue mauris. Ut molestie magna eget lorem egestas porttitor. Vivamus lectus arcu, euismod at nulla vitae, euismod iaculis metus. Fusce lobortis at eros vel viverra. Nullam a fermentum ante, quis laoreet ligula. Ut ut orci malesuada, hendrerit velit vel, blandit quam. Aenean ac accumsan lectus. Fusce blandit at mi nec pretium. Pellentesque sollicitudin consequat odio, in molestie tortor commodo sit amet. Nam euismod, diam quis placerat egestas, elit ante tincidunt orci, et pretium augue orci nec eros. Pellentesque sed posuere nibh, eu bibendum nunc. Aliquam erat volutpat.\n\nUt euismod quam congue dolor ultrices, quis porta enim tincidunt. Suspendisse commodo venenatis est. Donec rutrum nulla eget libero tempor lacinia. Vestibulum sit amet ultricies sapien, non eleifend dui. Duis eros elit, tincidunt quis feugiat at, maximus quis augue. Ut eget iaculis lorem, id venenatis eros. Vivamus scelerisque vel dui id convallis. Duis a bibendum nulla, a malesuada massa. Donec sagittis arcu vitae purus aliquet ultricies. Sed eleifend augue elementum accumsan congue. Donec et viverra quam. Fusce commodo malesuada mi vitae pellentesque. Vivamus efficitur consequat lorem sed porta. Nullam aliquet velit vel lacus cursus fermentum. Aenean posuere nisi a ex dictum eleifend.\n\nQuisque sem nulla, porttitor id orci at, pretium facilisis velit. Duis lectus diam, tempor non semper quis, vestibulum id felis. Mauris congue ipsum a tellus congue tristique. Maecenas eu efficitur nisi. Donec malesuada massa odio, et tristique ex lobortis ac. Aliquam rutrum quam luctus dui finibus convallis. Mauris viverra, magna vel euismod sodales, augue mi gravida metus, aliquam porta mi eros sit amet purus. Etiam rhoncus felis quis leo iaculis iaculis. Proin ultrices, massa et pellentesque accumsan, nibh risus posuere felis, sit amet faucibus sapien tortor quis magna. Morbi tincidunt imperdiet quam suscipit gravida.\n\nCurabitur pulvinar sem interdum mauris cursus faucibus. Praesent accumsan eget ligula mollis congue. Maecenas dapibus metus a convallis vulputate. Nullam sit amet nisi elit. Aliquam malesuada ex eget urna facilisis, eu porttitor nulla pretium. Pellentesque magna ipsum, pretium at magna et, aliquet malesuada libero. Pellentesque vitae tellus tortor. Mauris gravida tellus ut fermentum sollicitudin. Aenean a risus semper, ultricies lectus eu, porttitor justo. Suspendisse commodo tincidunt metus id feugiat. Fusce ornare risus tortor, nec commodo nibh dictum non. Morbi id urna viverra, sollicitudin erat vitae, malesuada diam. Nam lobortis convallis magna id convallis.\n\nInteger fringilla risus porttitor sagittis lacinia. Pellentesque eget velit risus. Nam elementum orci felis, in cursus diam posuere et. Phasellus pretium consectetur faucibus. Nulla vitae convallis nisi. Nullam lobortis sollicitudin velit quis tincidunt. Aenean in nulla sit amet mi sodales interdum vel sed nunc. Praesent dapibus tincidunt lorem vel lacinia. Ut faucibus lacus ac justo sodales facilisis. Sed sagittis faucibus hendrerit.', 5, 4, NULL, NULL),
(4, 1, 500000, 'Áo polo nam phối thêu', 'Vải chính: 100% cotton \r\n Viền: 100% cotton', 5, 4, NULL, NULL),
(5, 1, 400000, 'Áo polo dệt kim', 'Vải chính: 70% cotton, 30% polyester', 5, 5, NULL, NULL),
(7, 1, 300000, 'Áo thun phối hình thêu ', 'hello ipsum dolor sit amet, consectetur adipiscing elit. Proin leo felis, venenatis eleifend augue sed, scelerisque consectetur lacus. Sed quis accumsan mauris. Etiam orci lorem, porttitor at dapibus vitae, condimentum quis urna. Nam elit felis, tristique a viverra ac, maximus id leo. Praesent sit amet maximus ex. Nullam pharetra mollis posuere. Etiam sodales erat ipsum, nec accumsan mi blandit quis. Maecenas sed leo sit amet quam rutrum ultrices at id tellus.  Nunc convallis bibendum lacus, at aliquam sem elementum a. Donec fringilla et metus sit amet egestas. Sed sollicitudin, mi sed porttitor finibus, ipsum nisi luctus dolor, et vulputate elit quam ut odio. Integer imperdiet lorem id fringilla luctus. Ut accumsan sodales lectus nec condimentum. Nunc posuere tincidunt maximus. Quisque feugiat molestie felis, non laoreet purus cursus ac. Phasellus vestibulum facilisis nibh et tincidunt. Aliquam dictum risus sed libero sagittis cursus. Sed vitae urna lobortis, vulputate magna sed, iaculis dui. Aenean nulla risus, tristique id maximus at, vestibulum ut ligula. Etiam tincidunt tellus non venenatis convallis. Proin vel ornare arcu. Sed malesuada neque nisl, et placerat ipsum porta et. Sed pellentesque aliquet euismod. Suspendisse ullamcorper consequat ullamcorper.  Integer non orci vel nisl accumsan dignissim. Integer quis malesuada velit. Ut feugiat luctus arcu eget vehicula. Vivamus mattis massa quis scelerisque luctus. Morbi hendrerit egestas nibh, eu lobortis mauris rutrum vitae. Nulla non porttitor felis. Maecenas vel aliquet mi. Aliquam malesuada porttitor ornare. In sagittis nunc elementum varius pretium.', 10, 0, '2022-07-19 13:14:34', '2022-07-20 03:40:08'),
(8, 2, 500000, 'ÁO SƠ MI HỌA TIẾT LÚA MÌ', 'hello ipsum dolor sit amet, consectetur adipiscing elit. Proin leo felis, venenatis eleifend augue sed, scelerisque consectetur lacus. Sed quis accumsan mauris. Etiam orci lorem, porttitor at dapibus vitae, condimentum quis urna. Nam elit felis, tristique a viverra ac, maximus id leo. Praesent sit amet maximus ex. Nullam pharetra mollis posuere. Etiam sodales erat ipsum, nec accumsan mi blandit quis. Maecenas sed leo sit amet quam rutrum ultrices at id tellus.  Nunc convallis bibendum lacus, at aliquam sem elementum a. Donec fringilla et metus sit amet egestas. Sed sollicitudin, mi sed porttitor finibus, ipsum nisi luctus dolor, et vulputate elit quam ut odio. Integer imperdiet lorem id fringilla luctus. Ut accumsan sodales lectus nec condimentum. Nunc posuere tincidunt maximus. Quisque feugiat molestie felis, non laoreet purus cursus ac. Phasellus vestibulum facilisis nibh et tincidunt. Aliquam dictum risus sed libero sagittis cursus. Sed vitae urna lobortis, vulputate magna sed, iaculis dui. Aenean nulla ri', 20, 0, '2022-07-20 03:57:21', '2022-07-20 05:01:08');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20220619044050-create_users_table.js'),
('20220626135740-create_products_table.js'),
('20220626142010-create_colors_table.js'),
('20220626142723-create_details_table.js'),
('20220626145239-create_images_table.js'),
('20220702080558-create_categories_table.js'),
('20220702082733-create_products_table.js'),
('20220705160552-create_sizes_table.js'),
('20220717055755-create_orderItems_table.js'),
('20220717060528-create_order_table.js'),
('20220717150440-create_orders_table.js'),
('20220717150444-create_orderItems_table.js'),
('20220717151740-create_orderItems_table.js'),
('20220717151900-create_orderItems_table.js'),
('20220717151940-create_orderItems_table.js');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sizes`
--

CREATE TABLE `sizes` (
  `sizeID` int(11) NOT NULL,
  `size` varchar(255) NOT NULL,
  `DetailID` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `sizes`
--

INSERT INTO `sizes` (`sizeID`, `size`, `DetailID`, `quantity`, `createdAt`, `updatedAt`) VALUES
(1, 'S', 1, 2, NULL, NULL),
(2, 'M', 1, 30, NULL, NULL),
(3, 'L', 1, 20, NULL, NULL),
(4, 'S', 2, 50, NULL, NULL),
(5, 'M', 2, 50, NULL, NULL),
(6, 'L', 2, 40, NULL, NULL),
(7, 'S', 3, 0, NULL, NULL),
(8, 'M', 3, 30, NULL, NULL),
(9, 'L', 3, 20, NULL, NULL),
(10, 'S', 4, 40, NULL, NULL),
(11, 'M', 4, 30, NULL, NULL),
(12, 'L', 4, 20, NULL, NULL),
(13, 'S', 5, 30, NULL, NULL),
(14, 'M', 5, 30, NULL, NULL),
(15, 'L', 5, 40, NULL, NULL),
(16, 'S', 6, 30, NULL, NULL),
(17, 'M', 6, 30, NULL, NULL),
(18, 'L', 6, 40, NULL, NULL),
(19, 'S', 7, 20, NULL, NULL),
(20, 'M', 7, 50, NULL, NULL),
(21, 'L', 7, 30, NULL, NULL),
(22, 'S', 8, 40, NULL, NULL),
(23, 'M', 8, 50, NULL, NULL),
(24, 'L', 8, 40, NULL, NULL),
(25, 'S', 9, 20, NULL, NULL),
(26, 'M', 9, 30, NULL, NULL),
(27, 'L', 9, 40, NULL, NULL),
(28, 'S', 10, 30, NULL, NULL),
(29, 'M', 10, 50, NULL, NULL),
(30, 'L', 10, 40, NULL, NULL),
(31, 'S', 11, 50, NULL, NULL),
(32, 'M', 11, 40, NULL, NULL),
(33, 'L', 11, 20, NULL, NULL),
(34, 'S', 12, 20, NULL, NULL),
(35, 'M', 12, 40, NULL, NULL),
(36, 'L', 12, 20, NULL, NULL),
(52, 'L', 35, 3, '2022-07-20 03:34:19', '2022-07-20 03:34:19'),
(53, 'S', 35, 20, '2022-07-20 03:34:19', '2022-07-20 03:34:19'),
(54, 'M', 35, 0, '2022-07-20 03:34:19', '2022-07-20 03:34:19'),
(55, 'XL', 35, 0, '2022-07-20 03:34:19', '2022-07-20 03:34:19'),
(56, 'XXL', 35, 0, '2022-07-20 03:34:19', '2022-07-20 03:34:19'),
(72, 'L', 42, 0, '2022-07-20 04:00:40', '2022-07-20 04:00:40'),
(73, 'S', 42, 0, '2022-07-20 04:00:40', '2022-07-20 04:00:40'),
(74, 'M', 42, 0, '2022-07-20 04:00:40', '2022-07-20 04:00:40'),
(75, 'XL', 42, 0, '2022-07-20 04:00:40', '2022-07-20 04:00:40'),
(76, 'XXL', 42, 0, '2022-07-20 04:00:40', '2022-07-20 04:00:40'),
(77, 'L', 43, 0, '2022-07-20 04:03:32', '2022-07-20 04:03:32'),
(78, 'S', 43, 0, '2022-07-20 04:03:32', '2022-07-20 04:03:32'),
(79, 'M', 43, 0, '2022-07-20 04:03:32', '2022-07-20 04:03:32'),
(80, 'XL', 43, 0, '2022-07-20 04:03:32', '2022-07-20 04:03:32'),
(81, 'XXL', 43, 0, '2022-07-20 04:03:32', '2022-07-20 04:03:32'),
(82, 'L', 44, 0, '2022-07-20 04:07:29', '2022-07-20 04:07:29'),
(83, 'S', 44, 0, '2022-07-20 04:07:29', '2022-07-20 04:07:29'),
(84, 'M', 44, 0, '2022-07-20 04:07:29', '2022-07-20 04:07:29'),
(85, 'XL', 44, 0, '2022-07-20 04:07:29', '2022-07-20 04:07:29'),
(86, 'XXL', 44, 0, '2022-07-20 04:07:29', '2022-07-20 04:07:29'),
(87, 'L', 45, 0, '2022-07-20 05:01:08', '2022-07-20 05:01:08'),
(88, 'S', 45, 0, '2022-07-20 05:01:08', '2022-07-20 05:01:08'),
(89, 'M', 45, 0, '2022-07-20 05:01:08', '2022-07-20 05:01:08'),
(90, 'XL', 45, 0, '2022-07-20 05:01:08', '2022-07-20 05:01:08'),
(91, 'XXL', 45, 0, '2022-07-20 05:01:08', '2022-07-20 05:01:08');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `fullName`, `userName`, `mail`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'dat', 'tandat123', 'phatdat1900@gmail.com', '12345678', '2022-06-20 03:33:37', '2022-06-21 12:55:36'),
(11, 'Lê Tấn Đạt', 'hust', 'dat.lt184060@sis.hust.edu.vn', '1234567', '2022-07-13 13:31:30', '2022-07-13 13:31:30'),
(13, 'nhi', 'nhi', 'nhi@gmail.com', '1234567', '2022-07-13 13:43:27', '2022-07-13 13:43:27'),
(14, 'Lê', 'yuuki0900', 'goldfish0900@gmail.c', '4', '2022-07-18 06:03:21', '2022-07-18 06:03:21'),
(15, '', '', '', '', '2022-07-24 02:52:50', '2022-07-24 02:52:50');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `categoies`
--
ALTER TABLE `categoies`
  ADD PRIMARY KEY (`CateID`);

--
-- Chỉ mục cho bảng `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`colorID`);

--
-- Chỉ mục cho bảng `details`
--
ALTER TABLE `details`
  ADD PRIMARY KEY (`DetailID`),
  ADD UNIQUE KEY `product_color` (`ProductID`,`ColorID`),
  ADD KEY `ColorID` (`ColorID`);

--
-- Chỉ mục cho bảng `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`imgID`),
  ADD KEY `DetailID` (`DetailID`);

--
-- Chỉ mục cho bảng `orderitems`
--
ALTER TABLE `orderitems`
  ADD PRIMARY KEY (`orderItemsID`),
  ADD KEY `productID` (`productID`),
  ADD KEY `orderID` (`orderID`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderID`),
  ADD KEY `userID` (`userID`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`ProductID`),
  ADD KEY `FK_PersonOrder` (`CateID`);

--
-- Chỉ mục cho bảng `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`sizeID`),
  ADD KEY `DetailID` (`DetailID`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `userName` (`userName`),
  ADD UNIQUE KEY `mail` (`mail`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `categoies`
--
ALTER TABLE `categoies`
  MODIFY `CateID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `colors`
--
ALTER TABLE `colors`
  MODIFY `colorID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `details`
--
ALTER TABLE `details`
  MODIFY `DetailID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT cho bảng `images`
--
ALTER TABLE `images`
  MODIFY `imgID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT cho bảng `orderitems`
--
ALTER TABLE `orderitems`
  MODIFY `orderItemsID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `orderID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `ProductID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `sizes`
--
ALTER TABLE `sizes`
  MODIFY `sizeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `details`
--
ALTER TABLE `details`
  ADD CONSTRAINT `details_ibfk_1` FOREIGN KEY (`ProductID`) REFERENCES `products` (`ProductID`),
  ADD CONSTRAINT `details_ibfk_2` FOREIGN KEY (`ColorID`) REFERENCES `colors` (`colorID`);

--
-- Các ràng buộc cho bảng `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`DetailID`) REFERENCES `details` (`DetailID`);

--
-- Các ràng buộc cho bảng `orderitems`
--
ALTER TABLE `orderitems`
  ADD CONSTRAINT `orderitems_ibfk_1` FOREIGN KEY (`productID`) REFERENCES `products` (`ProductID`),
  ADD CONSTRAINT `orderitems_ibfk_2` FOREIGN KEY (`orderID`) REFERENCES `orders` (`orderID`);

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `FK_PersonOrder` FOREIGN KEY (`CateID`) REFERENCES `categoies` (`CateID`);

--
-- Các ràng buộc cho bảng `sizes`
--
ALTER TABLE `sizes`
  ADD CONSTRAINT `sizes_ibfk_1` FOREIGN KEY (`DetailID`) REFERENCES `details` (`DetailID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
