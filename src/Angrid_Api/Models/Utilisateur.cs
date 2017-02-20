using System;
using System.Collections.Generic;

namespace Angrid_Api.Models
{
    public partial class Utilisateur
    {
        public int Id { get; set; }
        public string Prenom { get; set; }
        public string Nom { get; set; }
        public string Ville { get; set; }
        public int? Age { get; set; }
    }
}
