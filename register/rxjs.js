import {Observable, of, from} from 'rxjs';
import register from '../register.js';

register('rxjs', {Observable});

// The next two lines are assumed to be for side effects only.
of; // eslint-disable-line no-unused-expressions
from; // eslint-disable-line no-unused-expressions
