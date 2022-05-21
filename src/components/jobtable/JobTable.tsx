import React, { useState } from "react";
import { Job } from "../../common/types";
import './JobTable.css';

export const JobTable: React.FC<{job: Pick<Job, 'name' | 'start' | 'end'>[]}> = ({job}) => {

    const convertDate = (date: string) => {
        let date1 = new Date(date);
        return (date1.toString().substring(17, 21)+ ' ' + date1.toString().substring(4,15));
    }

    return(
        <>
            <div className="job-table">
                <div className="job-list">
                    <p className="list-name">Name</p>
                    <p className="list-name">Date Start</p>
                    <p className="list-name">Date End</p>
                    <p className="list-name">Contact ID</p>
                </div>
                {job.map((item:any) => 
                    <div key={item.id} className="job-list">
                        <p className="list-date">{item.name}</p>
                        <p className="list-date">{convertDate(item.start)}</p>
                        <p className="list-date">{convertDate(item.end)}</p>
                        <p className="list-date">{item.contactID}</p>
                    </div>
                )}
            </div>
        </>
    )
}