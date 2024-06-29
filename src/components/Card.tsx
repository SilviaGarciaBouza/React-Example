import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
}
function Card(props: CardProps){
    const{children} = props;

    const width = {width:'350px'}

    return(
     <div className="card" style={width}>
    <div className="card-body">
       {children}
    </div>
  </div>
)
}

interface CardBodyProps{
    title: String
    text: string

}
export function CardBody(props: CardBodyProps){
    const{title, text} = props
    return(
        //<>es como un fragment
        <>
            <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <a href="#" className="btn btn-primary">Example</a>
        </>
    )
}
export default Card;