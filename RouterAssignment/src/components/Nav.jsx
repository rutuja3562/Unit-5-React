import { Link } from "react-router-dom"

export const Nav=()=>{
    const nav =[
        {title:"Home", to:"/"},
        {title :"Product", to:"/product"},
        {title:"User",to:"/users"},
    ]
    return (
        <>
        {nav.map((product,i)=>{
           return <Link key={i} to={product.to} style ={{margin:"5px"}}> { product.title}</Link>
        })}
        </>
    )
}