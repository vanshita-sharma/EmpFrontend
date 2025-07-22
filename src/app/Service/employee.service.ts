import { Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../Enviroment/enviroment";

export interface Employee {
  
  mail: string;
  name: string;
  salary : number;
  domain: string;
  
}

@Injectable({
    providedIn :'root'
})

export class EmployeeService{

    private apiurl = `${environment.apiUrl}`;
    constructor(private http : HttpClient){}

    getAllEmployee(): Observable<Employee[]>{
        return this.http.get<Employee[]>(`${this.apiurl}/GetAllEmployeesFunction?`)
    }

    getEmployeeById(id : number): Observable<Employee[]>{
        return this.http.get<Employee[]>(`${this.apiurl}/${id}`);
    }

    addEmployee(emp :Employee) : Observable<Employee>{
        return this.http.post<Employee>(`${this.apiurl}/employees`, emp);
    }

    deleteEmployee(mail : string):Observable<any>{
        return this.http.delete(`${this.apiurl}/employees/${mail}`);
    }
}