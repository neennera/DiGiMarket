import React from "react";
import submitForm from "./submitForm"

export default function SearchForm (){
    return(
        <form action={submitForm}>
            name : <input className="text-black" type="text" name="name"/>
            <button>Search</button>
        </form>
    )
}