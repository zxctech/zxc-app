#!/bin/bash
cd /home/ec2-user/server
pm2 start pm2.config.js
pm2 startup
pm2 save
pm2 restart all