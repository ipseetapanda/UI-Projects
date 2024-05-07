import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  taskObj: Task = new Task()
  taskArr: Task[] = [];

  addTaskValue: string = '';  //here we are stroing the value which will get from user input 
  editTaskValue: string = '';
  constructor(private CrudService : CrudService) { }

  ngOnInit(): void {
    this.editTaskValue = '';
    this.addTaskValue = '';
    this.taskObj = new Task();
    this.taskArr = []
    this.getAllTask();
  }

  getAllTask(){
    this.CrudService.getAllTask().subscribe(res => {
      this.taskArr = res;
      console.log("after edit")

    }, err=> {
      alert('Unable to get List of all task ')
    })
  }

  addTask(){
    this.taskObj.task_name = this.addTaskValue 
    this.CrudService.addTask(this.taskObj).subscribe(res => {
      this.ngOnInit();
      this.addTaskValue ='';
    }, err=> {
      alert(err);
    })
  }

  editTask() {
    this.taskObj.task_name = this.editTaskValue; 
    this.CrudService.editTask(this.taskObj).subscribe(res => {
      console.log("edit..k.")
      // this.taskObj.task_name = this.editTaskValue; 
      console.log("edit...")
      this.ngOnInit();
    }, err=> {
      alert("Faild to Update Task");
    })
  }

  deleteTask(eTask : Task) {
    this.CrudService.deleteTask(eTask).subscribe(res => {
      this.ngOnInit()
    }, err=> {
      alert("failed to delete task");
    })
  }

  call(eTask: Task){
    this.taskObj = eTask;
    this.editTaskValue = eTask.task_name;
    console.log("edits")
  }

}
