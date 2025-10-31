CREATE DATABASE IF NOT EXISTS bookit_db;
USE bookit_db;

DROP TABLE IF EXISTS bookings;
DROP TABLE IF EXISTS slots;
DROP TABLE IF EXISTS experiences;

CREATE TABLE experiences (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(100),
  description TEXT,
  imageUrl VARCHAR(512),
  pricePerPerson DECIMAL(10,2) DEFAULT 0,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE slots (
  id INT AUTO_INCREMENT PRIMARY KEY,
  experienceId INT NOT NULL,
  date DATE NOT NULL,
  time VARCHAR(50) NOT NULL,
  capacity INT DEFAULT 10,
  bookedCount INT DEFAULT 0,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (experienceId) REFERENCES experiences(id) ON DELETE CASCADE
);

CREATE TABLE bookings (
  id VARCHAR(36) PRIMARY KEY,
  slotId INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  peopleCount INT DEFAULT 1,
  totalAmount DECIMAL(10,2),
  promoCode VARCHAR(50),
  status VARCHAR(50) DEFAULT 'CONFIRMED',
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (slotId) REFERENCES slots(id) ON DELETE CASCADE
);

-- Sample experiences (hotels/tours/etc.)
INSERT INTO experiences (title, category, description, imageUrl, pricePerPerson) VALUES
('Sunset Beach Resort', 'Hotel', 'Sea-view resort with breakfast and beach access.', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', 3500.00),
('City Heritage Walking Tour', 'Tour', '2-hour guided walk through historic city areas.', 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b', 799.00),
('Mountain Sunrise Hike', 'Hike', 'Guided sunrise hike with packed breakfast.', 'https://images.unsplash.com/photo-1501785888041-af3ef285b470', 1299.00),
('River Rafting Adventure', 'Activity', 'Half-day rafting with safety gear and instructor.', 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee', 1999.00),
('Luxury City Hotel', 'Hotel', '5-star downtown hotel with pool and spa.', 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb', 4999.00);

-- Sample slots for experiences
INSERT INTO slots (experienceId, date, time, capacity) VALUES
(1, DATE_ADD(CURDATE(), INTERVAL 3 DAY), '14:00', 8),
(1, DATE_ADD(CURDATE(), INTERVAL 4 DAY), '10:00', 8),
(2, DATE_ADD(CURDATE(), INTERVAL 2 DAY), '09:00', 20),
(2, DATE_ADD(CURDATE(), INTERVAL 5 DAY), '15:00', 20),
(3, DATE_ADD(CURDATE(), INTERVAL 7 DAY), '05:00', 12),
(4, DATE_ADD(CURDATE(), INTERVAL 6 DAY), '08:30', 10),
(5, DATE_ADD(CURDATE(), INTERVAL 10 DAY), '12:00', 5);
