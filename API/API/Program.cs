using API.Hubs;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(p => p.AddPolicy("corsappPolicy", builder =>
{
    builder.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader().AllowCredentials();
}));
builder.Services.AddSignalR();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
//app.MapHub<ChatHub>("/chathub");
app.UseCors("corsappPolicy");
app.MapHub<ChatHub>("/chathub");
app.UseRouting();
//app.UseEndpoints(endpoints =>
//{
//    endpoints.MapHub<ChatHub>("/chathub");
//});
app.MapControllers();

app.Run();
