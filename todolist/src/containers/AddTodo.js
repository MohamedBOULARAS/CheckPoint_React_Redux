import React from 'react';
import { connect } from 'react-redux';
import { addtodo } from '../actions'

const AddTodo = ({dispatch}) => {
    let input;  
    return (
        <div>
            <form
                            onsubmit={
                                e => {
                                    e.preventDefault();
            
                                    if (!input.calue.trim()) {
                                    return  
                                    }
                                    dispatch(addtodo(input.value));
                                    input.value='';
                                }
                            }
            >

                <input type="text" ref={el => (input = el)} />
                <button type='submit'>Add Todo</button>
            </form>
        </div>
    );
}

export default AddTodo