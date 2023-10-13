using multicast;

var xBuilder = Host.CreateDefaultBuilder(args)
    .ConfigureHostConfiguration(p => p.AddCommandLine(args))
    .ConfigureServices(services =>
    {
        services.AddHostedService<UdpServer>();
    })
    .Build();

xBuilder.Run();