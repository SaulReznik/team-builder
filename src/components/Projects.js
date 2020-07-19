import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import { projectsFetchData, voteProject, topicDelete } from '../redux/actions';

import { BASE_URL } from '../constants/baseUrl';

const projectsUrl = `${BASE_URL}projects`

class Projects extends React.Component {
    componentDidMount() {
        this.props.fetchProjects(projectsUrl);
    }

    componentDidUpdate() {
        this.props.fetchProjects(projectsUrl);
    }

    upvote = (e, projectsUrl, id) => {
        const upvoteDiv = e.target;

        if (upvoteDiv.className === "Upvote") {
            upvoteDiv.className = "UpvoteChecked";

            this.props.voteProject(projectsUrl, id, 'like');
        } else {
            upvoteDiv.className = "Upvote";

            this.props.voteProject(projectsUrl, id, 'unlike');
        }

        this.forceUpdate()
    }

    render() {
        return(
            <div>
                <Header />
                <div className="ProjectsContainer">
                    {this.props.projects.map((project, index) => (
                        <div key={index} className="ProjectContainer">
                            <div className="ProjectInfoContainer">
                                <div className="ProjectTitleContainer">
                                    <span className="ProjectTitle">{project.title}</span>
                                </div>
                                <div className="ProjectDescriptionContainer">
                                    <span className="ProjectDescription">{project.description}</span>
                                </div>
                            </div>
                            <div className="ProjectUpvoteContainer">
                                <div className="UpvoteContainer">
                                    <div 
                                        onClick={e => this.upvote(e, projectsUrl, project.id)} 
                                        className={project.votedByMe ? "UpvoteChecked" : "Upvote"} 
                                    />
                                </div>
                                <div className="UpvoteCountContainer">
                                    <span className="UpvoteCount">{project.votingsCount}</span>
                                </div>
                            </div>
                        </div>
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