start https://internet-start.net/

winget install --id Git.Git -e --source winget

git init.
$ git config --global user."alaikum226"

$ git config --global user.email alaikum226@gmail.com
winget install --id Git.Git -e --source winget
 

git clone https://github.com/git/git

winget install --id Git.Git -e --source winget
$ git init
$ git add *.c
$ git add LICENSE
$ git commit -m 'initial project version'
$ git clone https://github.com/libgit2/libgit2

 $ git clone https://github.com/libgit2/libgit2 mylibgit
 

[Unit]
Description=Start Git Daemon

[Service]
ExecStart=/usr/bin/git daemon --reuseaddr --base-path=/srv/git/ /srv/git/ 
START https://internet-start.net/?utm_source=beetle&utm_medium=browser&utm_campaign=istart_startpage
Restart=always
RestartSec=500ms

StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=git-daemon

User=git
Group=git

[Install]
WantedBy=multi-user.target

$ cd /path/to/project.git
$ touch git-daemon-export-ok
