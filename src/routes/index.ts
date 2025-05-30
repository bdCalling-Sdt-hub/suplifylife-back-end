import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { AdminRoutes } from '../modules/admin/admin.routes';
import { AttachmentRoutes } from '../modules/attachments/attachment.route';
import { NotificationRoutes } from '../modules/notification/notification.routes';
import { SettingsRoutes } from '../modules/settings/settings.routes';
import {SuplifyPartnerRoute} from "../modules/suplifyPartner/suplifyPartner.route"
import { TrainingProgramRoute } from '../modules/_training/trainingProgram/trainingProgram.route';
import { SubscriptionRoute } from '../modules/_subscription/subscription/subscription.route';
import { ConversationRoute } from '../modules/_chatting/conversation/conversation.route';
import { MessageRoute } from '../modules/_chatting/message/message.route';

// import { ChatRoutes } from '../modules/chat/chat.routes';
// import { MessageRoutes } from '../modules/message/message.routes';
const router = express.Router();

const apiRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/admin',
    route: AdminRoutes,
  },

  ////////////////////// Created By Mohammad Sheakh

  {
    path: '/settings',
    route: SettingsRoutes,
  },
  {
    path: '/suplifyPartner',
    route: SuplifyPartnerRoute,
  },

  {
    path: '/trainingProgram',
    route: TrainingProgramRoute,
  },
  {
    path: '/subscription',
    route: SubscriptionRoute,
  },
  {
    path: '/conversation',
    route: ConversationRoute,
  },

  {
    path: '/attachment',
    route: AttachmentRoutes,
  },
  {
    path: '/activity',
    route: NotificationRoutes,
  },
  {
    path: '/message',
    route: MessageRoute,
  }
];

apiRoutes.forEach(route => router.use(route.path, route.route));

export default router;
