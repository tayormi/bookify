#!/bin/sh -x

heroku login

git remote |grep -e \s*heroku$

if [ "$?" != "0" ]
then
  heroku create --buildpack https://github.com/tayormi/bookify.git
fi

git push heroku master