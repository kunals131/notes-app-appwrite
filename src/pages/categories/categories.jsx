import React from 'react'

import './categories.scss'
import CategoryCard from '../../components/categoryCard/categoryCard';
import { maxWidth } from '@mui/system';

export default function CategoriesPage(props) {
    return(
        <div className='categories'>
            <div className="container">
                <h1 className='heading'>Categories</h1>
                <div className="container-inner">
                    {
                        props.categories.map(category=>(
                            <CategoryCard title={category.title} count={category.count} />
                        ))
                    }
                </div>
                
            </div>
        </div>
    );
}