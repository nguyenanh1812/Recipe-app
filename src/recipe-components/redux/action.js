export const handleAdd = (payload) => ({
  type: 'add',
  payload: payload,
});

export const handleDelete = (payload) => ({
  type: 'delete',
  payload: payload,
});

export const handleUpdate = (payload) => ({
  type: 'update',
  payload: payload,
});

export const handleGetRecipes = (payload) => ({
  type: 'get_recipes',
  payload: payload,
});
