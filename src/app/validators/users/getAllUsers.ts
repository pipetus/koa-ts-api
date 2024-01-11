import { Joi } from 'koa-joi-router';

export const validateGetAllUsers = {
  // header: {},
  // body: {},
  // params: {},
  query: {
    page: Joi.number().min(1).max(100).required(),
  },
};
