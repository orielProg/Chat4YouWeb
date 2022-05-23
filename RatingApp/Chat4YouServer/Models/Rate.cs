using System.ComponentModel.DataAnnotations;

namespace Chat4YouServer.Models
{
    public class Rate
    {
        public int Id { get; set; }
        public int Stars { get; set; }

        public string Feedback { get; set; }

        [Required]
        public string Name { get; set; }

        public DateTime Created { get; set; }

    }
}
