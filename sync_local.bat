@echo off

SET source_host=192.168.0.2
SET source_user=***
SET source_pass=***
SET source_db=kh_sample_local

SET dest_host=localhost
SET dest_user=root
SET dest_pass=
SET dest_db=kh_sample_local

SET temp_file=sync_local.sql



echo dumping database..
call mysqldump -h %source_host% -u %source_user% --password=%source_pass% %source_db% > %temp_file%

echo importing database..
call mysql -h %dest_host% -u %dest_user% --password=%dest_pass% %dest_db% < %temp_file%

echo selesai
pause