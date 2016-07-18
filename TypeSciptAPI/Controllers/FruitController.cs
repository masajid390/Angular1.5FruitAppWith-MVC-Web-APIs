using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace TypeSciptAPI.Controllers
{
    public class Fruit
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Color { get; set; }
    }

    public class FruitController : ApiController
    {
        private static List<Fruit> fruits = new List<Fruit> {
            new Fruit {Id=1, Color="Yellow", Name="Mango" }
        };


        // GET: api/Fruit
        public IEnumerable<string> Get(int id)
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Fruit/5
        public List<Fruit> Get()
        {
            return fruits;
        }

        // POST: api/Fruit
        public void Post(Fruit fruit)
        {
            fruits.Add(fruit);
        }

        private Fruit GetFruit(int id)
        {
            return fruits.Single(f => f.Id == id);
        }

        // PUT: api/Fruit/5
        public void Put(Fruit fruit)
        {
            var fr = GetFruit(fruit.Id);
            fr.Color = fruit.Color;
            fr.Name = fruit.Name;
        }

        // DELETE: api/Fruit/5
        public void Delete(int id)
        {
            fruits.RemoveAll(f => f.Id == id);
        }
    }
}
