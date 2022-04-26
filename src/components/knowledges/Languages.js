import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages : [
            {id : 1, value : "Javascript", xp : 0.95},
            {id : 2, value :"NodeJS", xp : 0.95},
            {id : 3, value : "HTML/CSS", xp : 1.95},
            {id : 4, value : "Flutter", xp : 0.2}
        ],
        frameworks : [
            {id : 1, value : "React", xp : 0.95},
            {id : 2, value : "Redux", xp : 0.2},
            {id : 3, value :"SASS", xp : 1.95}
        ]
    }
    render() {
        let {languages, frameworks} = this.state;

        return (
            <div className='languagesFrameworks'>
                <ProgressBar 
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <ProgressBar
                    languages={frameworks}
                    title="frameworks & bibliothèques"
                    className="frameworksDisplay"
                />
            </div>
        );
    }
}

export default Languages;