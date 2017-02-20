using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Angrid_Api.Models
{
    public partial class Base_testContext : DbContext
    {
        public virtual DbSet<Utilisateur> Utilisateur { get; set; }

        // Unable to generate entity type for table 'dbo.Table_test'. Please see the warning messages.

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            #warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
            optionsBuilder.UseSqlServer(@"Server=servertest1234.database.windows.net;Database=Base_test;User Id=user_admin;Password = e4g5G2ce");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Utilisateur>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Age).HasColumnName("age");

                entity.Property(e => e.Nom)
                    .HasColumnName("nom")
                    .HasColumnType("varchar(100)");

                entity.Property(e => e.Prenom)
                    .HasColumnName("prenom")
                    .HasColumnType("varchar(100)");

                entity.Property(e => e.Ville)
                    .HasColumnName("ville")
                    .HasColumnType("varchar(255)");
            });
        }
    }
}