 using Employee_Pay_Roll.Models;
using Microsoft.EntityFrameworkCore;

namespace Employee_Pay_Roll.Context
{
    public class EmployeeContext :DbContext
    {
        public EmployeeContext(DbContextOptions dbcontext) : base(dbcontext) { }

        public DbSet<EmployeeModel> Employees { get; set; }
       
    }
}
