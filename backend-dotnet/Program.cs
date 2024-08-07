var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

var serverResponse = new List<string> {
  "Server 3",
  "Transparency", "Courage", "Quality", "Fun"
};

app.MapGet("/api/codecool", () => serverResponse);
app.MapFallbackToFile("/index.html");
app.Run();
