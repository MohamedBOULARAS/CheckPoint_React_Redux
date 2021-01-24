let nextTodiid = 0;

export const addtodo = text => (
    {type: 'ADD_TODO', 
    id: nextTodiid++,
    text}
);

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}