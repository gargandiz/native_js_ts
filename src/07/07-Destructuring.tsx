import React, {useState} from "react";

// type LessonType = {
//     title: string
// }

export type ManType = {
    name: string,
    age: number,
    // lessons: Array<LessonType>,
    lessons: Array<{ title: string }>,
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
}

function useMessageState(m: string) {
    return {
        message: m,
        setMessage: function (){}
    }
}

// export const ManComponent: React.FC<PropsType> = (props) => {
export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {

    // const [message, setMessage] = useMessageState("hello");
    const [message, setMessage] = useState("hello");

    // const {title} = props;
    // const {name} = props.man;
    // const {title, man: {name}} = props;
    // const {title, man, ...restProps} = props;


    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {man.name}
        </div>
        <div>
            {props.food}
        </div>
    </div>
}