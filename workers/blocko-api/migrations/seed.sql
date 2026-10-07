-- Demo seed. shop = 'demo.myshopify.com'; stockists with shop '*' are shared defaults.
DELETE FROM stockists WHERE shop = '*';
INSERT INTO stockists (shop, name, address, city, country, lat, lng, phone) VALUES
('*','Stockist 1','1 Sample Street','Springfield','US',39.7817,-89.6501,'+1 555 0101'),
('*','Stockist 2','2 Sample Avenue','Riverton','US',40.7128,-74.0060,'+1 555 0102'),
('*','Stockist 3','3 Sample Road','Lakeside','US',34.0522,-118.2437,'+1 555 0103'),
('*','Stockist 4','4 Sample Lane','Northbridge','GB',51.5074,-0.1278,'+44 555 0104'),
('*','Stockist 5','5 Sample Court','Eastvale','GB',53.4808,-2.2426,'+44 555 0105'),
('*','Stockist 6','6 Sample Plaza','Westport','AU',-33.8688,151.2093,'+61 555 0106'),
('*','Stockist 7','7 Sample Way','Harborview','CA',43.6532,-79.3832,'+1 555 0107'),
('*','Stockist 8','8 Sample Close','Pinecrest','DE',52.5200,13.4050,'+49 555 0108');
DELETE FROM reviews WHERE shop = 'demo.myshopify.com' AND email_hash = 'seed';
INSERT INTO reviews (shop, product_id, rating, title, body, author, email_hash, verified, status, created_at) VALUES
('demo.myshopify.com','demo-product',5,'Just enough coverage','Evens out my complexion while still looking natural.','Jordan R.','seed',1,'approved','2026-09-20T10:00:00.000Z'),
('demo.myshopify.com','demo-product',5,'My everyday base','Easy to blend and comfortable all day.','Sam T.','seed',1,'approved','2026-09-01T10:00:00.000Z'),
('demo.myshopify.com','demo-product',4,'Good, wish more shades','Lovely finish, would like a wider range.','Alex P.','seed',1,'approved','2026-08-15T10:00:00.000Z'),
('demo.myshopify.com','demo-product',3,'Okay','Fine but not a standout.','Chris M.','seed',0,'approved','2026-08-01T10:00:00.000Z');
