import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from "react";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {


    const mappedOptions: any[] =
        //if-construction
        options ? options.map
                //мап принимает элемент и индекс
                ((element, index) => {
                    //то что возвращает мап
                    return <option key={index}>{element}</option>
                })
            //else construction
            : []// map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption && onChangeOption (e.currentTarget.value)
        // onChange, onChangeOption
    }

    return (
        <select onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    );
}

export default SuperSelect;
