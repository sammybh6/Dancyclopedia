import React from "react"
import { Link } from "react-router-dom"
import HomeStyles from "./Home.module.css"
export default function Home(props)
{
    const [formId, setFormId]=React.useState("Jazz")
    function findArrayElementById(array,id ) {
        return array.find((element) => {
            return element.id === id;
    })}
    function handleClick()
    {
        location.reload();
    }
    const formStyles=props.forms.map((ele) => {
        var route="/"+ele.id
        return  (
                
                <div className="tile">
                    <img src={ele.form.img} className="tileimage" />
                    <button onClick={handleClick} >
                    <Link to={route} style={{ color: "black", textDecoration: "none" }}>
                        {ele.form.name}
                    </Link>
                    </button>
                </div>
    )})



    const formName=(findArrayElementById(props.forms, formId)).form.name
    return(
        <>
            <div className={HomeStyles.home}>
                <img src="../images/Screenshot_2022-10-28_at_12.57.03_AM-removebg-preview.png"/>
            </div>
            <div className="tilepage">
                {formStyles}
            </div>
        </>
    )
}