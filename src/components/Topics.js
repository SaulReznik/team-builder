import React from 'react';
import { connect } from 'react-redux';

import { topicsFetchData, topicDelete } from '../redux/actions';
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

    onLike = e => {
        const button = e.target;
        if (button.className === "LikeButton") {
            button.className += " BlueLikeBackground";
            button.innerText = "Liked"
        } else {
            button.className = "LikeButton";
            button.innerText = "Like";
        }
    }

    render() {
        return(
            <div>
                <div className="TopicInputContainer">
                    <input className="TopicInput" onChange={e => this.onTopicChange(e)} value={this.state.topicInput} />
                    <button className="TopicAddButton" onClick={this.addTopic}>Add Topic</button>
                </div>
                <div className="TopicsListContainer">
                    {this.props.topics.map((topic, index) => (
                        <div key={index} className='TopicContainer'>
                            <div className='TopicTitleContainer'>
                                <span>{topic.title}</span>
                            </div>
                            <div className='TopicsButtonsContainer'>
                                <button onClick={e => this.onLike(e)} className='LikeButton'>Like</button>
                                <button 
                                onClick={() => this.props.deleteTopic(topicsUrl, this.props.topics, topic.id)} 
                                disabled={!topic.canDelete} 
                                className='DeleteButton'
                                >Delete</button>
                            </div>
                        </div>
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
    fetchTopics: url => dispatch(topicsFetchData(url)),
    deleteTopic: (url, topics, id) => dispatch(topicDelete(url, topics, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Topics);