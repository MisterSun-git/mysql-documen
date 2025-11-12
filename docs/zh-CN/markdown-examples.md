# Mysql 语句

mysql 常用语句

## 查询数据库表接口信息
``` sql
SELECT 
    COLUMN_NAME AS '字段名',
    COLUMN_COMMENT AS '中文描述',
    SUBSTRING_INDEX(COLUMN_TYPE, '(', 1) AS '类型',
    CASE 
        WHEN DATA_TYPE IN ('varchar', 'char', 'text', 'tinytext', 'mediumtext', 'longtext') 
            THEN CHARACTER_MAXIMUM_LENGTH
        WHEN DATA_TYPE IN ('int', 'tinyint', 'smallint', 'mediumint', 'bigint', 'float', 'double', 'decimal', 'numeric')  
            THEN SUBSTRING_INDEX(SUBSTRING_INDEX(COLUMN_TYPE, '(', -1), ')', 1)
        ELSE 0
    END AS '长度',
    IF(COLUMN_KEY = 'PRI', 'Y', '') AS '主键',
    IF(IS_NULLABLE='NO','Y','') AS '非空',
    IF(COLUMN_KEY = 'UNI', 'Y', '') AS '唯一',
    IF(EXTRA = 'auto_increment', 'Y', '') AS '自增',
		IF(EXTRA = 'auto_increment', 'Y', '') AS '外键',
   
    COLUMN_COMMENT AS '备注'
FROM 
    INFORMATION_SCHEMA.COLUMNS
WHERE 
    table_schema = DATABASE()
    AND table_name = '表名称';
```


