import React from 'react'

import './categories.scss'
import CategoryCard from '../../components/categoryCard/categoryCard';
import { maxWidth } from '@mui/system';
import NewCategory from '../../components/newCategory/newCategory';
import ListCategories from '../../components/ListCategories/ListCategories';

const buttonStyle = {
    display : 'flex',
    justifyContent : 'center',
    marginTop : '1rem',
    marginBottom : '1rem',
    paddingBottom : '1rem'
  }
  

export default function CategoriesPage(props) {
    const [fresh,setfresh] = React.useState(false);
    return(
        <div className='categories'>
            <div className="container">
                <h1 className='heading'>Categories</h1>
                <ListCategories categories={props.categories}></ListCategories>
                <div style={buttonStyle} onClick={()=>setfresh(!fresh)}>
                    <NewCategory user = {props.user}>Create new Category</NewCategory>
                </div>

                
            </div>
        </div>
    );
}