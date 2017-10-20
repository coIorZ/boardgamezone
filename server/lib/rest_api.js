import assert from 'assert';
import pUtil from 'path';
import request from 'request';

const protocol = 'http://';
const baseUrl = 'localhost:10086/api/';

const requestREST = ({ method = 'GET', path = '', params }) => {
  const opts = {
    url  : protocol + pUtil.join(baseUrl, path),
    json : true,
    method,
  };

  if(params != null) {
    if (method.toUpperCase() === 'GET') {
      opts.qs = params;
    } else {
      opts.form = params;
    }
  }

  return new Promise((resolve, reject) =>
    request(opts, (error, response, body) => {
      if (error) return reject(error);
      console.log(body);
      console.log(response);
      if (response.statusCode === 200) return resolve(body);
      else reject(body);
    }));
};

const create = (collection, model) => requestREST({
  method : 'POST',
  path   : collection,
  params : model,
});

const find = (collection, filter) => requestREST({
  path   : `${collection}/find`,
  params : {
    filter: JSON.stringify(filter),
  },
});

const findOne = (collection, filter) => requestREST({
  path   : `${collection}/findOne`,
  params : {
    filter: JSON.stringify(filter),
  },
});

const update = (collection, model) => {
  assert(model && (model.id != null), '[restApi/update] should have a valid "id" property');
  return requestREST({
    method : 'PUT',
    path   : `${collection}/${model.id}`,
    params : model,
  });
};

const remove = (collection, id) => requestREST({
  method : 'DELETE',
  path   : `${collection}/${id}`,
});

export default collection => ({
  create  : create.bind(null, collection),
  find    : find.bind(null, collection),
  findOne : findOne.bind(null, collection),
  update  : update.bind(null, collection),
  remove  : remove.bind(null, collection),
});