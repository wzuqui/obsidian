using System.Net;
using System.Net.Sockets;
using System.Text;

var xBuilder = Host.CreateDefaultBuilder(args)
    .ConfigureServices(services =>
    {
        services.AddHostedService<UdpServer>();
    })
    .Build();

xBuilder.Run();

file class UdpServer : BackgroundService
{
    private readonly ILogger<UdpServer> _logger;

    public UdpServer(ILogger<UdpServer> logger)
    {
        _logger = logger;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        var xUdpClient = new UdpClient(12345);
        var xRemoteIpEndPoint = new IPEndPoint(IPAddress.Broadcast, 0);
        // var xRemoteIpEndPoint = new IPEndPoint(IPAddress.Parse("192.168.1.255"), 0);

        while (!stoppingToken.IsCancellationRequested)
        {
            _logger.LogInformation("Aguardando pacote...");
            var xReceiveBytes = xUdpClient.Receive(ref xRemoteIpEndPoint);
            var xReceiveString = Encoding.ASCII.GetString(xReceiveBytes);
            _logger.LogInformation("ReceiveString: {String}", xReceiveString);
        }

        await Task.CompletedTask;
    }
}