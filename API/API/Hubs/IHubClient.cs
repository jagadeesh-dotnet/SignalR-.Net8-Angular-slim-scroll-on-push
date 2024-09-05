namespace API.Hubs
{
    public interface IHubClient
    {
        Task BroadcastMessage();
        Task BoroadcastNotification(dynamic data);
    }
}
