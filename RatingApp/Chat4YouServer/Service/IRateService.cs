using Chat4YouServer.Models;

namespace Chat4YouServer.Service
{
    public interface IRateService
    {
        public Rate Get(int id);

        public List<Rate> GetAll();

        public void Create(int Stars, string FeedBack, string Name);

        public void Edit(int Stars, string FeedBack);

        public void Delete(int id);

        public bool Exists(int id);
    }
}
