import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline 
      lineColor={'DarkGray'}>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(246, 255, 248)', color: 'rgb(246, 255, 248)' }}
        contentArrowStyle={{ borderRight: '7px solid rgb(246, 255, 248)' }}
        date="2021 - current"
        iconStyle={{ background: 'rgb(246, 255, 248)', color: 'rgb(246, 255, 248)' }}
        icon = {<SchoolIcon />}
        >
        <h3 className="vertical-timeline-element-title">Codecademy</h3>
        <h4 className="vertical-timeline-element-subtitle">Career Pathway</h4>
        <p> Front-End Engineer</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(246, 255, 248)', color: 'rgb(246, 255, 248)' }}
        contentArrowStyle={{ borderRight: '7px solid rgb(246, 255, 248)' }}
        date="2021 - 2022"
        iconStyle={{ background: 'rgb(246, 255, 248)', color: 'rgb(246, 255, 248)' }}
        icon = {<SchoolIcon />}
        >
        <h3 className="vertical-timeline-element-title">Codecademy</h3>
        <h4 className="vertical-timeline-element-subtitle">Certificates</h4>
        <p> Learn JavaScript, Introduction to UI and UX Design, Learn Intermediate JavaScript, Learn Python 3, Learn CSS</p>
        </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(246, 255, 248)', color: 'rgb(246, 255, 248)' }}
        contentArrowStyle={{ borderRight: '7px solid rgb(246, 255, 248)' }}
        
        date="2019 - 2022"
        iconStyle={{ background: 'rgb(246, 255, 248)', color: 'rgb(246, 255, 248)' }}
        icon = {<SchoolIcon />}
        >
        <h3 className="vertical-timeline-element-title">Sports Therapy BSc</h3>
        <h4 className="vertical-timeline-element-subtitle">London Metropolitan University</h4>
        <p>
          Predicted 1st, Time management, Visual Design, Team Work, Data Analysis
        </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(246, 255, 248)', color: 'rgb(246, 255, 248)' }}
        date="2019 - 2021"
        iconStyle={{  background: 'rgb(246, 255, 248)', color: 'rgb(246, 255, 248)'}}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Personal Assistant / Social Media Coordinator</h3>
        <h4 className="vertical-timeline-element-subtitle">Crossfit Central London</h4>
        <p>
          Problem Solving, Visual Design, SEO, Online Marketing, Customer Service
        </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(246, 255, 248)', color: 'rgb(246, 255, 248)' }}
          date="2019 - 2020"
          iconStyle={{  background: 'rgb(246, 255, 248)', color: 'rgb(246, 255, 248)'}}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Coach</h3>
          <h4 className="vertical-timeline-element-subtitle">Crossfit Central London</h4>
          <p>
            Team leading, Problem Solving, Customer Service
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience