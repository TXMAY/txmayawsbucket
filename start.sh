#!bin/bash
cd /home/ubuntu/txmayawsbucket
pm2 stop all
pm2 start index.js