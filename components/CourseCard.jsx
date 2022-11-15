import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import courseStyles from './CourseCard.module.css'
export default function CourseCard(props) {
    const loc = useLocation();
    const path = loc.pathname;
    const plidd = props.courseId;
    const nav = useNavigate();
    console.log(loc);
    return (

        <div className='CourseCard'>
            <button onClick={() => {
                nav(path + '/video');
            }}>

                <div className={courseStyles.container}>
                    <div>
                        <img src={props.courseImg} className={courseStyles.img} />
                        <h3 className={courseStyles.title}>{props.courseName}</h3>
                        <p>{props.courseDes}</p>
                        <p>{props.courseId}</p>
                        gaytri
                    </div>

                </div></button>

                
        </div>
    )
}
