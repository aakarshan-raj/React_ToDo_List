
export const Showlist = (props)=>{
    return(
      <div>
        <h1 style={{color:props.isGreen ? 'green' :'black' , textDecoration:props.isGreen?'line-through':'none' }}>{props.id}. {props.task}
          <button onClick={()=>props.delete_function(props.id)}>
            x
          </button>
          <button onClick={()=>props.complete_function(props.id)}>
            -
          </button>
        </h1> 
      </div> 
    );
  }

