import * as Yup from 'yup';

export const modalValidations = Yup.object({
  community: Yup.string().required(),
  title: Yup.string().required(),
  description: Yup.string().required(),
}).required();

