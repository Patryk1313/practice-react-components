import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Article extends React.Component {
    state = {
        comments: [],
        content: ''
    }

    renderComments() {
        const {comments} = this.state

        return comments.map(name => {
            return (
                <li>
                    { name }
                </li>
            );
        });
    }

    inputChange = e => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    render() {
        const {title, body} = this.props;
        return (
            <article>
                <h1>{ title }</h1>
                <p>{ body }</p>
                <section onSubmit={this.submitHandler}>
                    <form>
                        <div>
                            <label>
                                <textarea
                                    onChange={this.inputChange}
                                    value={this.state.content}
                                    name = 'content'
                                    style={{ "minWidth": "300px", "minHeight": "120px" }} 
                                />
                            </label>
                        </div>
                        <div><input type="submit" value="dodaj komentarz" /></div>
                    </form>
                    <ul>
                        {this.renderComments()}
                    </ul>
                </section>
            </article>
        )
    }

    submitHandler = e => {
        e.preventDefault();
        
        const {comments, content} = this.state;

        if(content === '') {
            alert('Wpisz komentarz')
            return
        }

        const commentsCopy = comments.slice();
        commentsCopy.push(content);

        this.setState({comments: commentsCopy});
        this.setState({content: ''});
    }
}

root.render(
    <Article 
        title="Programowanie jest super!"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ipsum, eleifend vel quam eget, lobortis posuere arcu. In vitae eros in nisi sodales aliquam..."
    />
);
