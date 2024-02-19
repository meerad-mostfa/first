
import style from './Footer.module.css'; 

function Footer ({count,age  }) {
    
  
  return (
    <div className={style.bg}>
    <h2>{age}</h2>
    <h1>{count}</h1>
    </div>
  )
};

export default Footer 
