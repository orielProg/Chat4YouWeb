using Microsoft.AspNetCore.SignalR;
using System.Collections;
using System.Collections.Concurrent;

namespace webAPI.Hubs
{
    public class ChatHub : Hub
    {
        public static ConcurrentDictionary<string, string> Connections = new ConcurrentDictionary<string, string>();

        public void registerConId(string userID)
        {
            if (Connections.ContainsKey(userID))
                Connections[userID] = Context.ConnectionId;
            else
                Connections.TryAdd(userID, Context.ConnectionId);
        }
    }
}