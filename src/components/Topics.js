import React from 'react';
import { connect } from 'react-redux';

import { topicsFetchData } from '../redux/actions';
import { BASE_URL } from '../constants/baseUrl';

const topicsUrl = `${BASE_URL}topics`;
class Topics extends React.Component {
    state = {
        topic: '',
    }

    componentDidMount() {
        this.props.fetchTopics(topicsUrl)
        console.log(this.props.topics);
    }

    addTopic = () => {
        const validData = JSON.stringify({title: this.state.topic});

        fetch(topicsUrl, {
            headers: {
                'token': localStorage.getItem('userToken'),
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: validData
        })
        .then(res => res.json())
        .then(json => console.log(json))
    }

    onTopicChange = e => {
        this.setState({topic: e.target.value})
    }

    render() {
        
        return(
            <div>
                <div className="TopicInputContainer">
                    <input onChange={e => this.onTopicChange(e)} value={this.state.topicInput} />
                    <button onClick={this.addTopic}>Add Topic</button>
                </div>
                <div className="TopicsListContainer">
                    {this.props.topics.map((topic, index) => (
                        <h1 key={index}>{topic.title}</h1>
                    ))}
                </div>
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