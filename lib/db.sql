CREATE TABLE atom_topic (
  id bigint AUTO_INCREMENT PRIMARY KEY,
  catg varchar(255),
  visit_count bigint DEFAULT '0',
  reply_count bigint DEFAULT '0',
  poster_id varchar(255),
  poster_name varchar(255),
  title varchar(255),
  summary varchar(255),
  content text,
  gmt_create datetime,
  gmt_modify datetime
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;
