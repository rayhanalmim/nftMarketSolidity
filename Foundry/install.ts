rayhan@DESKTOP-86V51CQ:~$ cat /etc/resolv.conf
cat: /etc/resolv.conf: No such file or directory
rayhan@DESKTOP-86V51CQ:~$ sudo rm /etc/resolv.conf
[sudo] password for rayhan:
rm: cannot remove '/etc/resolv.conf': No such file or directory
rayhan@DESKTOP-86V51CQ:~$ sudo nano /etc/resolv.conf
rayhan@DESKTOP-86V51CQ:~$ sudo chmod 644 /etc/resolv.conf
rayhan@DESKTOP-86V51CQ:~$ sudo nano /etc/wsl.conf
rayhan@DESKTOP-86V51CQ:~$ cat /etc/resolv.conf
nameserver 8.8.8.8
nameserver 8.8.4.4

rayhan@DESKTOP-86V51CQ:~$ ping -c 4 github.com
PING github.com (20.205.243.166) 56(84) bytes of data.
64 bytes from 20.205.243.166: icmp_seq=1 ttl=109 time=53.8 ms
64 bytes from 20.205.243.166: icmp_seq=2 ttl=109 time=53.5 ms
64 bytes from 20.205.243.166: icmp_seq=3 ttl=109 time=53.6 ms
64 bytes from 20.205.243.166: icmp_seq=4 ttl=109 time=50.8 ms

--- github.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3003ms
rtt min/avg/max/mdev = 50.846/52.923/53.775/1.204 ms
rayhan@DESKTOP-86V51CQ:~$ curl -L https://foundry.paradigm.xyz | bash
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   167  100   167    0     0    790      0 --:--:-- --:--:-- --:--:--   795
100  2196  100  2196    0     0   2788      0 --:--:-- --:--:-- --:--:--  2788
Installing foundryup...

Detected your preferred shell is bash and added foundryup to PATH.
Run 'source /home/rayhan/.bashrc' or start a new terminal session to use foundryup.
Then, simply run 'foundryup' to install Foundry.
rayhan@DESKTOP-86V51CQ:~$ source /home/rayhan/.bashrc
rayhan@DESKTOP-86V51CQ:~$ foundryup


.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx

 ╔═╗ ╔═╗ ╦ ╦ ╔╗╔ ╔╦╗ ╦═╗ ╦ ╦         Portable and modular toolkit
 ╠╣  ║ ║ ║ ║ ║║║  ║║ ╠╦╝ ╚╦╝    for Ethereum Application Development
 ╚   ╚═╝ ╚═╝ ╝╚╝ ═╩╝ ╩╚═  ╩                 written in Rust.

.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx

Repo       : https://github.com/foundry-rs/foundry
Book       : https://book.getfoundry.sh/
Chat       : https://t.me/foundry_rs/
Support    : https://t.me/foundry_support/
Contribute : https://github.com/foundry-rs/foundry/blob/master/CONTRIBUTING.md

.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx

foundryup: installing foundry (version stable, tag stable)
foundryup: downloading forge, cast, anvil, and chisel for stable version
################################################################################################################# 100.0%
forge
cast
anvil
chisel
foundryup: downloading manpages
###################################################################################################################################################################################################################################### 100.0%
foundryup: installed - forge 0.3.0 (5a8bd89 2024-12-20T08:46:21.555250780Z)
foundryup: installed - cast 0.3.0 (5a8bd89 2024-12-20T08:46:21.564365462Z)
foundryup: installed - anvil 0.3.0 (5a8bd89 2024-12-20T08:46:21.565569027Z)
foundryup: installed - chisel 0.3.0 (5a8bd89 2024-12-20T08:46:21.536871477Z)
foundryup: done!
rayhan@DESKTOP-86V51CQ:~$ git config --global user.name "rayhanalmim"
rayhan@DESKTOP-86V51CQ:~$ git config --global user.email "rayhanalmim1@gmail.com"
rayhan@DESKTOP-86V51CQ:~$ mkdir foundry-test-project
rayhan@DESKTOP-86V51CQ:~$ cd foundry-test-project
rayhan@DESKTOP-86V51CQ:~/foundry-test-project$ forge init
Initializing /home/rayhan/foundry-test-project...
Installing forge-std in /home/rayhan/foundry-test-project/lib/forge-std (url: Some("https://github.com/foundry-rs/forge-std"), tag: None)
Cloning into '/home/rayhan/foundry-test-project/lib/forge-std'...
remote: Enumerating objects: 1978, done.
remote: Counting objects: 100% (829/829), done.
remote: Compressing objects: 100% (191/191), done.
remote: Total 1978 (delta 762), reused 642 (delta 638), pack-reused 1149 (from 5)
Receiving objects: 100% (1978/1978), 692.79 KiB | 2.64 MiB/s, done.
Resolving deltas: 100% (1291/1291), done.
    Installed forge-std v1.9.5
    Initialized forge project
rayhan@DESKTOP-86V51CQ:~/foundry-test-project$ ssh-keygen -t ed25519 -C "rayhanalmim1@gmail.com"
Generating public/private ed25519 key pair.
Enter file in which to save the key (/home/rayhan/.ssh/id_ed25519):
Created directory '/home/rayhan/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/rayhan/.ssh/id_ed25519
Your public key has been saved in /home/rayhan/.ssh/id_ed25519.pub
The key fingerprint is:
SHA256:AglzDuQaZovPwEHoJoVlWvHO9CBFPUZMS7p80Ft48os rayhanalmim1@gmail.com
The key's randomart image is:
+--[ED25519 256]--+
|.=Xo+=+          |
|+=.O ==o         |
|+=o X.=.o        |
|*=o* * *         |
|*o  = = S        |
| +   . o .       |
|  o   E .        |
|                 |
|                 |
+----[SHA256]-----+
rayhan@DESKTOP-86V51CQ:~/foundry-test-project$ cat ~/.ssh/id_ed25519.pub
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIAPny8D3JAEBoYE7wLwSPBdspirSQUgMskMNyc3dgpe6 rayhanalmim1@gmail.com
rayhan@DESKTOP-86V51CQ:~/foundry-test-project$