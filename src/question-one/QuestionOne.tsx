import React, { useState } from "react"
import { IDataService, Job } from '../common/types'
import { JobTable } from "../components/jobtable/JobTable"

import { SectionGroup } from "../components/section/SectionGroup"
import { SectionPanel } from "../components/section/SectionPanel"

import "./QuestionOne.css"

export const QuestionOne: React.FC<{ service: IDataService }> = ({service}) => {

  const [listJob, setListJob]  = useState<Pick<Job, 'name' | 'start' | 'end'>[]>([]);
  
  const search = (e : any) => {
    if (e.target.value && e.target.value.length >= 3){
      service.getJobsWithSearchTerm(e.target.value).then(a => setListJob(a))
    } else if (e.target.value === ''){
      setListJob([])
    }
  }
  return (
    <SectionGroup>
      <SectionPanel>
        <label>Search</label>
        <input aria-label="Search" placeholder="Search..." onChange={search}></input>
      </SectionPanel>
      <JobTable job={listJob}></JobTable>
    </SectionGroup>
  )
}
