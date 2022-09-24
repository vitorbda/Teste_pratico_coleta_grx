using Microsoft.AspNetCore.Mvc;

namespace ColetaGRX.Controllers
{
    public class ColetaController : Controller
    {
        public IActionResult Resultados()
        {
            return View();
        }

        public IActionResult Coleta()
        {
            return View();
        }

        public IActionResult Tabela()
        {
            return View();
        }
    }
}
