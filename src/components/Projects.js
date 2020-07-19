import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import { projectsFetchData, voteProject } from '../redux/actions';

import { BASE_URL } from '../constants/baseUrl';

const projectsUrl = `${BASE_URL}projects`

class Projects extends React.Component {
    componentDidMount() {
        this.props.fetchProjects(projectsUrl);
        
    }

    render() {
        console.log(this.props.projects);
        return(
            <div>
                <Header />
                <div className="ProjectsContainer">
                    {this.props.projects.map((project, index) => (
                        <span key={index}>{project.title}</span>
                    ))} 
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    projects: state.projects
})

const mapDispatchToProps = dispatch => ({
    fetchProjects: url => dispatch(projectsFetchData(projectsUrl)),
    voteProject: (projectsUrl, id, text) => dispatch(voteProject(projectsUrl, id, text))
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);