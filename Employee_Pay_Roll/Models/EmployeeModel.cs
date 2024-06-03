using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Employee_Pay_Roll.Models
{
    public class EmployeeModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int EmployeeId { get; set; }

        public string EmployeeName { get; set; }

        public int EmployeeAge { get; set; }

        public string Address { get; set; }

        public string City { get; set; }

        public long PhoneNumber { get; set; }

        public string Designation { get; set; }

        public double Salary { get; set; }



    }
}
