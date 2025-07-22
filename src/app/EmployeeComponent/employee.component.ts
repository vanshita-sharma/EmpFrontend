import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee , EmployeeService } from '../Service/employee.service';
@Component({
  selector: 'app-employee',
standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeManage{
    employees : Employee[] = [];
    newEmployee : Employee={name :'' , mail :'' ,domain :'', salary :0 };
    errorMsg : string ='';
     pageSize = 3;
currentPage = 0;

    constructor(private empservice : EmployeeService){}

    ngOnInit(): void{
        this.getEmployees();
    }
   

    get paginatedEmployees() {
       const start = this.currentPage * this.pageSize;
       return this.employees.slice(start, start + this.pageSize);
    }   

    nextPage() {
      if ((this.currentPage + 1) * this.pageSize < this.employees.length) {
        this.currentPage++;
      }
    }

    previousPage() {
      if (this.currentPage > 0) {
        this.currentPage--;
      }
    }
    getEmployees(): void{
        this.empservice.getAllEmployee().subscribe({
            next: data=> this.employees = data,
            error : err => this.errorMsg ='falied to load employee.'
        });
    }


    addEmployees(): void{
        if(!this.newEmployee.name ||!this.newEmployee.mail ||!this.newEmployee.salary) {
          alert ('Please Enter the Details');
          return};
        this.empservice.addEmployee(this.newEmployee).subscribe({
      next: data => {
        this.employees.push(data);
        this.newEmployee = {name: '', mail: '',domain:'' , salary: 0 };
        alert("Employee added successfully");
      },
      error: err => alert('Error adding employee')
    });
    }

    deleteEmployee(mail : string): void {

      if(!mail || mail === ''){
            alert ('Invalid employee ID');
            return;
        }
      if (!confirm('Are you sure you want to delete this employee?')) {
           return;
          }

      this.empservice.deleteEmployee(mail).subscribe({
        next: () => {
            console.log(`Deleted employee with ID: ${mail}`);
            alert("Employee deleted successfully");
            
        this.getEmployees();
      },
         error: err => alert('Error deleting employee')
       });
    }


}