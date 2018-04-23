import React from 'react';
import api from '../utils/api'
import Loading from './loading';


function RepoGrid (props) {
    return (
        <ul className='popular-list'>
            {props.repos.map(function (repo, index) {
                return (
                    <li key={repo.name} className='popular-item'>
                        <div className='popular-rank'>#{index + 1}</div>
                        <ul className='space-list-items'>
                            <li>
                                <img
                                    className='avatar'
                                    src={repo.owner.avatar_url}
                                    alt={'Avatar for ' + repo.owner.login}
                                />
                            </li>
                            <li><a href={repo.html_url}>{repo.name}</a></li>
                            <li>@{repo.owner.login}</li>
                            <li>{repo.stargazers_count} stars</li>
                        </ul>
                    </li>
                )
            })}
        </ul>
    )
}

function SelectLanguage(props) {
    let languages = ['All', 'Javascript', 'Java', 'Ruby', 'Python'];
    return(
        <ul className="languages">
            {languages.map((lang) => {
                return <li
                    style={lang === props.selectedLanguage ? {color: '#d0021b'} : null}
                    onClick={props.onSelect.bind(this, lang)}
                    key={lang}>{lang}</li>
            })}
        </ul>)
}


class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: null
        }
    }

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage);
    }

    updateLanguage = (lang) => {
        this.setState({
           selectedLanguage: lang,
            repos:null
        });

        api.fetchPopularRepos(lang)
            .then((repo) => {
                this.setState({
                    repos: repo
                });
                console.log(this.state.repos)
            })
};
    render() {

        return (
        <div><SelectLanguage
            selectedLanguage={this.state.selectedLanguage}
            onSelect={this.updateLanguage}
                />
            {!this.state.repos ? <Loading speed="50" text="Derping" /> : <RepoGrid repos={this.state.repos}/> }

        </div>
        );


    }
}

export default Popular;