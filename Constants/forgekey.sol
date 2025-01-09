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




ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIAPny8D3JAEBoYE7wLwSPBdspirSQUgMskMNyc3dgpe6 rayhanalmim1@gmail.com

foundry code - forge
forge compile
anvil
forge --help
deploy : forge create --help
forge create SimpleStorage (default)
intract with the custom chain : forge crate SimpleStorage --rpc-url http://127.0.0.1:8545 --interactive
forge create SimpleStorage --rpc-url http://127.0.0.1:8545 --interactive --broadcast

clear history : history -c

onchain deployment script : forge script script/DeploySimpleStorage.s.sol --rpc-url http://127.0.0.1:8545/ --broadcast --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 (FOR production must be used : --interactive)

hax to dec : cast --to-base 0x714c2 dec
case --help