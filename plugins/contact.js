import contact from 'imi-enrichment-contact';

export default (ctx, inject) => {
  ctx.$contact = contact;
  inject('contact', contact);
};
