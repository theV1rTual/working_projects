import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history }) {
    useEffect(() => {
        const unlisten = history.listen(() => {
            document.querySelector('.content-container').scroll(0,0);
        });
        return () => {
            unlisten();
        }
    }, [history]);

    return null;
}

export default withRouter(ScrollToTop);
