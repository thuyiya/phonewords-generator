import type { Router } from "express";
const { ConvertorController } =  require('../handlers/converter.handler')
const { ConvertorValidator } =  require('../handlers/converter.validator')
const { ROUTES } = require('../constants')

const ConvertorRouter = (router: Router) => {
  router.route(ROUTES.CONVERTOR).get(ConvertorValidator, ConvertorController);
};

export default ConvertorRouter;