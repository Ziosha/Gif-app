import React, {useState} from 'react';
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp= ()=>{
    
    // const categories =['One punch','Samurai','Dragon'];
    const [categories, setcategories] = useState(['Dragon ball'])

    // const handleadd= ()=>{

    //     setcategories ([...categories,'HunterX']);
    //     // setcategories (cats=>[...cats,'HunterX']);
    // }



 return   (<>
 <h1 classname="title">--Gif--</h1> 
 <AddCategory setcategories={setcategories}/>
<hr ClassName="hr"/>


<ol>
    {
        categories.map((category)=>(
        <GifGrid 
            key={category}
            category={category}
        />    
        ))

    }


</ol>




 </>)}