import React,{useState} from 'react'


const Comment = (props) =>{

const [comments, setComments] = useState('');

const saveData = (e) =>{
    e.preventDefault();
    props.fetch({comments});
    setComments('');
}

    return (

    <div className='container'>
        <form onSubmit={saveData}>
    <div className="form-floating">
         <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"
         value={comments}
         onChange={(e)=>setComments(e.target.value)}
         ></textarea>
         <label for="floatingTextarea">Comments</label>
    </div>
    <button type="Submit" class="btn btn-primary">Done</button>
    </form>
    </div>
    )
}

export default Comment;