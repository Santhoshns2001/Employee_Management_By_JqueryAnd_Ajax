using Employee_Pay_Roll.Context;
using Employee_Pay_Roll.Models;
using Microsoft.AspNetCore.Mvc;

namespace Employee_Pay_Roll.Controllers.Ajax
{
    public class AjaxController : Controller
    {
        private readonly EmployeeContext context;

        public AjaxController(EmployeeContext context)
        {
            this.context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

      
        public JsonResult GetAllEmployees()
        {
            List<EmployeeModel> model= context.Employees.ToList();
            return new JsonResult(model);

        }

        [HttpPost]
        public JsonResult AddEmployee(EmployeeModel employeemodel)
        {
            var employee = new EmployeeModel()
            {
                EmployeeName=employeemodel.EmployeeName,
                EmployeeAge=employeemodel.EmployeeAge,
                City=employeemodel.City,
                Address=employeemodel.Address,
                PhoneNumber=employeemodel.PhoneNumber,
                Designation=employeemodel.Designation,
                Salary=employeemodel.Salary

            };
            context.Employees.Add(employee);
            context.SaveChanges();
            return new JsonResult("data is been added");


        }

        public JsonResult Delete(int employeeId)
        {
            var data=context.Employees.Where(e => e.EmployeeId == employeeId).SingleOrDefault();
            context.Employees.Remove(data);
            context.SaveChanges();
            return new JsonResult("data deleted");
        }

    }
}
