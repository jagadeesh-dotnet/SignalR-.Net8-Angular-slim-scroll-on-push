using Microsoft.AspNetCore.SignalR;

namespace API.Hubs
{
    public class BroadcastHub:Hub<IHubClient>
    {
        public string GetConnectionId()=>Context.ConnectionId;
    }
}
