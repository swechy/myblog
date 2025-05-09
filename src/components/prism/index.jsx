import React, {Component} from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-cshtml'; 
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
class PrismHighlighter extends Component {

    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    componentDidMount() {
        this.highlight();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.highlight();
    }

    highlight() {
        Prism.highlightElement(this.ref.current);
    }

    render() {
        const {language, plugins, code} = this.props;
        return (
            <pre className={!plugins ? "" : plugins.join(" ")}>
                <code ref={this.ref} className={`language-${language}`}>
                    {code}
                </code>
            </pre>
        );
    }
}

export default PrismHighlighter;