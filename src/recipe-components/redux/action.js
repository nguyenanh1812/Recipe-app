export const handleAdd = (payload) => {

  return {
      type: "add",
      payload: payload,
    };
  };
  
  export const handleDelete = (payload) => {
    return {
      type: "delete",
      payload: payload,
    };
  };
  
  export const handleUpdate = (payload) => {
    return {
      type: "update",
      payload: payload,
    };
  };
