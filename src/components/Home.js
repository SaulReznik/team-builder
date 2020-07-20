import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import { teamsFetchData } from '../redux/actions';

import { BASE_URL } from '../constants/baseUrl';
import avatarPlaceholder from '../avatar.png';

const teamsUrl = `${BASE_URL}teams`;

class Home extends React.Component {
    state = {
        teams: [
            {
                id: 1,
                name: 'Editor',
                topic: "Hooks",
                project: "Canvas",
                members: [
                    {
                        firstName: "Name",
                        lastName: "Lname",
                        avatarUrl: ""
                    },
                    {
                        firstName: "Name",
                        lastName: "Lname",
                        avatarUrl: ""
                    },
                    {
                        firstName: "Name",
                        lastName: "Lname",
                        avatarUrl: ""
                    },
                    {
                        firstName: "Name",
                        lastName: "Lname",
                        avatarUrl: ""
                    },
                ]
            },
        ]
    }

    componentDidMount() {
        this.props.fetchTeams(teamsUrl);
    }

    render() {
        console.log(this.props.teams);
        return(
            <div>
                <Header />
                <div className="TeamsContainer">
                    {/* Change state to props when endpoint will be ready */}
                    {this.state.teams.map((team, index) => (
                        <div key={index} className="TeamContainer">
                            <span className="TeamName">{team.name}</span>
                            <span className="TeamTopic"> Topic: {team.topic}</span>
                            <span className="TeamProject">Project: {team.project}</span>
                            <div className="MembersContainer">
                                {team.members.map((member, index) => (
                                    <div key={index} className="MemberContainer">
                                        <img src={member.avatarUrl || avatarPlaceholder} className="TeamMemberAvatar" />
                                        <span className="TeamMemberNameContainer">{member.firstName} {member.lastName}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    teams: state.teams
});

const mapDispatchToProps = dispatch => ({
    fetchTeams: teamsUrl => dispatch(teamsFetchData(teamsUrl))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);