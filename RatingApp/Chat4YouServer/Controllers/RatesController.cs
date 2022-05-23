#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Chat4YouServer.Data;
using Chat4YouServer.Models;

namespace Chat4YouServer.Controllers
{
    public class RatesController : Controller
    {
        private readonly Chat4YouServerContext _context;

        public RatesController()
        {
            _context = new Chat4YouServerContext();
        }

        // GET: Rates
        public async Task<IActionResult> Index()
        {
            GetAvg();
            return View(await _context.Rate.ToListAsync());
        }
        
        public async Task<IActionResult> Search(string query)
        {
            if(query == null)
            {
                return PartialView(await _context.Rate.ToListAsync());
            }
            var q=_context.Rate.Where(rate=>rate.Name.Contains(query)||
                                            rate.Feedback.Contains(query));
            return PartialView(await q.ToListAsync());
        }

        // GET: Rates/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var rate = await _context.Rate
                .FirstOrDefaultAsync(m => m.Id == id);
            if (rate == null)
            {
                return NotFound();
            }

            return View(rate);
        }

        // GET: Rates/Create
        public ActionResult Create()
        {
            //var users = await _context.User.ToListAsync();
            //Doesnt work here somehow, cant find User model.
            //ViewBag.Users = new SelectList(users);
            return View();
        }

        // POST: Rates/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Stars,Feedback,Name")] Rate rate)
        {
            //define date time.
            rate.Created = DateTime.Now;
            //Actually its better to have it with Id, need to find it later
            if (ModelState.IsValid)
            {
                _context.Add(rate);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            GetAvg();
            return View(rate);
        }

        // GET: Rates/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var rate = await _context.Rate.FindAsync(id);
            if (rate == null)
            {
                return NotFound();
            }
            GetAvg();
            return View(rate);
        }


        // POST: Rates/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id,string FeedBack,int stars)
        {
            Rate rate = _context.Rate.Find(id);
            if(rate == null)
            {
                return NotFound();
            }
            rate.Feedback = FeedBack;
            rate.Stars = stars;
            rate.Created = DateTime.Now;
            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(rate);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!RateExists(rate.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                GetAvg();
                return RedirectToAction(nameof(Index));
            }
            return View(rate);
        }

        // GET: Rates/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var rate = await _context.Rate
                .FirstOrDefaultAsync(m => m.Id == id);
            if (rate == null)
            {
                return NotFound();
            }
            GetAvg();
            return View(rate);
        }

        // POST: Rates/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var rate = await _context.Rate.FindAsync(id);
            _context.Rate.Remove(rate);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool RateExists(int id)
        {
            return _context.Rate.Any(e => e.Id == id);

        }
        public void GetAvg()
        {
            System.Nullable<double> avg;
            try { 
            avg=(from col in _context.Rate 
                                         select col.Stars)
                                         .Average();
            }
            catch (Exception ex)
            {
                avg=0;
            }
            ViewBag.Avg = String.Format("{0:0.0}", avg); ;
        }
    }
    
}
