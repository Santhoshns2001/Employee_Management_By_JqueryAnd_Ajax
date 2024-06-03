using Microsoft.AspNetCore.Mvc;

namespace Employee_Pay_Roll.Controllers
{
    public class EmployeeController : Controller
    {

        public IActionResult Index()
        {
            return View();
        }


    }
}
