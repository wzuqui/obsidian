---
sidebar_position: 2
---

# 🙋‍♂️ Classes de IP

Todas as classes de IP e reservas encontra-se no site da IANA no [https://www.iana.org/assignments/iana-ipv4-special-registry/iana-ipv4-special-registry.xhtml](https://www.iana.org/assignments/iana-ipv4-special-registry/iana-ipv4-special-registry.xhtml).

## IPv4

| Classe       | Intervalo de endereços      |
| ------------ | --------------------------- |
| A            | 0.0.0.0 – 127.255.255.255   |
| B            | 128.0.0.0 – 191.255.255.255 |
| C            | 192.0.0.0 – 223.255.255.255 |
| D(multicast) | 224.0.0.0–255.255.255.255   |
| E(reservado) | 224.0.0.0–255.255.255.255   |

## IP privado

Endereços IP privados são endereços IP atribuídos a dispositivos em uma rede privada. Permite que o roteador se comunique com os dispositivos conectados a ele e também permite que esses dispositivos se comuniquem entre si. Os endereços IP privados são reservados para uso privado e não podem ser usados ​​pela Internet pública.

Existe uma [RFC (RFC 1918)](https://www.rfc-editor.org/rfc/rfc1918) que define os endereços IP privados.

| De          | Até            |
| ----------- | -------------- |
| 10.0.0.0    | 10.255.255.255 |
| 172.16.0.0  | 172.31.255.255 |
| 192.168.0.0 | 192.168.255.25 |

## IP público

Endereços IP públicos são endereços IP que são usados ​​para acessar a Internet. Os endereços IP públicos são atribuídos pela Internet Assigned Numbers Authority [IANA](https://www.iana.org/assignments/ipv4-address-space/ipv4-address-space.xhtml) e são registrados em um banco de dados público conhecido como Registro de Internet Regional (RIR).

Sendo eles:

| De           | Até             |
| ------------ | --------------- |
| 1.0.0.0      | 9.255.255.255   |
| 11.0.0.0     | 126.255.255.255 |
| 129.0.0.0    | 169.253.255.255 |
| 169.255.0.0  | 172.15.255.255  |
| 172.32.0.0   | 191.0.1.255     |
| 192.0.3.0    | 192.88.98.255   |
| 192.88.100.0 | 192.167.255.255 |
| 192.169.0.0  | 198.17.255.255  |
| 198.20.0.0   | 223.255.255.255 |

## IP local

Endereços IP locais são endereços IP que são usados ​​para acessar a Internet. Os endereços IP locais são atribuídos pela IANA e são registrados em um banco de dados público conhecido como Registro de Internet Regional (RIR).
Também são conhecidos como loopback ou localhost

| De        | Até             |
| --------- | --------------- |
| 127.0.0.0 | 127.255.255.255 |

## IP link-local

Endereços IP link-local são aqueles que o `host` pode automaticamente configurar uma interface com um endereço IPv4. Esse é especialmente valioso em ambientes onde nenhuma outra configuração mecanismo está disponível. [RFC3927](https://www.rfc-editor.org/rfc/rfc3927.html)

> São geralmente atribuídos automaticamente pelo sistema operacional, quando você não tem um servidor DHCP disponível ou mesmo em um `crossover`.

| De          | Até             |
| ----------- | --------------- |
| 169.254.0.0 | 169.254.255.255 |

## Referências

[https://www.avg.com/pt/signal/public-vs-private-ip-address#private-ip-ranges](https://www.avg.com/pt/signal/public-vs-private-ip-address#private-ip-ranges)
