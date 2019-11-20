import {Injectable} from "@angular/core";


export class Task{
  taskName:string;
  taskStatus:any;
  taskContent:string;
  taskNumber:number;
}

export class Stage{
  stageName:string;
  stageNumber:number;
  flag:boolean;
  stageTaskList:Task[];
}

@Injectable()
export class DeploynewModel {
  public Stages: Stage[];
}

