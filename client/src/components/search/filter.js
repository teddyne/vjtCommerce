import React from 'react'
import { filters } from '../../constants/data'
import _ from 'lodash'

import './scss/_filter.scss'

const Filter = () => {
    const renderFilterItem = (item) => {
        switch(item.uiType) {
            case 'link': {
                return _.map(item.options, (option) => {
                    return (
                        <div>{option}</div>
                    )
                })
            }
            case 'checkbox': {
                return _.map(item.options, (option) => {
                    return (
                        <div>{option}</div>
                    )
                })
            }
            case 'selectTag': {
                return _.map(item.options, (option) => {
                    return (
                        <div>{option}</div>
                    )
                })
            }
            default: return null
        }
    }

    return (
        <div className='filter'>
            <div className='filter-content'>
                {
                    _.map(filters, (filter) => {
                        return (
                            <div className='filter-section'>
                                <div className='filter-name'>{filter.name}</div>
                                <div className='filter-option'>
                                    {renderFilterItem(filter)}
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}
export default Filter