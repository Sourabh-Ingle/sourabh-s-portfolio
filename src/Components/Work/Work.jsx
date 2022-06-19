import React from 'react';

import { work } from './../../data'

function Work() {
    return (
        <section className='work'>
            {
                work.map((items) => {
                    const { id, designation, company, year, jobDesc } = items;
                    return (
                        <div className="main-edication" key={id}>
                            <h3 className='work-h3 my1 '>{designation}</h3>
                            <h5 className='work-company'>{company}</h5>
                            <h5 className='work-year'>{year}</h5>
                            {jobDesc.map((items)=>{
                                return(
                                    <p className='work-desc'>{items}</p>
                                )
                            })

                            }
                           

                        </div>
                    )
                })
            }

        </section>
    )
}

export default Work;