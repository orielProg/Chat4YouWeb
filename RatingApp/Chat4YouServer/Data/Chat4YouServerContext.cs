#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Chat4YouServer.Models;

namespace Chat4YouServer.Data
{
    public class Chat4YouServerContext : DbContext
    {
        
        private string connectionString = "server=localhost;port=3306;database=Items;" + "user = " + new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("DB")["user"] + "; password = " + new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("DB")["password"];

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql(connectionString, MariaDbServerVersion.AutoDetect(connectionString));
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {


            modelBuilder.Entity<Chat4YouServer.Models.Rate>().HasKey(nameof(Chat4YouServer.Models.Rate.Id));
        }

        public DbSet<Chat4YouServer.Models.Rate> Rate { get; set; }
    }
}
