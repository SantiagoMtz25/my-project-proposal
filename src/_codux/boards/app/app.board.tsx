import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowBackgroundColor: '#ff9090',
        canvasBackgroundColor: '#ff9090'
    },
    isSnippet: false
});
