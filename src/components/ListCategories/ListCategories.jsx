import React from 'react'
import CategoryCard from '../categoryCard/categoryCard'
import './ListCategories.scss'

const ListCategories = (props)=>{
    return(
        <div className="notes">
            <div className="container">
            {
                        props.categories.map(category=>(
                            <CategoryCard key={category['$id']} title={category.title} count={category.count} id={category['$id']} />
                        ))
                    }
            </div>
        </div>
    )
}

export default ListCategories;