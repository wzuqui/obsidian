# IP (Internet Protocol)

Existe dois tipos de IP: IPv4 e IPv6, hoje vamos abordar somente o IPv4. Depois vamos ver tudo isso no site com [ipcalc](https://jodies.de/ipcalc).

- [Tabela ARP](#tabela-arp)
- [Classes de IP](#classes-de-ip)
- [Mascara de rede](#marcada-de-rede)
- [Subnet](#subnet)
- [Broadcast](#broadcast)
- [TCP/Udp](#tcpudp)
- NAT
- DMZ

## Tabela ARP

É uma tabela que contém o endereço MAC de todos os dispositivos da rede. O endereço MAC é um endereço físico, único e permanente. O endereço MAC é gravado na memória ROM da placa de rede.
Estabelecido pela IEEE (Institute of Electrical and Electronics Engineers) e é composto por 48 bits (6 bytes) representados por 12 dígitos hexadecimais.
Onde os 6 primeiros dígitos identificam o fabricante e os 6 últimos identificam o dispositivo.

Exemplo: `00:0A:E4:36:00:02` ou `00-0A-E4-36-00-02`

Você pode ver todos os vendors no site [https://standards-oui.ieee.org/](https://standards-oui.ieee.org/)
Para ver no Windows você pode usar o comando `arp -a` ou `arp -g` no Linux.
Se quiser ver com qual é o IP da sua placa de rede basta usar o comando `ipconfig /all` no Windows ou `ifconfig` no Linux.

## Classes de IP

- IPv4

| Classe       | Intervalo de endereços      |
| ------------ | --------------------------- |
| A            | 0.0.0.0 – 127.255.255.255   |
| B            | 128.0.0.0 – 191.255.255.255 |
| C            | 192.0.0.0 – 223.255.255.255 |
| D(multicast) | 224.0.0.0–255.255.255.255   |
| E(reservado) | 224.0.0.0–255.255.255.255   |

## Marcada de rede

É um número binário que determina quais bits de um endereço IP são usados para identificar a sub-rede e qual parte é usada para identificar o host.
Também é conhecido como prefixo de rede. Exemplo: /24 ou 255.255.255.0

## Subnet

É o primeiro endereço de uma rede. Exemplo: para uma rede 192.168.0.0/24 o IP de rede é 192.168.0.0

## Broadcast

É sempre o último endereço de uma rede. Exemplo: para uma rede 192.168.0.0/24 o IP de broadcast é 192.168.0.255

## TCP/UDP

[IANA](https://www.rfc-editor.org/rfc/rfc6335.html)
