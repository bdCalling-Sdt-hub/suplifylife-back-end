import catchAsync from '../../shared/catchAsync';
import sendResponse from '../../shared/sendResponse';
import { StatusCodes } from 'http-status-codes';
import pick from '../../shared/pick';

import { SuplifyPartnerService,  } from './trainingSession.service';


import { GenericController } from '../__Generic/generic.controller';
import { SuplifyPartner } from './trainingSession.model';

// const taskService = new TaskService();
// const attachmentService = new AttachmentService();

export class SuplifyPartnerController extends GenericController<typeof SuplifyPartner> {
  constructor() {
    super(new SuplifyPartnerService(), 'SuplifyPartner');
  }
  // private taskService = new TaskService();

  // getById = catchAsync(async (req, res) => {
  //   const result = await this.taskService.getById(req.params.taskId);
  //   console.log("hit 😊😊")
  //   sendResponse(res, {
  //     code: StatusCodes.OK,
  //     data: result,
  //     message: 'Task retrieved successfully Chomolokko',
  //   });
  // });
}
