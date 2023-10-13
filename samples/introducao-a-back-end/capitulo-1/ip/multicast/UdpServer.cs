using System.Net;
using System.Net.Sockets;
using System.Text;

namespace multicast;

internal class UdpServer : BackgroundService
{
    private const int PORTA = 54321;
    private readonly ILogger<UdpServer> _logger;
    private readonly IConfiguration _configuration;

    public UdpServer(ILogger<UdpServer> logger
        , IConfiguration configuration)
    {
        _logger = logger;
        _configuration = configuration;
    }

    protected override async Task ExecuteAsync(CancellationToken pCancellationToken)
    {
        _logger.LogInformation("Digite em qual grupo multicast você quer participar (ou digite 'sair' para encerrar):");
        var xGrupo = $"{Console.ReadLine()}";

        if (xGrupo.ToLower() == "sair" || string.IsNullOrWhiteSpace(xGrupo))
            return;

        var xMulticastAddress = IPAddress.Parse("239.0.0." + xGrupo);

        var xEhEmissor = _configuration.GetValue<bool>("emissor");
        if (xEhEmissor)
            await ConfigurarEmissor(xMulticastAddress, pCancellationToken);
        else
            await ConfigurarReceptor(xMulticastAddress, pCancellationToken);
    }

    private async Task ConfigurarReceptor(IPAddress pMulticastAddress
        , CancellationToken pCancellationToken)
    {

        while (!pCancellationToken.IsCancellationRequested)
        {
            using var xReceptor = new UdpClient(PORTA);
            {
                xReceptor.JoinMulticastGroup(pMulticastAddress, IPAddress.Any);
                _logger.LogInformation("Aguardando pacote...");

                var xUdpReceiveResult = await xReceptor.ReceiveAsync(pCancellationToken);
                var xReceiveString = Encoding.UTF8.GetString(xUdpReceiveResult.Buffer);
                _logger.LogInformation("Mensagem recebida: {String}", xReceiveString);
            }
        }
    }

    private async Task ConfigurarEmissor(IPAddress pMulticastAddress
        , CancellationToken pCancellationToken)
    {
        while (!pCancellationToken.IsCancellationRequested)
        {
            using var xEmissor = new UdpClient();
            {
                xEmissor.JoinMulticastGroup(pMulticastAddress, IPAddress.Any);

                _logger.LogInformation("Digite mensagens para enviar (ou digite 'exit' para encerrar):");
                var xMensagem = $"{Console.ReadLine()}";
                if (xMensagem.ToLower() == "sair" || string.IsNullOrWhiteSpace(xMensagem))
                    break;

                var xBytes = Encoding.UTF8.GetBytes(xMensagem);
                await xEmissor.SendAsync(xBytes, xBytes.Length, $"{pMulticastAddress}", PORTA);
            }
        }
    }
}