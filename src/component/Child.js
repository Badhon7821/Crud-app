import React,{useState} from 'react'


const Child = () =>{


    const [like, setLike] = useState(0);
    const [like1, setLike1] = useState(0);

    const Love = () =>{
       setLike(like+1)
    }

    const likeA = () =>{
        setLike1(like1+1)
    }

    return(
        <div className='row text-center'>
            <div className='col-lg-12'>
            <img src='img/rasu.jpg' className='w-25 d-inline text-center'/>
            </div>
            <h2> <i className="fas fa-heart"></i> {like}</h2> 
            <h2><i class="fas fa-thumbs-up "></i> {like1}</h2>
            <table>
                <tr>
                    <td></td>
                    <td> <button  onClick={Love}><i className="fas fa-heart"></i></button><button onClick={likeA}><i class="fas fa-thumbs-up"></i></button></td>
                </tr>
            </table>
       
        
        </div>
    )
}


export default Child;