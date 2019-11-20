import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Task, Stage, DeploynewModel} from './step-task-node.model';
import {FormArray} from '@angular/forms';

@Component({
  selector: 'app-step-task-node',
  templateUrl: './step-task-node.component.html',
  styleUrls: ['./step-task-node.component.less'],
  providers: [DeploynewModel],
})
export class StepTaskNodeComponent implements OnInit {
  public tittle = '步骤-任务显示卡';
  public validateForm: FormGroup;

  public _disabled = false;
  //步骤
  public fmModelStages = [];
  public initTask = [{
    taskName: null,
    taskStatus: null,
    taskContent: null,
    taskNumber: 1
  }];

  public initStep = [{
    stageName: null,
    stageNumber: 1,
    flag: true,
    stageTaskList: this.initTask
  }];

  //步骤      end

  constructor(private fb: FormBuilder,
              private model: DeploynewModel) {
    this.validateForm = this.fb.group({
      Stages: new FormArray([])
    });
  }

  ngOnInit() {
    this.init_data();
    this.initModel();
  }

  init_data() {
    this.model.Stages = [
      new Stage()
    ];
  }

  // 选择步骤
  chooseStyle(value) {
    this.model.Stages.forEach((data, i) => {
      if (value === i) {
        data.flag = true;
      } else {
        data.flag = false;
      }
    })
  }

  //删除步骤
  deleteStage(i) {
    this.model.Stages.splice(i, 1);
    if (i - 1 === 0 || i - 1 > 0) {
      this.model.Stages[i - 1].flag = true;
    } else {
      return;
    }
    this.createModel();
  }

  // 删除任务
  colse(num1, num2) {
    this.model.Stages[num1].stageTaskList.splice(num2, 1);
    this.createModel();
  }

  // 增加步骤
  onAddStep() {
    this.model.Stages.forEach((data, i) => {
      data.flag = false;
    });

    let index = this.model.Stages.length - 1;

    const oneTask = {
      taskName: null,
      taskStatus: null,
      taskContent: null,
      taskNumber: 1
    };

    const oneStep = {
      stageName: null,
      stageNumber: index + 1,
      flag: true,
      stageTaskList: []
    };

    oneStep.stageTaskList.push(oneTask);
    this.model.Stages.push(oneStep);
    this.createModel();

  }

  // 添加任务
  addTask(index) {
    this.model.Stages.forEach((data, i) => {
      data.flag = false;
      if (index === i) {
        data.flag = true;
        let num = data.stageTaskList.length - 1;

        const oneTask = new Task();
        oneTask.taskName = null;
        oneTask.taskStatus = null;
        oneTask.taskContent = null;
        oneTask.taskNumber = num + 1;
        data.stageTaskList.push(oneTask);
      }
    });
    this.createModel();
  }

  // 步骤换位
  stageChange(value) {
    let num;
    this.model.Stages.forEach((data, i) => {
      if (data.flag === true) {
        num = i;
      }
    });

    if (value === 'up') {
      let tem = this.model.Stages[num];
      this.model.Stages[num] = this.model.Stages[num - 1];
      this.model.Stages[num - 1] = tem;
    } else {
      let tmp = this.model.Stages[num];
      this.model.Stages[num] = this.model.Stages[num + 1];
      this.model.Stages[num + 1] = tmp;
    }
    this.createModel();
  }

  // 任务换位
  taskChange(value, num1, num2) {
    if (value === 'up') {
      let tem = this.model.Stages[num1].stageTaskList[num2];
      this.model.Stages[num1].stageTaskList[num2] = this.model.Stages[num1].stageTaskList[num2 - 1];
      this.model.Stages[num1].stageTaskList[num2 - 1] = tem;
    } else {
      let tmp = this.model.Stages[num1].stageTaskList[num2];
      this.model.Stages[num1].stageTaskList[num2] = this.model.Stages[num1].stageTaskList[num2 + 1];
      this.model.Stages[num1].stageTaskList[num2 + 1] = tmp;
    }
    this.createModel();
  }

  initModel() {
    const objectFGs = [];
    const stepList = [];
    this.initStep.forEach((data, num) => {
      const list = [];
      data.stageTaskList.forEach((p, i) => {
        // 任务
        const taskObj = new Task();
        taskObj.taskName = p.taskName;
        taskObj.taskStatus = p.taskStatus;
        taskObj.taskContent = p.taskContent;
        taskObj.taskNumber = i + 1;
        list.push(taskObj);

      });
      const obj = new Stage();
      obj.stageName = data.stageName;
      obj.stageNumber = num + 1;
      obj.flag = data.flag;
      obj.stageTaskList = list;
      stepList.push(obj);
    });

    this.model.Stages = stepList;
    this.model.Stages.map((params, index) => {
      const Stages = {
        stageName: params.stageName,
        stageNumber: index + 1,
        stageTaskList: params.stageTaskList
      };
      objectFGs.push(Stages);
    });

    const objectFormArray = this.fb.array(objectFGs);
    this.validateForm.setControl('Stages', objectFormArray);
    this.validateForm.patchValue({Stages: this.model.Stages});

    this.fmModelStages = this.model.Stages;
    console.log(this.model.Stages);
  }

  createModel() {
    const objectFGs = [];
    const stepList = [];
    this.model.Stages.forEach((data, num) => {
      const list = [];
      data.stageTaskList.forEach((p, i) => {
        // 任务
        const taskObj = new Task();
        taskObj.taskName = p.taskName;
        taskObj.taskStatus = p.taskStatus;
        taskObj.taskContent = p.taskContent;
        taskObj.taskNumber = i + 1;
        list.push(taskObj);

      });
      const obj = new Stage();
      obj.stageName = data.stageName;
      obj.stageNumber = num + 1;
      obj.flag = data.flag;
      obj.stageTaskList = list;
      stepList.push(obj);
    });

    this.model.Stages = stepList;
    this.model.Stages.map((params, index) => {
      const Stages = {
        stageName: params.stageName,
        stageNumber: index + 1,
        stageTaskList: params.stageTaskList
      };
      objectFGs.push(Stages);
    });

    const objectFormArray = this.fb.array(objectFGs);
    this.validateForm.setControl('Stages', objectFormArray);
    this.validateForm.patchValue({Stages: this.model.Stages});

    this.fmModelStages = this.model.Stages;
    // console.log(this.model.Stages);
  }


//  步骤 end
}
