/**
 * 主题数据表
 */
CREATE TABLE atom_topic (
  id bigint AUTO_INCREMENT PRIMARY KEY,
  state varchar(20) DEFAULT 'T',
  catg varchar(255),
  topt varchar(20) DEFAULT 'F',
  rflag varchar(20) DEFAULT 'F',
  rfrom varchar(255),
  visit bigint DEFAULT '0',
  reply bigint DEFAULT '0',
  title varchar(255),
  summary varchar(255),
  content text,
  gmt_create datetime,
  gmt_modify datetime
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;

ALTER TABLE atom_topic CHANGE visit_count visit bigint DEFAULT '0';
ALTER TABLE atom_topic CHANGE reply_count reply bigint DEFAULT '0';

ALTER TABLE atom_topic ADD state varchar(20) DEFAULT 'T' AFTER id;
ALTER TABLE atom_topic ADD topt varchar(20) DEFAULT 'F' AFTER catg;
ALTER TABLE atom_topic ADD rflag varchar(20) DEFAULT 'F' AFTER topt;
ALTER TABLE atom_topic ADD rfrom varchar(255) AFTER rflag;

ALTER TABLE atom_topic DROP COLUMN poster_id;
ALTER TABLE atom_topic DROP COLUMN poster_name;

/**
 * 评论数据表
 */
CREATE TABLE atom_reply (
  id bigint AUTO_INCREMENT PRIMARY KEY,
  state varchar(20) DEFAULT 'T',
  topic varchar(255),
  title varchar(255),
  uname varchar(128),
  uemail varchar(64),
  usite varchar(255),
  content text,
  gmt_create datetime,
  gmt_modify datetime
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;
