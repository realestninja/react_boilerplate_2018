import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Helloworld } from './components/helloworld';

export const render = element => {
	ReactDOM.render(<Helloworld />, element);
}

