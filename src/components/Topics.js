import React from 'react';
import { connect } from 'react-redux';

import { topicsFetchData } from '../redux/actions';
import { BASE_URL } from '../constants/baseUrl';

class Topics extends React.Component {
    componentDidMount() {
        this.props.fetchTopics(`${BASE_URL}topics`)
    }

    render() {
        console.log(this.props.topics);
        return(
            <div>
                {this.props.topics.map(topics => <h1>{topics.title}</h1>)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    topics: state.topics
})

const mapDispatchToProps = dispatch => ({
    fetchTopics: url => dispatch(topicsFetchData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Topics);