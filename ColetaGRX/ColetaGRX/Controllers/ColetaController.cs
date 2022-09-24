using Microsoft.AspNetCore.Mvc;

namespace ColetaGRX.Controllers
{
    public class ColetaController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
