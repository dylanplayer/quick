#!bin/sh

npm i . -g
{
  quick clone https://github.com/dylanplayer/quick.git ./
  rm -rf ./dylanplayer/
  exit
} || {
  echo "Error while running clone"
  exit 1
}
