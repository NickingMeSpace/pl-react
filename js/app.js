var newsData = [
    {
        author: "author1",
        text: "text1"
    },
    {
        author: "author2",
        text: "text2"
    },
    {
        author: "author3",
        text: "text3"
    },
    {
        author: "author4",
        text: "text4"
    },
];

var Article = React.createClass({
    propTypes: {
        item: React.PropTypes.shape({
            author: React.PropTypes.string.isRequired,
            text: React.PropTypes.string.isRequired,
        }),
        index2: React.PropTypes.shape({
            id: React.PropTypes.number.isRequired
        })
    },
    render() {
        var author = this.props.item.author;
        var text = this.props.item.text;
        return (
            <div key={this.props.index2.id} >
                Author: {author}, "{text}"
            </div>
        );
    }
});

var News = React.createClass({
    propTypes: {
        data2: React.PropTypes.array.isRequired
    },
    render() {
        var template;
        var news = this.props.data2;
        if(news && news.length > 0) {
            template = news.map((item, index) => {
                return (
                    <Article item={item} index2={{id: index}}/>
                );
            });
        } else {
            template = <div>Новостей нет</div>;
        }

        return (
            <div>
                Список новостей:
                {template}
                <strong className={news.length > 0 ?'' :'none'} >Кол-во новостей: {news.length}</strong>
            </div>
        );
    }
});


var Comments = React.createClass({
    render() {
        return (
            <div className="comments">Комментариев нет</div>
        );
    }
});

var App = React.createClass({
    render() {
        return (
            <div>
                <h1>News...</h1>
                <News data2={newsData} />
                <Comments/>
            </div>
        );
    }
});

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);