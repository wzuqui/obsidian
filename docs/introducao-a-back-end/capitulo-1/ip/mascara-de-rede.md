---
sidebar_position: 3
---

# 🎭 Máscara de rede

É um número binário que determina quais bits de um endereço IP são usados para identificar a sub-rede e qual parte é usada para identificar o host.
Também é conhecido como prefixo de rede. Exemplo: /24 ou 255.255.255.0.

## Exemplo:

Com o site [ipcalc](https://jodies.de/ipcalc) podemos calcular a máscara de rede de um endereço IP.

No exemplo abaixo vamos verificar cada campo para o exemplo 192.160/24:

|            |                    |                                                |
| ---------- | ------------------ | ---------------------------------------------- |
| Address:   | 192.168.0.0        | 11000000.10101000.00000000 .00000000           |
| Netmask:   | 255.255.255.0 = 24 | 11111111.11111111.11111111 .00000000           |
| Wildcard:  | 0.0.0.255          | 00000000.00000000.00000000 .11111111           |
| -          |                    |                                                |
| Network:   | 192.168.0.0/24     | 11000000.10101000.00000000 .00000000 (Class C) |
| Broadcast: | 192.168.0.255      | 11000000.10101000.00000000 .11111111           |
| HostMin:   | 192.168.0.1        | 11000000.10101000.00000000 .00000001           |
| HostMax:   | 192.168.0.254      | 11000000.10101000.00000000 .11111110           |
| Hosts/Net: | 254                | (Private Internet)                             |

- **Address**: Endereço IP
- **Netmask**: Máscara de rede, é usada para determinar qual parte do endereço IP é a rede e qual parte é o host.
- **Wildcard**: Inverso da máscara de rede, é usado para cálculos de roteamento.
- **Network**: Endereço de rede, é o endereço IP que representa a rede.
- **Broadcast**: Endereço de broadcast, é o ultimo endereço de uma rede.
- **HostMin**: Primeiro endereço de host.
- **HostMax**: Último endereço de host.
- **Hosts/Net**: Quantidade de hosts que a rede suporta.
