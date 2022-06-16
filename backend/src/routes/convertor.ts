import type { Router } from "express";
const { ConvertorController } =  require('../handlers/converter.handler')
const { ROUTES } = require('../constants')

const ConvertorRouter = (router: Router) => {
  router.route(ROUTES.CONVERTOR).get(ConvertorController);
};

export default ConvertorRouter;