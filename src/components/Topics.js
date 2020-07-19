import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import { topicsFetchData, topicDelete, likeTopic } from '../redux/actions';
import { BASE_URL } from '../constants/baseUrl';

const topicsUrl = `${BASE_URL}topics`;
class Topics extends React.Component {
    state = {
        topic: '',
    }

    componentDidMount() {
        this.props.fetchTopics(topicsUrl)
    }

    addTopic = () => {
        const validData = JSON.stringify({title: this.state.topic});
        this.setState({ topic: '' });
        fetch(topicsUrl, {
            headers: {
                'token': localStorage.getItem('userToken'),
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: validData
        })
        .then(() => this.props.fetchTopics(topicsUrl))
    }

    onTopicChange = e => {
        this.setState({topic: e.target.value})
    }

    onLike = (e, topicsUrl, id) => {
        const button = e.target;
        if (button.className === "LikeButton") {
            button.className += " BlueLikeBackground";
            button.innerText = "Liked";

            this.props.likeTopic(topicsUrl, id, 'like');
        } else {
            button.className = "LikeButton";
            button.innerText = "Like";

            this.props.likeTopic(topicsUrl, id, 'unlike');
        }
    }

    render() {
        return(
            <div>
                <Header />
                <div className="TopicsContainer">

                    <div className="TopicInputContainer">
                        <input className="TopicInput" onChange={e => this.onTopicChange(e)} value={this.state.topic} />
                        <button className="TopicAddButton" onClick={this.addTopic}>Add Topic</button>
                    </div>

                    <div className="TopicsListContainer">

                        {this.props.topics.map((topic, index) => (
                            <div key={index} className='TopicContainer'>
                                <div className='TopicTitleContainer'>
                                    <span>{topic.title}</span>
                                </div>

                                <div className='TopicsButtonsContainer'>
                                    <button
                                        onClick={e => this.onLike(e, topicsUrl, topic.id)}
                                        className={topic.votedByMe ? "LikeButton BlueLikeBackground" : "LikeButton"}
                                    >
                                        {topic.votedByMe ? "Liked" : "Like"}
                                    </button>
                                    <button
                                        onClick={() => this.props.deleteTopic(topicsUrl, this.props.topics, topic.id)}
                                        disabled={!topic.canDelete}
                                        className='DeleteButton'
                                    >
                                        Delete
                                    </button>
                                </div>
                                
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    topics: state.topics
})

const mapDispatchToProps = dispatch => ({
    fetchTopics: url => dispatch(topicsFetchData(url)),
    deleteTopic: (url, topics, id) => dispatch(topicDelete(url, topics, id)),
    likeTopic: (topicsUrl, id, text) => dispatch(likeTopic(topicsUrl, id, text))
});

export default connect(mapStateToProps, mapDispatchToProps)(Topics);